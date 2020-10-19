class Dustbin  {
    constructor(x,y,width,height)  {
        var options ={
            isStatic: true
        }
        this.image = loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display()  {
        var dustbinpos = this.body.position;
        push()
        translate(dustbinpos.x, dustbinpos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }

}