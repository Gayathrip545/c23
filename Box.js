class Box
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        
        World.add(myWorld,this.body);
        this.width=width;
        this.height=height;
        
    }

    display()
    {
        var pos=this.body.position;
       
        rectMode(CENTER)
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
       
    }
}   