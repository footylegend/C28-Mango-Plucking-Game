class Stone{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2,
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body)
    }
    display(){
        var stonepos = this.body.position;
        push();
        translate(stonepos.x, stonepos.y);
        //rotate(angle);
        imageMode(CENTER);
	ellipseMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}