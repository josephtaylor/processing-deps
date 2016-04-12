// Punktiert is a particle engine based and thought as an extension of Karsten Schmidt's toxiclibs.physics code. 
// This library is developed through and for an architectural context. Based on my teaching experiences over the past couple years. (c) 2012 Daniel Köhler, daniel@lab-eds.org

//here: flocking as behavior

import punktiert.math.Vec;
import punktiert.physics.*;

VPhysics physics;

public void setup() {
  size(800, 600);
  noStroke();
  fill(0, 255);

  physics = new VPhysics(width, height);
  
  int amount = 2000;

  for (int i = 0; i < amount; i++) {
    Vec pos = new Vec(random(10, width), random(10, height));
    float rad = random(3, 6);
    VBoid p = new VBoid(pos);
    p.swarm.setSeperationScale(rad*.7);
    p.setRadius(rad);
    physics.addParticle(p);
  }
}

public void draw() {
  background(255);

  physics.update();

  for (VParticle p : physics.particles) {
    ellipse(p.x, p.y, p.getRadius()*2, p.getRadius()*2);
  }
}

