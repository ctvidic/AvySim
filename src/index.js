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
            
            //Slope Description
            if (this.slopeVal > 70 && this.slopeVal <= 75) {
                this.snowVal /= 1.5;
            }else if (this.slopeVal > 75 && this.slopeVal <= 80) {
                this.snowVal /= 2;
            }else if (this.slopeVal > 80) {
                this.snowVal /= 2.5;
            }else if (this.slopeVal < 30){
            }

            this.ctx.lineTo(this.canvas.width / 5, peak - this.snowVal);
            this.ctx.lineTo(-6 * this.slopeVal + this.canvas.width, this.canvas.height - this.snowVal);
            this.ctx.lineTo(-6 * this.slopeVal + this.canvas.width,this.canvas.height)
            this.ctx.stroke();
            
        }
    }

    class DisplayWind{
        constructor(){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            this.windArray = [];
            this.x=0;
            this.y=0
            this.rotation = 0;
            this.drawWind();
            this.gravity=5;
        }

        drawWind(){
            let windSlider = document.getElementById("windspeed");
            this.windValue = Number.parseInt(windSlider.value);
            // let peak = this.canvas.height / 3;
            // for(let i =0;i<(this.windValue/2);i++){
            //     let y = Math.random()*100;
            //     this.ctx.beginPath();
            //     this.ctx.moveTo(this.x,y);
            //     this.ctx.lineTo(this.windValue*5 + this.x, y)
            //     this.ctx.stroke();
            // }
            // this.x+=this.windValue/10;
            if (this.windValue > 10){
                let y = Math.random() * 4-7
                this.ctx.moveTo(0, 50);
                this.ctx.lineTo(150 + this.windValue / 2, 50 + y * this.windValue / 20);
                this.ctx.moveTo(0, 100);
                this.ctx.lineTo(100 + this.windValue / 2, 100+y*this.windValue/20);
                this.ctx.moveTo(0, 150);
                this.ctx.lineTo(50+this.windValue/1.5, 150+y*this.windValue/20);
                this.ctx.moveTo(0, 200);
                this.ctx.lineTo(this.windValue, 200+y*this.windValue/20);
                this.ctx.stroke();
            }
            // this.x += this.windValue/3

            // if (this.windValue * 5 + this.x > 1160){
            //     this.x = 0;
            // }

        }
    }


    class DisplayPrecipitation{
        
    }

    class DisplayTemperature{
        constructor(){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            this.drawTemp();
        }
        drawTemp(){   
        }
    }

    class DisplayWeakLayer{
        constructor() {
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            this.weakLayer = false;
            this.drawLayer();
        }
        drawLayer(slopeVal, snowVal) {
            let peak = this.canvas.height / 3;
            let weakValue = document.getElementById("uv");
            this.weakLayer = weakValue.checked;
            debugger;
            if (this.weakLayer === true){
                this.ctx.moveTo(this.canvas.width / 5, peak - (snowVal/2));
                this.ctx.lineTo(this.canvas.width, peak - (snowVal / 2))
                // this.ctx.lineTo(-6 * this.slopeVal + this.canvas.width, this.canvas.height - (snowValue/2));
                // this.ctx.lineTo(-6 * this.slopeVal + this.canvas.width, this.canvas.height)
                this.ctx.stroke();
            }


        }
    }

    class TextBox{
        constructor(){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            
            this.createText();
        }

        createText(){
            let tempSlider = document.getElementById("temperature");
            let tempValue = Number.parseInt(tempSlider.value);
            let windSlider = document.getElementById("windspeed");
            let windValue = Number.parseInt(windSlider.value);
            let snowSlider = document.getElementById("snow");
            let snowValue = Number.parseInt(snowSlider.value);
            let slopeSlider = document.getElementById("slope");
            let slopeValue = slopeSlider.value;

            if (snowValue < 10) {
                lowsnow.style.display = "flex";
                wet.style.display = "none";
                windloaded.style.display = "none";
            } else {
                lowsnow.style.display = "none"
                if (tempValue > 40) {
                    wet.style.display = "flex";
                } else {
                    wet.style.display = "none";
                }

                if (windValue > 30 && tempValue < 40) {
                    windloaded.style.display = "flex";
                } else {
                    windloaded.style.display = "none";
                }
            }
        }

    }

    class DisplayCanvas {
        constructor(){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            this.animate = this.animate.bind(this)
            this.windCanvas = new DisplayWind;
            this.tempCanvas = new DisplayTemperature;
            this.weakLayer = new DisplayWeakLayer;
            this.textbox = new TextBox;
        }
        animate(){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            let mountainCanvas = new DisplayMountain;
            let snowCanvas = new DisplaySnow(mountainCanvas.slopeVal);
            this.windCanvas.drawWind();
            this.tempCanvas.drawTemp();
            this.textbox.createText();
            this.weakLayer.drawLayer(mountainCanvas.slopeVal, snowCanvas.snowVal);
            requestAnimationFrame(this.animate)
        }
    }
    
    
    let displayCanvas = new DisplayCanvas;
    displayCanvas.animate();
    // let mountainCanvas = new displayMountain;
    // mountainCanvas.animate();

});