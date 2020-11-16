class Log {
    constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      Matter.Body.setAngle(this.body, angle);

      World.add(myworld, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(220,180,190);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  