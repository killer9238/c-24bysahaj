class Log{
    constructor(x,y,height,angle){
     var options={
        restitution:0.8,
        density:1,
        friction:1
     }
     this.body=Bodies.rectangle(x,y,20,height,options)
     this.height=height
     this.width=20
     Matter.Body.setAngle(this.body,angle)
     World.add(world,this.body)
    }
    display(){
       var pos=this.body.position
       push();
       translate(pos.x,pos.y)
       rotate(this.body.angle)
       rectMode(CENTER)
       fill("yellow")
       rect(0,0,this.width,this.height)
       pop();
    }
}