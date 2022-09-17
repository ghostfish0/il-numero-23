class Floatie {
	constructor(id) {
		this.id = id;
		this.title = objectTitles[this.id];
		this.icon = false;

		this.r = random(0.6*sizeunit, 1.5*sizeunit);
		this.x = random(this.r, width - this.r);
		this.y = random(this.r, height - this.r);

		this.vel = p5.Vector.random2D();
		this.vel.mult(1.5 * sizeunit / (1.5 * this.r));

		this.verticesCnt = floor(random(15, 30));
		this.color = themecolors[floor(random(1, themecolors.length))];
		this.shape = shapes[floor(random(1) * shapes.length)];
		this.offset = [];
		this.alphabg = 0.8;
		this.ringr = 0;

		if (this.title == "Vietnam flag") {
			this.shape = "circle";
			this.color = themecolors[2];
			this.icon = true;
		}

		if (this.shape == "spiked") {
			for(let i = 0; i < this.verticesCnt; i++)
				if (i % 2 == 0)
					this.offset.push(random(-0.55*this.r, -0.5*this.r));
				else
					this.offset.push(random(-0.2*this.r, 0));
		}
	}
	showtitle() {
		push();
		translate(this.x, this.y);
		fill(themecolors[0])
		textSize(2 * this.r / this.title.length);
	    if (this.title != "𝐱")
	    	textFont(myFont);
		text(this.title, 0, 0);
		pop();
	}
	showicon() {
		push();
		translate(this.x, this.y);
		image(mystar, -this.r / 2, -this.r / 2, this.r, this.r);
		pop();
	}
	show() {
		push();
		translate(this.x, this.y);
		fill(color(this.color));
		stroke(themecolors[0]);
		strokeWeight(0.75);

		if (this.shape == "spiked") {
			beginShape();
				for(let i = 0; i < this.verticesCnt; i++){
					var angle = map(i, 0, this.verticesCnt, 0, TWO_PI)
					var x = (this.r + this.offset[i]) * cos(angle);
					var y = (this.r  + this.offset[i]) * sin(angle);
					vertex(x, y);
				}
			endShape(CLOSE);
		}

		else
			ellipse(0, 0, 2*this.r);

		pop();
/*
		if (!this.icon)
			this.showtitle();
		else
			this.showicon();
		
*/	}

	move() {
		this.x += this.vel.x;
		this.y += this.vel.y;
	}

	edges() {
		if (this.x > width - this.r)
			this.vel.x = -this.vel.x;
		else if (this.x < this.r)
			this.vel.x = -this.vel.x;
		if (this.y > height - this.r)
			this.vel.y = -this.vel.y;
		else if (this.y < this.r)
			this.vel.y = -this.vel.y;
}
}