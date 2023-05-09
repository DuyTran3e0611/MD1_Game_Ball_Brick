class Rectangle {
    x;
    y;
    width;
    height;
    color;
    status;

    constructor(x, y, width, height, color,status) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.status = status;
    }

    drawRect(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }

    moveLeft() {
        if (this.x <= 0){
            return;
        }else {
            this.x -= 30;
        }

    }

    moveRight() {
        if (this.x >= widthCanvas - widthPaddle){
            return;
        }else {
            this.x += 30;
        }

    }
}