class Enemy1 extends BaseClass {
    constructor(x,y){
      super(x,y,500,300);
      this.image = loadImage("Thanos.png");
    }
  
    display() {
      
  
      super.display();
  
     // if(this.body.velocity.x > 10 && this.body.position.x > 200){
       // var position = [this.body.position.x, this.body.position.y];
        //this.trajectory.push(position);
      //}
     
  
 //     for(var i=0; i<this.trajectory.length; i++){
   //     image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
     // }
    }
  }