class Bird{
    constructor(x,y){
        var options={
            density:1.5,
            friction:1,
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,50,50,options)
        this.width=50
        this.height=50
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        pos.x=mouseX;
        pos.y=mouseY;
        push()
        translate(pos.x,pos.y)
        rotate(this.body.rectangle)
        rectMode(CENTER)
        fill("green")
        rect(0,0,this.width,this.height)
        pop();
    }
}