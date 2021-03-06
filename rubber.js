class rubber{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.95,
            'friction':0.2,
            'density':0.5
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
        
        fill("blue");
       ellipse(0,0, this.radius);
        pop();
      }
    }