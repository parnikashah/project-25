class Dustbin {
    constructor(x,y,width,height){
        var options = {
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2        
    }
    this.x=x;
    this.y=y;
    this.width = 200;
    this.height = 200;
    this.thickness=20;
    this.right = Bodies.rectangle(this.x+this.width/2, this.y+this.height/2,this.height,options);
    this.base = Bodies.rectangle(this.x, this.y,this.width, this.thickness, options);
    this.left = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2,this.thickness,this.height,options);
        
    this.image = loadImage("image/dustbingreen.png");
        
       
    World.add(world, this.right);
    World.add(world, this.base);
    World.add(world, this.left);
        
    }
    

display(){
    
    var posB=this.base.position;
    var posL=this.left.position;
    var posR=this.right.position;
    push(); 
    translate(posL.x,posL.y);
    angleMode(RADIANS)
    fill("brown");
    rectMode(CENTER);
    rotate(this.angle);
    pop();

    push(); 
    translate(posR.x,posR.y);
    angleMode(RADIANS)
    fill("brown");
    rectMode(CENTER);
    rotate(-1*this.angle);
    pop();

    push(); 
    translate(posB.x,posB.y);
    angleMode(RADIANS)
    fill("brown");
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image,0,-this.height/2,this.width,this.height)
    pop();
      
      
}


}