



class DisplayMountain {
    constructor() {
        this.canvas = document.getElementById("display-canvas")
        this.ctx = this.canvas.getContext('2d');
        let img = document.getElementById("mountainPicture")
        this.pattern = this.ctx.createPattern(img,'repeat')
        let slopeSlider = document.getElementById("slope");
        let slopeValue = slopeSlider.value;
        this.slopeVal = Number.parseInt(slopeValue);
        this.slope = ((2 / 3 * (this.canvas.height)) / (4 / 5 * this.canvas.width - 6 * this.slopeVal));

        this.drawMountain();
    }

    drawMountain(snowCanvasBool) {
        this.slope = ((2 / 3 * (this.canvas.height)) / (4 / 5 * this.canvas.width - 6 * this.slopeVal));
        if (!snowCanvasBool) {
            let slopeSlider = document.getElementById("slope");
            let slopeValue = slopeSlider.value;
            this.slopeVal = Number.parseInt(slopeValue);
        }
        let peak = this.canvas.height / 3;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 2 / 3 * this.canvas.height);
        this.ctx.lineTo(this.canvas.width / 5, peak);
        this.ctx.lineTo(-6 * this.slopeVal + this.canvas.width, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height);
        // this.ctx.fillStyle = this.pattern;
        this.ctx.closePath();
        this.ctx.fillStyle = 'black';
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 2 / 3 * this.canvas.height);
        this.ctx.lineTo(this.canvas.width / 5, peak);
        this.ctx.lineTo(this.canvas.width / 5+4, peak+90);
        this.ctx.lineTo(0, 2 / 3 * this.canvas.height);
        this.ctx.fillStyle = '#fafafa'
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 5, peak);
        this.ctx.lineTo(this.canvas.width / 5 + 80/this.slope, peak + (80));
        this.ctx.lineTo(this.canvas.width / 5 + 4, peak + 90);
        this.ctx.fillStyle = '#e3e3e3'
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 2 / 3 * this.canvas.height);
        this.ctx.lineTo(this.canvas.width / 5 + 4, peak + 90);
        this.ctx.lineTo(this.canvas.width / 5 - 40, peak + 240);
        this.ctx.closePath();
        this.ctx.fillStyle = '#C0C0C0'
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 5 - 40, peak + 240);
        this.ctx.lineTo(this.canvas.width / 5 + 80, peak + 160);
        this.ctx.lineTo(this.canvas.width / 5 + 4, peak + 90);
        this.ctx.closePath();
        this.ctx.fillStyle = '#808080'
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 5 + 4, peak + 90);
        this.ctx.lineTo(this.canvas.width / 5 + 80, peak + 160);
        this.ctx.lineTo(this.canvas.width / 5 + 80 / this.slope, peak + (80));
        this.ctx.closePath();
        this.ctx.fillStyle = '#696969'
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 5 + 80 / this.slope, peak + (80));
        this.ctx.lineTo(this.canvas.width / 5 + 240, peak + (240 * this.slope));
        this.ctx.lineTo(this.canvas.width / 5 + 80, peak + 160);
        this.ctx.closePath();
        this.ctx.fillStyle = '#808080'
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height);
        this.ctx.lineTo(0, 2 / 3 * this.canvas.height);
        this.ctx.lineTo(this.canvas.width / 5 - 40, peak + 240);
        this.ctx.closePath();
        this.ctx.fillStyle = '#A9A9A9'
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height);
        this.ctx.lineTo(this.canvas.width / 5 - 40, peak + 240);
        this.ctx.lineTo(this.canvas.width / 5 + 40, this.canvas.height)
        this.ctx.closePath();
        this.ctx.fillStyle = '#999999'
        this.ctx.fill();


        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 5 - 40, peak + 240);
        this.ctx.lineTo(this.canvas.width / 5 + 80, peak + 160);
        this.ctx.lineTo(this.canvas.width / 5 + 40, this.canvas.height)
        this.ctx.closePath();
        this.ctx.fillStyle = '#7a7a7a';
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 5 + 40, this.canvas.height);
        this.ctx.lineTo(this.canvas.width / 5 + 80, peak + 160);
        this.ctx.lineTo(this.canvas.width / 5 + 300-this.slopeVal*1.5, this.canvas.height)
        this.ctx.closePath();
        this.ctx.fillStyle = '#636363';
        this.ctx.fill();


        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 5 + 300 - this.slopeVal * 1.5, this.canvas.height);
        this.ctx.lineTo(this.canvas.width / 5 + 240, peak + (240 * this.slope));
        this.ctx.lineTo(this.canvas.width / 5 + 80, peak + 160)
        this.ctx.closePath();
        this.ctx.fillStyle = '#737373';
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 5 + 300 - this.slopeVal * 1.5, this.canvas.height);
        this.ctx.lineTo(this.canvas.width / 5 + 240, peak + (240 * this.slope));
        this.ctx.lineTo(this.canvas.width / 5 + 400, peak + 400*this.slope)
        this.ctx.closePath();
        this.ctx.fillStyle = '#545454';
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 5 + 300 - this.slopeVal * 1.5, this.canvas.height);
        this.ctx.lineTo(this.canvas.width / 5 + 400, peak + 400 * this.slope);
        this.ctx.lineTo(this.canvas.width/5 + 1000,peak+1000*this.slope)
        this.ctx.closePath();
        this.ctx.fillStyle = '#4f4f4f';
        this.ctx.fill();

        



    }
}
export default DisplayMountain;