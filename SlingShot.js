class SlingShot{
    constructor(b1,pointb){
        var options={
            bodyA:b1,
            pointB:pointb,
            stiffness:1,
            length:10
        }
        this.pointB=pointb
         this.chain=Constraint.create(options)
        
        World.add(world,this.chain)  
    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
        if(this.chain.bodyA){
            var pos1 = this.chain.bodyA.position
            var pos2 = this.pointB
            strokeWeight(5)
            line(pos1.x,pos1.y,pos2.x,pos2.y)
        }
        
    }
}