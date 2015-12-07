if(!Interactive) {
  var Interactive = function() {
    var g, i, j, k, l, h = function(a) {
      this.target = a.target;
      if(document.defaultView && document.defaultView.getComputedStyle) {
        var b = document.defaultView.getComputedStyle(this.target, null);
        i = parseInt(b.paddingLeft, 10) || 0;
        j = parseInt(b.paddingTop, 10) || 0;
        k = parseInt(b.borderLeftWidth, 10) || 0;
        l = parseInt(b.borderTopWidth, 10) || 0
      }
      this.listeners = [];
      if(a.papplet && "draw" in a.papplet) {
        var e = this, f = a.papplet, c = a.papplet.draw;
        a.papplet.draw = function() {
          e.preDraw(f);
          c.apply(f);
          e.postDraw(f)
        }
      }
      var a = "mousemove mousedown mouseup click dblclick mouseover mouseout mouseenter mouseleave mousewheel DOMMouseScroll".split(" "), b = {mousemove:"mouseMoved", mousedown:"mousePressed", dblclick:"mouseDoubleClicked", mouseup:"mouseReleased", mousewheel:"mouseScrolled", DOMMouseScroll:"mouseScrolled"}, d;
      for(d in a) {
        (function(b, e, a, f) {
          var c = function(a) {
            var c, d;
            c = e;
            var g = 0;
            d = 0;
            if(c.offsetParent) {
              do {
                g += c.offsetLeft, d += c.offsetTop
              }while(c = c.offsetParent)
            }
            c = e;
            do {
              g -= c.scrollLeft || 0, d -= c.scrollTop || 0
            }while(c = c.parentNode);
            g += i;
            d += j;
            g += k;
            d += l;
            g += window.pageXOffset;
            d += window.pageYOffset;
            c = g;
            for(var h in b.listeners) {
              if(b.listeners[h].isActive() && f in b.listeners[h]) {
                if("mouseScrolled" == f) {
                  b.listeners[h][f](a.detail ? -1 * a.detail : a.wheelDelta / 40, a.pageX - c, a.pageY - d)
                }else {
                  b.listeners[h][f](a.pageX - c, a.pageY - d)
                }
              }
            }
          };
          if("addEventListener" in e) {
            e.addEventListener(a, c)
          }else {
            var d = e["on" + a];
            e["on" + a] = function(b) {
              var a = c.apply(b.target, [b]);
              d && d.apply(e, [b]);
              return a
            }
          }
        })(this, this.target, a[d], b[a[d]])
      }
      this.add = function(b) {
        this.listeners.push(b)
      };
      this.preDraw = function() {
      };
      this.postDraw = function(b) {
        if(this.listeners) {
          for(var a in this.listeners) {
            "draw" in this.listeners[a] && this.listeners[a].draw(b)
          }
        }
      }
    };
    h.make = function(a) {
      g = new h({target:a.externals.canvas, papplet:a})
    };
    h.add = function(a) {
      var b = null;
      if(g) {
        if("[object Array]" === Object.prototype.toString.call(a)) {
          for(var b = 0, e = a.length;b < e;b++) {
            g.add(new m(a[b]))
          }
          return null
        }
        b = new m(a);
        g.add(b)
      }
      return b
    };
    h.setActive = function(a, b) {
      if(g) {
        for(var e in g.listeners) {
          var f = g.listeners[e];
          f.listener == a && f.setActive(b)
        }
      }
    };
    h.insideRect = function(a, b, e, f, c, d) {
      return c >= a && c <= a + e && d >= b && d <= b + f
    };
    h.on = function() {
      if(g) {
        var a = g;
        a.eventBindings || (a.eventBindings = []);
        var b, e, f, c;
        if(3 > arguments.length) {
          throw"Interactive.on() ... not enough arguments";
        }
        3 == arguments.length ? (b = null, e = arguments[0], f = arguments[1], c = arguments[2]) : 4 == arguments.length && (b = arguments[0], e = arguments[1], f = arguments[2], c = arguments[3]);
        var d = a.eventBindings[e];
        d || (d = [], a.eventBindings[e] = d);
        d.push({callback:function() {
          f[c].apply(f, arguments)
        }, source:b})
      }
    };
    h.send = function() {
      if(g) {
        var a = g, b, e, f = [];
        if(2 > arguments.length) {
          throw"Interactive.send() ... not enough arguments";
        }
        if("object" === typeof arguments[0]) {
          b = arguments[0];
          e = arguments[1];
          var c = 2, d = arguments.length
        }else {
          b = null, e = arguments[0], c = 1, d = arguments.length
        }
        for(;c < d;c++) {
          f.push(arguments[c])
        }
        if(a = a.eventBindings[e]) {
          c = 0;
          for(d = a.length;c < d;c++) {
            a[c] && a[c].source === b && a[c].callback.apply(null, f)
          }
        }
      }
    };
    var m = function(a) {
      this.listener = a;
      "isInside" in this.listener || ("x" in this.listener && "y" in this.listener && "width" in this.listener && "height" in this.listener ? this.listener.isInside = function(b, a) {
        return h.insideRect(this.x, this.y, this.width, this.height, b, a)
      } : alert("Interactive: listener must implement\n\tpublic boolean isInside (float mx, float my)\nor must have fields\n\tfloat x, y, width, height;"));
      this.pressed = this.dragged = this.hover = !1;
      this.activated = !0;
      this.lastPressed = this.draggedDistY = this.draggedDistX = this.clickedPositionY = this.clickedPositionX = this.clickedMouseY = this.clickedMouseX = 0;
      this.activated = !0;
      this.debug = !1;
      this.setDebug = function(b) {
        this.debug = b ? true : false
      };
      this.mousePressed = function(b, a) {
        if(this.activated) {
          if(this.pressed = this.listener.isInside(b, a)) {
            this.clickedPositionX = this.listener.x;
            this.clickedPositionY = this.listener.y;
            this.clickedMouseX = b;
            this.clickedMouseY = a;
            "mousePressed" in this.listener && this.listener.mousePressed(b, a)
          }
        }
      };
      this.mouseDoubleClicked = function(b, a) {
        this.activated && this.listener.isInside(b, a) && "mouseDoubleClicked" in this.listener && this.listener.mouseDoubleClicked(b, a)
      };
      this.mouseMoved = function(b, a) {
        if(this.activated) {
          if(this.dragged = this.pressed) {
            this.draggedDistX = this.clickedMouseX - b;
            this.draggedDistY = this.clickedMouseY - a;
            "mouseDragged" in this.listener && this.listener.mouseDragged(b, a, this.clickedPositionX - this.draggedDistX, this.clickedPositionY - this.draggedDistY)
          }else {
            var f = this.listener.isInside(b, a);
            !f && this.hover ? "mouseExited" in this.listener && this.listener.mouseExited(b, a) : f && !this.hover ? "mouseEntered" in this.listener && this.listener.mouseEntered(b, a) : f && "mouseMoved" in this.listener && this.listener.mouseMoved(b, a);
            this.hover = f
          }
        }
      };
      this.mouseReleased = function(a, e) {
        if(this.activated) {
          if(this.dragged) {
            this.draggedDistX = this.clickedMouseX - a;
            this.draggedDistY = this.clickedMouseY - e
          }
          this.pressed && "mouseReleased" in this.listener && this.listener.mouseReleased(a, e);
          this.pressed = this.dragged = false
        }
      };
      this.mouseScrolled = function(a, e, f) {
        this.activated && this.listener.isInside(e, f) && "mouseScrolled" in this.listener && this.listener.mouseScrolled(a)
      };
      this.setActive = function(a) {
        this.activated = a;
        this.listener && "setActive" in this.listener && this.listener.setActive(a)
      };
      this.isActive = function() {
        return this.listener && "isActive" in this.listener ? this.listener.isActive() : this.activated
      };
      this.draw = function(a) {
        if(this.activated && this.listener && "draw" in this.listener) {
          return this.listener.draw(a)
        }
      }
    };
    return h
  }()
}
;