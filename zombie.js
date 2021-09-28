class Zombie{
    
    constructor(x, y, width, height) {

        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.animation = loadAnimation("zombie_House/zo_Images/zo1.png","zombie_House/zo_Images/zo2.png","zombie_House/zo_Images/zo3.png","zombie_House/zo_Images/zo4.png","zombie_House/zo_Images/zo5.png","zombie_House/zo_Images/zo6.png","zombie_House/zo_Images/zo7.png","zombie_House/zo_Images/zo8.png");
    World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        Body.setPosition(animation,{this.x:this.x-1,this.y:this.y})
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       // fill("black");
        animation(this.animation, 0, 0, this.width, this.height);
      //  rect(0, 0, this.width, this.height);
        pop();

      
    }
 /*   controllingZombie(){
        zombie.velocityX = -2;
        if(keyIsDown("left_arrow")){
            zombie.x -= 5;
        }

        if(keyIsDown("right_arrow")){
        zombie.x += 5;
        }
    }

*/
}