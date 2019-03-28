class Background {
	constructor(_img) {
		this.img = _img;
		this.posX = -400;
		this.posY = -300;
	}
	render() {
		if (this.posX <= 0) {
			this.posX = this.posX + 8;
		} else {
			this.posX = -400;
		}
		if (this.posY <= -100) {
			this.posY = this.posY + 4;
		} else {
			this.posY = -300;
		}
		image(img0, this.posX, this.posY, 1600, 1200);
	}
}