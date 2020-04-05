class Enemy {
    constructor(x, y, width, height) {
        if(frameCount % 100 === 0) {
            var random_animation = Math.round(random(1,3));
    switch(random_animation) {
      case 1: this.animation = loadImage("images/redcar.png");
              break;
      case 2: this.animation = loadImage("images/yellowcar.png");
              break;
      case 3: this.animation = loadImage("images/greycar.png");
              break;
      default: break;
    }
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display() {
          image(this.animation, this.x, this.y, this.width, this.height);
    }
}