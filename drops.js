class Drops{
    constructor(x,y){
        this.body = Bodies.circle(x,y,5.5);
        this.radius = 5.5;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill("skyBlue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}