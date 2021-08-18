

class DisplayTemperature {
    constructor() {
        this.canvas = document.getElementById("display-canvas")
        this.ctx = this.canvas.getContext('2d');
        this.tempSlider = document.getElementById("temperature");
        this.tempValue = Number.parseInt(this.tempSlider.value);
        this.drawTemp();
    }
    drawTemp() {
        this.tempValue = Number.parseInt(this.tempSlider.value);
    }
}

export default DisplayTemperature