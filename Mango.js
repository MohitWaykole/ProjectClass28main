class Mango{
    constructor(x, y, radius){
        var option = {
            isStatic : true,
            restitution : 0,
            friction : 1,
        }
        this.radius = radius;
        this.image = loadImage("images/mango.png");
        this.mango = Bodies.circle(x, y, radius, option);
        World.add(world, this.mango);
    }

    display(){
        push();
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(this.mango.position.x, this.mango.position.y, this.radius*2, this.radius*2);
        imageMode(CENTER);
        image(this.image, 610, 255, 40, 40);        
        pop();
    }
}