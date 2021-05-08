class Tree{
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("images/tree.png");
        this.tree = Bodies.rectangle(x, y, width, height, option);
        World.add(world, this.tree);
    }

    display(){
        push();
        rectMode(CENTER);
        fill("green");
        rect(this.tree.position.x, this.tree.position.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 650, 410, 300, 400);
        pop();
    }
}