class Ladder{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.08,
            'friction':0.03,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("ladder.png");
        World.add(world, this.body);
    }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //  fill("red");
        imageMode(CENTER);
        //  rect(0, 0, this.width, this.height);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}