class Box{
    constructor(x,y,width,height){
        var box_Options ={
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y,width,height,box_Options)
        this.width = width;
        this.height = height;
        this.image = loadImage('sprites/dustbingreen.png');

        World.add(world,this.body)
     }

     display(){
         var position = this.body.position;
        push();
        translate(position.x,position.y);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}