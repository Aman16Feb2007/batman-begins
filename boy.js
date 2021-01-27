class Boy{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,320,350,options);
        this.width = 320;
        this.height = 350;
        this.image = loadImage("W1.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, this.width, this.height);

    }
}