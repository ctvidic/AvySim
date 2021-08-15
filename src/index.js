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
            if (this.slopeVal > 70 && this.slopeVal <= 75) {
                this.snowVal /= 1.5;
                outofrange.style.display = "block";
                wayoutofrange.style.display = "none";
            }else if (this.slopeVal > 75 && this.slopeVal <= 80) {
                this.snowVal /= 2;
                outofrange.style.display = "block";
                wayoutofrange.style.display = "none";
            }else if (this.slopeVal > 80) {
                wayoutofrange.style.display="block";
                outofrange.style.display = "none"
                this.snowVal /= 2.5;
            }else if (this.slopeVal < 30){
                outofrange.style.display = "block"
            }
            else{
                wayoutofrange.style.display = "none";
                outofrange.style.display = "none"
            }
            this.ctx.lineTo(this.canvas.width / 5, peak - this.snowVal);
            this.ctx.lineTo(-6 * this.slopeVal + this.canvas.width, this.canvas.height - this.snowVal);
            this.ctx.stroke();
        }
    }

    class DisplayWind{
        constructor(){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            let windSlider = document.getElementById("windspeed");
            this.windValue = Number.parseInt(windSlider.value);
            this.windArray = [];
            this.x=0;
            this.y=0
            this.rotation = 0;
            this.drawWind();
            this.gravity=5;
        }

        drawWind(){
            // let peak = this.canvas.height / 3;
            let windSlider = document.getElementById("windspeed");
            this.windValue = Number.parseInt(windSlider.value);
            // for(let i =0;i<this.windValue;i++){
            //     this.ctx.beginPath();
            //     this.ctx.moveTo(this.canvas.width / 5+this.x, peak+this.gravity-this.rotation*Math.random());
            //     this.ctx.lineTo(this.canvas.width / 5 + this.windValue*10+this.x, Math.random()*(20) + peak-50+this.gravity+this.rotation)
            //     this.ctx.stroke();
            // }
            // this.x+=this.windValue/10;
            // if (this.x > 700){
            //     this.x = 0;
            // }
            // if (this.y > this.canvas.height) {
            //     this.y = 0;
            // }
            // this.gravity+=2;
            // this.rotation+=1;
            // this.y+=this.gravity;
            debugger;
            if (this.windValue > 10){
                windloaded.style.display = "block";
            }else{
                windloaded.style.display = "none";
            }
        }
    }


    class DisplayPrecipitation{
        
    }

    class DisplayCanvas {
        constructor(){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            this.animate = this.animate.bind(this)
            this.windCanvas = new DisplayWind;
        }
        animate(){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            let mountainCanvas = new DisplayMountain;
            let snowCanvas = new DisplaySnow(mountainCanvas.slopeVal);
            this.windCanvas.drawWind();
            requestAnimationFrame(this.animate)
        }
    }
    
    
    let displayCanvas = new DisplayCanvas;
    displayCanvas.animate();
    // let mountainCanvas = new displayMountain;
    // mountainCanvas.animate();

});