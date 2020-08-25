class Stone
{
    constructor(x,y,r)
    {
        this.x=x
        this.y=y
        this.radius=r;
        this.height=height;
        this.body=Matter.Bodies.circle(this.x,this.y,this.radius,{density:1.5})
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position;
    
        push()
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        stroke(50,50,50)
        fill(50,50,50)
        ellipse(0,0,this.radius, this.radius)
        pop()
    }
}