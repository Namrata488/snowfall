class Snow
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.01			
			}
		this.r=r
		this.image=loadImage("snow5.webp");
		this.body=Bodies.circle(x, y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	

	updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,400)})
        }
    }

	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}