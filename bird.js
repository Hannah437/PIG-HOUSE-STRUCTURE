class Bird {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(100, 100, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(myworld, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(100,20,20);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }