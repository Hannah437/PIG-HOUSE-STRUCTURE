class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(myworld, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(120,25,40);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };