

class DisplayWeakLayer {
    constructor() {
        this.canvas = document.getElementById("display-canvas")
        this.ctx = this.canvas.getContext('2d');
        this.weakLayer = false;
        this.drawLayer();
    }
    drawLayer(slopeVal, snowVal) {
        let peak = this.canvas.height / 3;
        let weakValue = document.getElementById("weak-true");
        this.weakLayer = weakValue.checked;
        if (this.weakLayer === true) {
            this.ctx.moveTo(this.canvas.width / 5, peak - (snowVal / 2));
            this.ctx.lineTo(-6 * slopeVal + this.canvas.width, this.canvas.height - (snowVal / 2));
            // this.ctx.lineTo(-6 * this.slopeVal + this.canvas.width, this.canvas.height)
            this.ctx.stroke();
        }


    }
}

export default DisplayWeakLayer