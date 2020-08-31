class Tree{
    constructor(x,y){
        var options = {
            isStatic : true,
        }
                this.x = x;
                this.y = y;
                this.width = 350;
        this.height = 600;
                this.treeThickness = 10;
               this.body = Bodies.rectangle(this.x,this.y,this.width,this.treeThickness,options);
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
    }
    display(){
    var treepos = this.body.position;
    push();
    translate(treepos.x,treepos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}
