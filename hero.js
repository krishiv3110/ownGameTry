class Hero{

    constructor(x, y, width, height) {

        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("hero_House/t_hero_standing.png");
   // this.animation = loadAnimation("hero_House/hero1.png","hero_House/hero2.png","hero_House/hero3.png","hero_House/hero4.png","hero_House/hero5.png","hero_House/hero6.png","hero_House/hero7.png","hero_House/hero8.png");
    World.add(world, this.body);

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
    //  fill("black");
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
    //  animation(this.animation, 0, 0, this.width, this.height);
    //  rect(0, 0, this.width, this.height);
        pop();
    }

}