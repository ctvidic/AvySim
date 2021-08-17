



class DisplayMountain {
    constructor() {
        this.canvas = document.getElementById("display-canvas")
        this.ctx = this.canvas.getContext('2d');
        let img = document.getElementById("mountainPicture")
        this.pattern = this.ctx.createPattern(img,'repeat')
        let slopeSlider = document.getElementById("slope");
        let slopeValue = slopeSlider.value;
        this.slopeVal = Number.parseInt(slopeValue);
        this.drawMountain();
    }

    drawMountain(snowCanvasBool) {
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
        this.ctx.fill();
    }
}
export default DisplayMountain;