import "./styles/index.scss"

document.addEventListener("DOMContentLoaded", () =>{
    class DisplayMountain{
        constructor(){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            let slopeSlider = document.getElementById("slope");
            let slopeValue = slopeSlider.value;
            this.slopeVal = Number.parseInt(slopeValue);
            this.drawMountain();
        }

        drawMountain(){
            let peak = this.canvas.height / 3;
            this.ctx.beginPath();
            this.ctx.moveTo(0, 2/3*this.canvas.height);
            this.ctx.lineTo(this.canvas.width / 5, peak);
            this.ctx.lineTo(-6*this.slopeVal+this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            this.ctx.fill();
        }
      
    }

    class DisplaySnow{
        constructor(slopeVal) {
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            let snowSlider = document.getElementById("snow");
            let snowValue = snowSlider.value;
            this.snowVal = Number.parseInt(snowValue);
            this.slopeVal = slopeVal
            this.drawSnow();
        }

        drawSnow() {
            let peak = this.canvas.height / 3;
            this.ctx.beginPath();
            this.ctx.moveTo(0, 2 / 3 * this.canvas.height - this.snowVal);
            debugger;
            if (this.slopeVal > 70) {
                this.snowVal /= 1.5;
            }
            if (this.slopeVal > 75) {
                this.snowVal /= 2;
            }
            if (this.slopeVal > 80) {
                this.snowVal /= 2.5;
            }
            this.ctx.lineTo(this.canvas.width / 5, peak - this.snowVal);
            this.ctx.lineTo(-6 * this.slopeVal + this.canvas.width, this.canvas.height - this.snowVal);
            this.ctx.stroke();
        }
    }

    class DisplayCanvas {
        constructor(){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            this.animate = this.animate.bind(this)

        }
        animate(){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            let mountainCanvas = new DisplayMountain;
            let snowCanvas = new DisplaySnow(mountainCanvas.slopeVal);
            requestAnimationFrame(this.animate)
        }
    }
    
    
    let displayCanvas = new DisplayCanvas;
    displayCanvas.animate();
    // let mountainCanvas = new displayMountain;
    // mountainCanvas.animate();

});