class Moving {
  constructor(_pos) {
    this.initialPos = createVector(_pos.x, _pos.y);
    this.stepX = this.initialPos.x + random(0, 100);
    this.stepY = this.initialPos.y + random(0, 100);
    // this.bodyStep = createVector(this.posX, this.posY);
    this.globalPOS = createVector(400, 400);
    this.posX = _pos.x;
    this.posY = _pos.y;
    this.var1 = 1;
    this.var2 = 1;
    this.var3 = 1;
    this.var4 = 1;
    this.var5 = 1;
    this.body = 1;
  }

  update() {

    if (this.var1 == 1) {
      if (this.posX < this.stepX) {
        this.posX = this.posX + 5
      } else {
        this.var1 = 0;
      }
    }

    if (this.var1 == 0) {
      if (this.posX > this.initialPos.x) {
        this.posX = this.posX - 5
      } else {
        this.var1 = 1;
      }
    }

    if (this.var2 == 1) {
      if (this.posY < this.stepY) {
        this.posY = this.posY + 5
      } else {
        this.var2 = 0;
      }
    }

    if (this.var2 == 0) {
      if (this.posY > this.initialPos.y) {
        this.posY = this.posY - 5
      } else {
        this.var2 = 1;
      }
    }

    if (this.var3 == 1) {
      if (this.body <= 15) {
        this.body = this.body + 1
      } else {
        this.var3 = 0;
      }
    }

    if (this.var3 == 0) {
      if (this.body >= 1) {
        this.body = this.body - 1
      } else {
        this.var3 = 1;
      }
    }

    if (this.var4 == 1) {
      if (this.globalPOS.x <= 700) {
        this.globalPOS.x = this.globalPOS.x + 3
      } else {
        this.var4 = 0;
      }
    }

    if (this.var4 == 0) {
      if (this.globalPOS.x >= 100) {
        this.globalPOS.x = this.globalPOS.x - 7
      } else {
        this.var4 = 1;
      }
    }

    if (this.var5 == 0) {
      if (this.globalPOS.y >= 400) {
        this.globalPOS.y = this.globalPOS.y - 5
      } else {
        this.var5 = 1;
      }
    }

    if (this.var5 == 1) {
      if (this.globalPOS.y <= 700) {
        this.globalPOS.y = this.globalPOS.y + 1
      } else {
        this.var5 = 0;
      }
    }

    return this;
  }

  display() {
    // ellipse(this.posX, this.posY, 1, 1);
    noFill();
    stroke(0);
    strokeWeight(25);
    strokeCap(ROUND);
    curve(this.globalPOS.x - 200, this.globalPOS.y + 300, this.globalPOS.x + this.posX, this.globalPOS.y + this.posY, this.globalPOS.x, this.globalPOS.y, 10, 200);
    fill(12);
    // ellipse(this.globalPOS.x, this.globalPOS.y - this.body, 50, 50);
    // ellipse(450, 425 - this.body, 100, 100);

    return this;
  }

  body2(_img) {
    // ellipse(this.globalPOS.x, this.globalPOS.y - this.body, 50, 50);
    // ellipse(this.globalPOS.x + 50, this.globalPOS.y + 25 - this.body, 100, 100);
    image(_img, this.globalPOS.x - 40, this.globalPOS.y - 40 - this.body, 147.5, 124.5);


    return this;
  }

  shadow() {
    stroke(100);
    noFill();
    curve(this.globalPOS.x + 100, this.globalPOS.y - 150, this.globalPOS.x + this.posX, this.globalPOS.y + this.posY, this.globalPOS.x, this.globalPOS.y, -5, -100);

    fill(80);
    // line(this.globalPOS.x + this.posX, this.globalPOS.y + this.posY, this.globalPOS.x + 25, this.globalPOS.y + 50);
    ellipse(this.globalPOS.x + 4, this.globalPOS.y + 8 - this.body, 50, 50);
    ellipse(this.globalPOS.x + 50, this.globalPOS.y + 35 - this.body, 100, 100);
  }

  render() {
    return this.update().display();

  }
}