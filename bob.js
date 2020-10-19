class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
			var angle=this.body.angle;
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle);
			fill(255,0,255)
			ellipseMode(CENTER);
			ellipse(0,0,this.width, this.height)
			pop()
			
	}

}