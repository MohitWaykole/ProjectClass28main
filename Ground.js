class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }

        this.width = width;
        this.height = height;
        this.ground = Bodies.rectangle(x, y, width, height, option);
        World.add(world, this.ground);
    }

    display(){
        var ns = this.ground.position
        push();
        rectMode(CENTER);
        fill(0);
        rect(ns.x, ns.y, this.width, this.height);
        pop();
    }
}