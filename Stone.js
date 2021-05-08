class Stone{
    constructor(x, y, width, height){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }

        this.width = width;
        this.height = height;
        this.stone = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.stone);
    }

    display(){
        push();
        rectMode(CENTER);
        fill(0);
        rect(this.stone.position.x, this.stone.position.y, this.width, this.height);
        pop();
    }
}