Array.prototype.map || (Array.prototype.map = function(a, c) {
  var b = this.length >>> 0;
  if("function" !== typeof a) {
    throw new TypeError;
  }
  for(var d = Array(b), e = 0;e < b;e++) {
    e in this && (d[e] = a.call(c, this[e], e, this))
  }
  return d
});
function BigInteger(a, c) {
  if(!(this instanceof BigInteger)) {
    return a instanceof BigInteger ? a : typeof a === "undefined" ? BigInteger.ZERO : BigInteger.parse(a)
  }
  for(a = a || [];a.length && !a[a.length - 1];) {
    --a.length
  }
  this._d = a;
  this._s = a.length ? c || 1 : 0
}
BigInteger.base = 1E7;
BigInteger.base_log10 = 7;
BigInteger.ZERO = new BigInteger([], 0);
BigInteger.ONE = new BigInteger([1], 1);
BigInteger.M_ONE = new BigInteger(BigInteger.ONE._d, -1);
BigInteger._0 = BigInteger.ZERO;
BigInteger._1 = BigInteger.ONE;
BigInteger.small = [BigInteger.ZERO, BigInteger.ONE, new BigInteger([2], 1), new BigInteger([3], 1), new BigInteger([4], 1), new BigInteger([5], 1), new BigInteger([6], 1), new BigInteger([7], 1), new BigInteger([8], 1), new BigInteger([9], 1), new BigInteger([10], 1), new BigInteger([11], 1), new BigInteger([12], 1), new BigInteger([13], 1), new BigInteger([14], 1), new BigInteger([15], 1), new BigInteger([16], 1), new BigInteger([17], 1), new BigInteger([18], 1), new BigInteger([19], 1), new BigInteger([20], 
1), new BigInteger([21], 1), new BigInteger([22], 1), new BigInteger([23], 1), new BigInteger([24], 1), new BigInteger([25], 1), new BigInteger([26], 1), new BigInteger([27], 1), new BigInteger([28], 1), new BigInteger([29], 1), new BigInteger([30], 1), new BigInteger([31], 1), new BigInteger([32], 1), new BigInteger([33], 1), new BigInteger([34], 1), new BigInteger([35], 1), new BigInteger([36], 1)];
BigInteger.digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
BigInteger.prototype.toString = function(a) {
  a = +a || 10;
  if(a < 2 || a > 36) {
    throw Error("illegal radix " + a + ".");
  }
  if(this._s === 0) {
    return"0"
  }
  if(a === 10) {
    for(var a = this._s < 0 ? "-" : "", a = a + this._d[this._d.length - 1].toString(), c = this._d.length - 2;c >= 0;c--) {
      for(var b = this._d[c].toString();b.length < BigInteger.base_log10;) {
        b = "0" + b
      }
      a = a + b
    }
    return a
  }
  for(var c = BigInteger.digits, a = BigInteger.small[a], b = this._s, d = this.abs(), e = [], g;d._s !== 0;) {
    g = d.divRem(a);
    d = g[0];
    g = g[1];
    e.push(c[g.valueOf()])
  }
  return(b < 0 ? "-" : "") + e.reverse().join("")
};
BigInteger.radixRegex = [/^$/, /^$/, /^[01]*$/, /^[012]*$/, /^[0-3]*$/, /^[0-4]*$/, /^[0-5]*$/, /^[0-6]*$/, /^[0-7]*$/, /^[0-8]*$/, /^[0-9]*$/, /^[0-9aA]*$/, /^[0-9abAB]*$/, /^[0-9abcABC]*$/, /^[0-9a-dA-D]*$/, /^[0-9a-eA-E]*$/, /^[0-9a-fA-F]*$/, /^[0-9a-gA-G]*$/, /^[0-9a-hA-H]*$/, /^[0-9a-iA-I]*$/, /^[0-9a-jA-J]*$/, /^[0-9a-kA-K]*$/, /^[0-9a-lA-L]*$/, /^[0-9a-mA-M]*$/, /^[0-9a-nA-N]*$/, /^[0-9a-oA-O]*$/, /^[0-9a-pA-P]*$/, /^[0-9a-qA-Q]*$/, /^[0-9a-rA-R]*$/, /^[0-9a-sA-S]*$/, /^[0-9a-tA-T]*$/, /^[0-9a-uA-U]*$/, 
/^[0-9a-vA-V]*$/, /^[0-9a-wA-W]*$/, /^[0-9a-xA-X]*$/, /^[0-9a-yA-Y]*$/, /^[0-9a-zA-Z]*$/];
BigInteger.parse = function(a, c) {
  a = a.toString();
  if(typeof c === "undefined" || +c === 10) {
    var b;
    b = a.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/, "e");
    a = b.replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/, function(a, c, b, d, e) {
      var e = +e, f = e < 0, g = b.length + e, a = (f ? b : d).length, e = (e = Math.abs(e)) >= a ? e - a + f : 0, a = Array(e + 1).join("0"), b = b + d;
      return(c || "") + (f ? b = a + b : b = b + a).substr(0, g = g + (f ? a.length : 0)) + (g < b.length ? "." + b.substr(g) : "")
    })
  }
  var d = /^([+\-]?)(0[xXcCbB])?([0-9A-Za-z]*)(?:\.\d*)?$/.exec(a);
  if(d) {
    b = d[1] || "+";
    var e = d[2] || "", d = d[3] || "";
    if(typeof c === "undefined") {
      c = e === "0x" || e === "0X" ? 16 : e === "0c" || e === "0C" ? 8 : e === "0b" || e === "0B" ? 2 : 10
    }else {
      if(c < 2 || c > 36) {
        throw Error("Illegal radix " + c + ".");
      }
    }
    c = +c;
    if(!BigInteger.radixRegex[c].test(d)) {
      throw Error("Bad digit for radix " + c);
    }
    d = d.replace(/^0+/, "").split("");
    if(d.length === 0) {
      return BigInteger.ZERO
    }
    b = b === "-" ? -1 : 1;
    if(c == 10) {
      for(e = [];d.length >= BigInteger.base_log10;) {
        e.push(parseInt(d.splice(-BigInteger.base_log10).join(""), 10))
      }
      e.push(parseInt(d.join(""), 10));
      return new BigInteger(e, b)
    }
    if(c === BigInteger.base) {
      return new BigInteger(d.map(Number).reverse(), b)
    }
    for(var e = BigInteger.ZERO, c = BigInteger.small[c], g = BigInteger.small, f = 0;f < d.length;f++) {
      e = e.multiply(c).add(g[parseInt(d[f], 36)])
    }
    return new BigInteger(e._d, b)
  }
  throw Error("Invalid BigInteger format: " + a);
};
BigInteger.prototype.add = function(a) {
  if(this._s === 0) {
    return BigInteger(a)
  }
  a = BigInteger(a);
  if(a._s === 0) {
    return this
  }
  if(this._s !== a._s) {
    a = a.negate();
    return this.subtract(a)
  }
  for(var c = this._d, a = a._d, b = c.length, d = a.length, e = Array(Math.max(b, d) + 1), g = Math.min(b, d), f = 0, h = 0;h < g;h++) {
    f = c[h] + a[h] + f;
    e[h] = f % BigInteger.base;
    f = f / BigInteger.base | 0
  }
  if(d > b) {
    c = a;
    b = d
  }
  for(h = g;f && h < b;h++) {
    f = c[h] + f;
    e[h] = f % BigInteger.base;
    f = f / BigInteger.base | 0
  }
  for(f && (e[h] = f);h < b;h++) {
    e[h] = c[h]
  }
  return new BigInteger(e, this._s)
};
BigInteger.prototype.negate = function() {
  return new BigInteger(this._d, -this._s)
};
BigInteger.prototype.abs = function() {
  return this._s < 0 ? this.negate() : this
};
BigInteger.prototype.subtract = function(a) {
  if(this._s === 0) {
    return BigInteger(a).negate()
  }
  a = BigInteger(a);
  if(a._s === 0) {
    return this
  }
  if(this._s !== a._s) {
    a = a.negate();
    return this.add(a)
  }
  var c = this, b;
  if(this._s < 0) {
    b = c;
    c = new BigInteger(a._d, 1);
    a = new BigInteger(b._d, 1)
  }
  var d = c.compareAbs(a);
  if(d === 0) {
    return BigInteger.ZERO
  }
  if(d < 0) {
    b = a;
    a = c;
    c = b
  }
  c = c._d;
  a = a._d;
  b = c.length;
  var e = a.length, g = Array(b), f = 0, h, i;
  for(h = 0;h < e;h++) {
    i = c[h] - f - a[h];
    if(i < 0) {
      i = i + BigInteger.base;
      f = 1
    }else {
      f = 0
    }
    g[h] = i
  }
  for(h = e;h < b;h++) {
    i = c[h] - f;
    if(i < 0) {
      i = i + BigInteger.base
    }else {
      g[h++] = i;
      break
    }
    g[h] = i
  }
  for(;h < b;h++) {
    g[h] = c[h]
  }
  return new BigInteger(g, d)
};
(function() {
  function a(a, c) {
    for(var e = a._d, g = e.slice(), f = 0;;) {
      var h = (e[f] || 0) + 1;
      g[f] = h % BigInteger.base;
      if(h <= BigInteger.base - 1) {
        break
      }
      ++f
    }
    return new BigInteger(g, c)
  }
  function c(a, c) {
    for(var e = a._d, g = e.slice(), f = 0;;) {
      var h = (e[f] || 0) - 1;
      if(h < 0) {
        g[f] = h + BigInteger.base
      }else {
        g[f] = h;
        break
      }
      ++f
    }
    return new BigInteger(g, c)
  }
  BigInteger.prototype.next = function() {
    switch(this._s) {
      case 0:
        return BigInteger.ONE;
      case -1:
        return c(this, -1);
      default:
        return a(this, 1)
    }
  };
  BigInteger.prototype.prev = function() {
    switch(this._s) {
      case 0:
        return BigInteger.M_ONE;
      case -1:
        return a(this, -1);
      default:
        return c(this, 1)
    }
  }
})();
BigInteger.prototype.compareAbs = function(a) {
  if(this === a) {
    return 0
  }
  if(!(a instanceof BigInteger)) {
    if(!isFinite(a)) {
      return isNaN(a) ? a : -1
    }
    a = BigInteger(a)
  }
  if(this._s === 0) {
    return a._s !== 0 ? -1 : 0
  }
  if(a._s === 0) {
    return 1
  }
  var c = this._d.length, b = a._d.length;
  if(c < b) {
    return-1
  }
  if(c > b) {
    return 1
  }
  b = this._d;
  a = a._d;
  for(c = c - 1;c >= 0;c--) {
    if(b[c] !== a[c]) {
      return b[c] < a[c] ? -1 : 1
    }
  }
  return 0
};
BigInteger.prototype.compare = function(a) {
  if(this === a) {
    return 0
  }
  a = BigInteger(a);
  return this._s === 0 ? -a._s : this._s === a._s ? this.compareAbs(a) * this._s : this._s
};
BigInteger.prototype.isUnit = function() {
  return this === BigInteger.ONE || this === BigInteger.M_ONE || this._d.length === 1 && this._d[0] === 1
};
BigInteger.prototype.multiply = function(a) {
  if(this._s === 0) {
    return BigInteger.ZERO
  }
  a = BigInteger(a);
  if(a._s === 0) {
    return BigInteger.ZERO
  }
  if(this.isUnit()) {
    return this._s < 0 ? a.negate() : a
  }
  if(a.isUnit()) {
    return a._s < 0 ? this.negate() : this
  }
  if(this === a) {
    return this.square()
  }
  var c = this._d.length >= a._d.length, b = (c ? this : a)._d, c = (c ? a : this)._d, d = b.length, e = c.length, g = d + e, f = Array(g), h;
  for(h = 0;h < g;h++) {
    f[h] = 0
  }
  for(h = 0;h < e;h++) {
    for(var g = 0, i = c[h], l = d + h, k, j = h;j < l;j++) {
      k = f[j] + i * b[j - h] + g;
      g = k / BigInteger.base | 0;
      f[j] = k % BigInteger.base | 0
    }
    if(g) {
      k = f[j] + g;
      f[j] = k % BigInteger.base
    }
  }
  return new BigInteger(f, this._s * a._s)
};
BigInteger.prototype.multiplySingleDigit = function(a) {
  if(a === 0 || this._s === 0) {
    return BigInteger.ZERO
  }
  if(a === 1) {
    return this
  }
  var c;
  if(this._d.length === 1) {
    c = this._d[0] * a;
    return c >= BigInteger.base ? new BigInteger([c % BigInteger.base | 0, c / BigInteger.base | 0], 1) : new BigInteger([c], 1)
  }
  if(a === 2) {
    return this.add(this)
  }
  if(this.isUnit()) {
    return new BigInteger([a], 1)
  }
  var b = this._d, d = b.length;
  c = d + 1;
  for(var e = Array(c), g = 0;g < c;g++) {
    e[g] = 0
  }
  for(var f = g = 0;f < d;f++) {
    c = a * b[f] + g;
    g = c / BigInteger.base | 0;
    e[f] = c % BigInteger.base | 0
  }
  g && (e[f] = g % BigInteger.base);
  return new BigInteger(e, 1)
};
BigInteger.prototype.square = function() {
  if(this._s === 0) {
    return BigInteger.ZERO
  }
  if(this.isUnit()) {
    return BigInteger.ONE
  }
  var a = this._d, c = a.length, b = Array(c + c + 1), d, e, g, f;
  for(f = 0;f < c;f++) {
    g = f * 2;
    d = a[f] * a[f];
    e = d / BigInteger.base | 0;
    b[g] = d % BigInteger.base;
    b[g + 1] = e
  }
  for(f = 0;f < c;f++) {
    e = 0;
    g = f * 2 + 1;
    for(var h = f + 1;h < c;h++, g++) {
      d = a[h] * a[f] * 2 + b[g] + e;
      e = d / BigInteger.base | 0;
      b[g] = d % BigInteger.base
    }
    g = c + f;
    d = e + b[g];
    e = d / BigInteger.base | 0;
    b[g] = d % BigInteger.base;
    b[g + 1] = b[g + 1] + e
  }
  return new BigInteger(b, 1)
};
BigInteger.prototype.quotient = function(a) {
  return this.divRem(a)[0]
};
BigInteger.prototype.divide = BigInteger.prototype.quotient;
BigInteger.prototype.remainder = function(a) {
  return this.divRem(a)[1]
};
BigInteger.prototype.divRem = function(a) {
  a = BigInteger(a);
  if(a._s === 0) {
    throw Error("Divide by zero");
  }
  if(this._s === 0) {
    return[BigInteger.ZERO, BigInteger.ZERO]
  }
  if(a._d.length === 1) {
    return this.divRemSmall(a._s * a._d[0])
  }
  switch(this.compareAbs(a)) {
    case 0:
      return[this._s === a._s ? BigInteger.ONE : BigInteger.M_ONE, BigInteger.ZERO];
    case -1:
      return[BigInteger.ZERO, this]
  }
  var c = this._s * a._s, b = a.abs(), d = this._d.slice(), e = [], g, f = new BigInteger([], 1);
  for(f._s = 1;d.length;) {
    f._d.unshift(d.pop());
    f = new BigInteger(f._d, 1);
    if(f.compareAbs(a) < 0) {
      e.push(0)
    }else {
      if(f._s === 0) {
        g = 0
      }else {
        var h = f._d.length;
        g = b._d.length;
        h = f._d[h - 1] * BigInteger.base + f._d[h - 2];
        g = b._d[g - 1] * BigInteger.base + b._d[g - 2];
        f._d.length > b._d.length && (h = (h + 1) * BigInteger.base);
        g = Math.ceil(h / g)
      }
      do {
        h = b.multiplySingleDigit(g);
        if(h.compareAbs(f) <= 0) {
          break
        }
        g--
      }while(g);
      e.push(g);
      if(g) {
        g = f.subtract(h);
        f._d = g._d.slice()
      }
    }
  }
  return[new BigInteger(e.reverse(), c), new BigInteger(f._d, this._s)]
};
BigInteger.prototype.divRemSmall = function(a) {
  a = +a;
  if(a === 0) {
    throw Error("Divide by zero");
  }
  var c = this._s * (a < 0 ? -1 : 1), a = Math.abs(a);
  if(a < 1 || a >= BigInteger.base) {
    throw Error("Argument out of range");
  }
  if(this._s === 0) {
    return[BigInteger.ZERO, BigInteger.ZERO]
  }
  if(a === 1 || a === -1) {
    return[c === 1 ? this.abs() : new BigInteger(this._d, c), BigInteger.ZERO]
  }
  if(this._d.length === 1) {
    var b = new BigInteger([this._d[0] / a | 0], 1), a = new BigInteger([this._d[0] % a | 0], 1);
    c < 0 && (b = b.negate());
    this._s < 0 && (a = a.negate());
    return[b, a]
  }
  for(var d = this._d.slice(), b = Array(d.length), e = 0, g = 0, f = 0, h;d.length;) {
    e = e * BigInteger.base + d[d.length - 1];
    if(e < a) {
      b[f++] = 0;
      d.pop();
      g = BigInteger.base * g + e
    }else {
      h = e === 0 ? 0 : e / a | 0;
      g = e - a * h;
      if(b[f++] = h) {
        d.pop();
        e = g
      }else {
        d.pop()
      }
    }
  }
  a = new BigInteger([g], 1);
  this._s < 0 && (a = a.negate());
  return[new BigInteger(b.reverse(), c), a]
};
BigInteger.prototype.isEven = function() {
  var a = this._d;
  return this._s === 0 || a.length === 0 || a[0] % 2 === 0
};
BigInteger.prototype.isOdd = function() {
  return!this.isEven()
};
BigInteger.prototype.sign = function() {
  return this._s
};
BigInteger.prototype.isPositive = function() {
  return this._s > 0
};
BigInteger.prototype.isNegative = function() {
  return this._s < 0
};
BigInteger.prototype.isZero = function() {
  return this._s === 0
};
BigInteger.prototype.exp10 = function(a) {
  a = +a;
  if(a === 0) {
    return this
  }
  if(Math.abs(a) > Number(BigInteger.MAX_EXP)) {
    throw Error("exponent too large in BigInteger.exp10");
  }
  if(a > 0) {
    for(var c = new BigInteger(this._d.slice(), this._s);a >= BigInteger.base_log10;a = a - BigInteger.base_log10) {
      c._d.unshift(0)
    }
    if(a == 0) {
      return c
    }
    c._s = 1;
    c = c.multiplySingleDigit(Math.pow(10, a));
    return this._s < 0 ? c.negate() : c
  }
  if(-a >= this._d.length * BigInteger.base_log10) {
    return BigInteger.ZERO
  }
  c = new BigInteger(this._d.slice(), this._s);
  for(a = -a;a >= BigInteger.base_log10;a = a - BigInteger.base_log10) {
    c._d.shift()
  }
  return a == 0 ? c : c.divRemSmall(Math.pow(10, a))[0]
};
BigInteger.prototype.pow = function(a) {
  if(this.isUnit()) {
    return this._s > 0 ? this : BigInteger(a).isOdd() ? this : this.negate()
  }
  a = BigInteger(a);
  if(a._s === 0) {
    return BigInteger.ONE
  }
  if(a._s < 0) {
    if(this._s === 0) {
      throw Error("Divide by zero");
    }
    return BigInteger.ZERO
  }
  if(this._s === 0) {
    return BigInteger.ZERO
  }
  if(a.isUnit()) {
    return this
  }
  if(a.compareAbs(BigInteger.MAX_EXP) > 0) {
    throw Error("exponent too large in BigInteger.pow");
  }
  for(var c = this, b = BigInteger.ONE, d = BigInteger.small[2];a.isPositive();) {
    if(a.isOdd()) {
      b = b.multiply(c);
      if(a.isUnit()) {
        break
      }
    }
    c = c.square();
    a = a.quotient(d)
  }
  return b
};
BigInteger.prototype.modPow = function(a, c) {
  for(var b = BigInteger.ONE, d = this;a.isPositive();) {
    a.isOdd() && (b = b.multiply(d).remainder(c));
    a = a.quotient(BigInteger.small[2]);
    a.isPositive() && (d = d.square().remainder(c))
  }
  return b
};
BigInteger.prototype.log = function() {
  switch(this._s) {
    case 0:
      return-Infinity;
    case -1:
      return NaN
  }
  var a = this._d.length;
  if(a * BigInteger.base_log10 < 30) {
    return Math.log(this.valueOf())
  }
  var c = Math.ceil(30 / BigInteger.base_log10), b = this._d.slice(a - c);
  return Math.log((new BigInteger(b, 1)).valueOf()) + (a - c) * Math.log(BigInteger.base)
};
BigInteger.prototype.valueOf = function() {
  return parseInt(this.toString(), 10)
};
BigInteger.prototype.toJSValue = function() {
  return parseInt(this.toString(), 10)
};
BigInteger.MAX_EXP = BigInteger(2147483647);
(function() {
  function a(a) {
    return function(c) {
      return a.call(BigInteger(c))
    }
  }
  function c(a) {
    return function(c, b) {
      return a.call(BigInteger(c), BigInteger(b))
    }
  }
  function b(a) {
    return function(c, b, d) {
      return a.call(BigInteger(c), BigInteger(b), BigInteger(d))
    }
  }
  var d, e, g = ["toJSValue", "isEven", "isOdd", "sign", "isZero", "isNegative", "abs", "isUnit", "square", "negate", "isPositive", "toString", "next", "prev", "log"], f = ["compare", "remainder", "divRem", "subtract", "add", "quotient", "divide", "multiply", "pow", "compareAbs"], h = ["modPow"];
  for(d = 0;d < g.length;d++) {
    e = g[d];
    BigInteger[e] = a(BigInteger.prototype[e])
  }
  for(d = 0;d < f.length;d++) {
    e = f[d];
    BigInteger[e] = c(BigInteger.prototype[e])
  }
  for(d = 0;d < h.length;d++) {
    e = h[d];
    BigInteger[e] = b(BigInteger.prototype[e])
  }
  BigInteger.exp10 = function(a, c) {
    return BigInteger(a).exp10(c)
  }
})();
"undefined" !== typeof exports && (exports.BigInteger = BigInteger);
var CombinatoricsBase = function() {
  var a = function(a, b) {
    this.elements = a || NaN;
    this.length = b || NaN;
    this.current = this.totalResults = void 0;
    this.indices = []
  };
  a.prototype.numberOfElements = function() {
    return this.elements
  };
  a.prototype.positionInPercent = function() {
    return this.current.valueOf() / this.totalResults.valueOf() * 100
  };
  a.prototype.position = function() {
    return this.current.valueOf()
  };
  a.prototype.positionAsInt = a.prototype.position;
  a.prototype.positionAsLong = a.prototype.position;
  a.prototype.total = function() {
    return BigInteger(this.totalResults)
  };
  a.prototype.totalAsInt = function() {
    return this.total().valueOf()
  };
  a.prototype.totalAsLong = a.prototype.totalAsInt;
  a.prototype.rewind = function() {
  };
  a.prototype.hasMore = function() {
  };
  a.prototype.next = function() {
  };
  a.prototype.nextAndStep = function(a) {
    for(var b = this.next(), d = 0;d < a - 1;) {
      this.next();
      d++
    }
    return b
  };
  a.prototype.increase = function() {
    this.current = this.current.add(BigInteger.ONE)
  };
  a.prototype.decrease = function() {
    this.current = this.current.subtract(BigInteger.ONE)
  };
  a.prototype.factorial = function(a) {
    for(var b = BigInteger.ONE, d = BigInteger.ONE, e = 1;e <= a;e++) {
      b = b.multiply(d);
      d = d.add(BigInteger.ONE)
    }
    return b
  };
  return a
}(), CombinatoricsBaseSet = function() {
  var a = function(a, b, d) {
    this.from = b || 0;
    this.to = d || a;
    this.currentSet = NaN;
    this.generator = void 0;
    this.elements = a;
    this.length = this.from;
    this.rewind()
  };
  a.prototype = new CombinatoricsBase;
  a.prototype.constructor = a;
  a.prototype.hasMore = function() {
    return this.hasMoreInSet()
  };
  a.prototype.hasMoreInSet = function() {
    return this.currentSet < this.to ? true : this.generator.hasMore()
  };
  a.prototype.next = function() {
    var a = this.generator.next();
    if(!this.generator.hasMore() && this.hasMoreInSet()) {
      this.currentSet++;
      this.length = this.from + this.currentSet;
      this.generator = this.nextGenerator()
    }
    return a
  };
  a.prototype.nextGenerator = function() {
  };
  return a
}(), Variation = function() {
  var a = function(a, b) {
    this.elements = a;
    this.length = b;
    this.bigElements = BigInteger(this.elements);
    this.totalResults = this.bigElements.pow(this.length);
    this.rewind();
    this.deviders = Array(this.length);
    for(var d = 0, e = this.length;d < e;d++) {
      this.deviders[this.length - 1 - d] = this.bigElements.pow(d + 1).divide(this.bigElements)
    }
  };
  a.prototype = new CombinatoricsBase;
  a.prototype.constructor = a;
  a.prototype.rewind = function() {
    this.current = BigInteger(BigInteger.ZERO);
    this.indices = Array(this.length);
    for(var a = 0, b = this.length;a < b;a++) {
      this.indices[a] = 0
    }
  };
  a.prototype.hasMore = function() {
    return this.current.compare(this.totalResults) < 0
  };
  a.prototype.next = function() {
    if(this.current.compare(BigInteger.ZERO) == 0) {
      this.increase();
      return this.indices.slice(0)
    }
    if(this.current.compare(this.totalResults) == 0) {
      return this.indices.slice(0)
    }
    for(var a = this.length - 1;a >= 0;a--) {
      this.indices[a] = parseInt(this.current.divide(this.deviders[a]).remainder(this.bigElements).valueOf())
    }
    this.increase();
    return this.indices.slice(0)
  };
  return a
}(), VariationSet = function() {
  var a = function() {
    CombinatoricsBaseSet.apply(this, arguments)
  };
  a.prototype = new CombinatoricsBaseSet;
  a.prototype.constructor = a;
  a.prototype.rewind = function() {
    this.current = BigInteger(BigInteger.ZERO);
    this.totalResults = BigInteger(BigInteger.ZERO);
    for(var a = Array(this.to - this.from + 1), b = this.from, d = this.to;b <= d;b++) {
      a[b] = new Variation(this.elements, b);
      this.totalResults = this.totalResults.add(a[b].total())
    }
    this.generator = new Variation(this.elements, this.from);
    this.current = 0;
    this.currentSet = this.from
  };
  a.prototype.nextGenerator = function() {
    return this.generator = new Variation(this.elements, this.currentSet)
  };
  return a
}(), Permutation = function() {
  var a = function(a) {
    this.elements = a;
    this.totalResults = this.factorial(this.elements);
    this.rewind()
  };
  a.prototype = new CombinatoricsBase;
  a.prototype.constructor = a;
  a.prototype.rewind = function() {
    this.current = this.totalResults;
    this.indices = Array(this.elements);
    for(var a = 0, b = this.indices.length;a < b;a++) {
      this.indices[a] = a
    }
  };
  a.prototype.hasMore = function() {
    return this.current.compare(BigInteger.ZERO) > 0
  };
  a.prototype.next = function() {
    if(this.current.compare(BigInteger.ZERO) == 0) {
      return this.indices.slice(0)
    }
    if(this.current.compare(this.totalResults) == 0) {
      this.decrease();
      return this.indices.slice(0)
    }
    for(var a = this.indices.length - 2;this.indices[a] > this.indices[a + 1];) {
      a--
    }
    for(var b = this.indices.length - 1;this.indices[a] > this.indices[b];) {
      b--
    }
    var d = this.indices[b];
    this.indices[b] = this.indices[a];
    this.indices[a] = d;
    b = this.indices.length - 1;
    for(a = a + 1;b > a;) {
      d = this.indices[a];
      this.indices[a] = this.indices[b];
      this.indices[b] = d;
      b--;
      a++
    }
    this.decrease();
    return this.indices.slice(0)
  };
  a.prototype.positionInPercent = function() {
    return 100 - CombinatoricsBase.prototype.positionInPercent.call(this)
  };
  a.prototype.positionAsInt = function() {
    return parseInt(this.getPosition())
  };
  a.prototype.positionAsLong = function() {
    return parseInt(this.getPosition())
  };
  a.prototype.position = function() {
    return this.getPosition()
  };
  a.prototype.getPosition = function() {
    return this.totalResults.subtract(this.current)
  };
  return a
}(), Combination = function() {
  var a = function() {
    this.length = this.elements = arguments[0];
    if(arguments.length > 1) {
      this.length = arguments[1]
    }
    this.totalResults = this.length == 0 ? BigInteger(BigInteger.ZERO) : this.length == 1 ? BigInteger(this.elements) : this.factorial(this.elements).divide(this.factorial(this.length).multiply(this.factorial(this.elements - this.length)));
    this.rewind()
  };
  a.prototype = new CombinatoricsBase;
  a.prototype.constructor = a;
  a.prototype.rewind = function() {
    this.current = BigInteger(BigInteger.ZERO);
    this.indices = Array(this.length);
    for(var a = 0, b = this.indices.length;a < b;a++) {
      this.indices[a] = a
    }
  };
  a.prototype.hasMore = function() {
    return this.current.compare(this.totalResults) < 0
  };
  a.prototype.next = function() {
    if(this.current.compare(BigInteger.ZERO) == 0) {
      this.increase();
      return this.indices.slice(0)
    }
    if(this.current.compare(this.totalResults) == 0) {
      return this.indices.slice(0)
    }
    for(var a = this.indices.length - 1;a >= 0;a--) {
      if(a == this.indices.length - 1 || this.indices[a + 1] == 0) {
        this.indices[a]++;
        for(var b = a + 1;b < this.indices.length;b++) {
          this.indices[b] = this.indices[b - 1] + 1
        }
      }
      this.indices[a] = this.indices[a] % (this.elements - (this.indices.length - 1 - a))
    }
    this.increase();
    return this.indices.slice(0)
  };
  return a
}(), CombinationSet = function() {
  var a = function() {
    CombinatoricsBaseSet.apply(this, arguments)
  };
  a.prototype = new CombinatoricsBaseSet;
  a.prototype.constructor = a;
  a.prototype.rewind = function() {
    this.current = BigInteger(BigInteger.ZERO);
    this.totalResults = BigInteger(BigInteger.ZERO);
    for(var a = this.from, b = this.to;a <= b;a++) {
      var d = new Combination(this.elements, a);
      this.totalResults = this.totalResults.add(d.total())
    }
    this.generator = new Combination(this.elements, this.from);
    this.current = BigInteger(BigInteger.ZERO);
    this.currentSet = this.from
  };
  a.prototype.nextGenerator = function() {
    return this.generator = new Combination(this.elements, this.currentSet)
  };
  return a
}();
