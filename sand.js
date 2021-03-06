class sand{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.2,
            'friction':0.3,
            'density':0.3
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius=radius;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       ellipseMode(RADIUS);
        
        fill("orange");
       ellipse(0,0, this.radius);
        pop();
      }
    }