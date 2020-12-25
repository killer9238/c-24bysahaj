class Pig{
      constructor(x,y){
          var options={
              restitution:0.8,
              density:1,
              friction:0.3
          }
          this.body=Bodies.rectangle(x,y,50,50,options)
          this.height=50
          this.width=50
          World.add(world,this.body)
      }
      display(){
          var pos=this.body.position
          push();
          translate(pos.x,pos.y)
          rotate(this.body.angle)
          rectMode(CENTER)
          fill("blue")
          rect(0,0,this.width,this.height)
          pop();
      }
}
