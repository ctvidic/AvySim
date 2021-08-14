import "./styles/index.scss"

document.addEventListener("DOMContentLoaded", () =>{
    class displayCanvas{
        constructor(){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            let slopeSlider = document.getElementById("slope");
            let slopeValue = slopeSlider.value;
            this.slopeVal = slopeValue;
            this.drawMountain();
            this.animate = this.animate.bind(this);
        }

        drawMountain(){
            let peak = this.canvas.height / 3;
            this.ctx.beginPath();
            this.ctx.moveTo(0, this.canvas.height);
            this.ctx.lineTo(this.canvas.width / 2, peak);
            this.ctx.lineTo(this.slopeVal/90*this.canvas.width, this.canvas.height);
            this.ctx.stroke();
        }

        animate(){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            // this.drawMountain();
            let mountainCanvas = new displayCanvas;
            requestAnimationFrame(this.animate)
        }
        


    }
    
    

    let mountainCanvas = new displayCanvas;
    mountainCanvas.animate();
    


  
});