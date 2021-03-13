class person{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius=50;
        this.image = loadImage("Walking Frame/walking_2.png");
        World.add(world, this.body);
      }
  
      display(){
        var pos= this.body.position
        imageMode(CENTER);
        image(this.image,400,500, 300,300);
      }
}
  
  