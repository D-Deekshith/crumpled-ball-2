class Paper {
  constructor(x, y,height,width) {
    var Paper_options = {
      'isStatic': false,
      'restitution':0,
      'friction':500,
      'density':1.2,
      'velocityY': 20
    }
    this.body = Bodies.rectangle(x, y,height,width, Paper_options);
    this.height = height;
    this.width = width;
    this.image = loadImage('sprites/paper.png')

    World.add(world, this.body);
    }
  display(){
    var position = this.body.position;
    push();
    translate(position.x,position.y);
    imageMode(CENTER);
    image(this.image,0,0, this.width,this.height);
    pop();
  }
  }

  
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, 
      {x:180, y: -180})
   }
 }

 function keyPressedOver() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, 
      {x:-180, y:180})
   }
  }