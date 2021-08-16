// import { random } from "core-js/core/number";
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
        constructor() {
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            this.particlesArray=[];
            this.createSnowflakes();
        }
        drawPrec(windValue,tempValue) {
            debugger;
            let precValue = document.getElementById("prec-true").checked;
            if (precValue && tempValue < 35){
                for(let i = 0; i<this.particlesArray.length;i++){
                    this.ctx.beginPath();
                    this.ctx.arc(
                        this.particlesArray[i].x,
                        this.particlesArray[i].y,
                        this.particlesArray[i].radius,
                        0,
                        Math.PI*2,
                        false
                    )
                    this.ctx.fill();
                    this.particlesArray[i].y += this.particlesArray[i].speedY;
                    this.particlesArray[i].x += (windValue)/60;
                    if (this.particlesArray[i].y > this.canvas.height){
                        this.particlesArray[i].y = Math.random(0,10);
                    }
                    if (this.particlesArray[i].x > this.canvas.width) {
                        this.particlesArray[i].x = Math.random() * this.canvas.width;
                    }
                }
                //  this.moveSnowflakes();
            }
        }

        createSnowflakes(){
            for(let i =0; i<200;i++){
                this.particlesArray.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    speedY: 1,
                    speedX: 2,
                    radius: Math.random(1,6)
                })
            }
        }

        // moveSnowflakes(){
        //     debugger;
        //     for(let i = 0;i<this.particlesArray.length;i++){
        //         this.particlesArray[i] += 0;
        //         this.particlesArray[i] += 0;
        //     }
        // }
    }

    class DisplayTemperature{
        constructor(){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            let tempSlider = document.getElementById("temperature");
            this.tempValue = Number.parseInt(tempSlider.value);
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
            let weakValue = document.getElementById("weak-true");
            this.weakLayer = weakValue.checked;
            if (this.weakLayer === true){
                this.ctx.moveTo(this.canvas.width / 5, peak - (snowVal/2));
                this.ctx.lineTo(-6 * slopeVal + this.canvas.width, this.canvas.height - (snowVal / 2));
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
            let weakValue = document.getElementById("weak-true");
            let weakLayer = weakValue.checked;
            let precValue = document.getElementById("prec-true").checked;

            if (slopeValue < 30 || slopeValue > 60){
                outofrange.style.display = "flex";
                lowsnow.style.display = "none";
                wet.style.display = "none";
                persistent.style.display = "none";
                precipitation.style.display = "none";
                windloaded.style.display = "none";
            }else{
                outofrange.style.display = "none";
                if (snowValue < 10) {
                    outofrange.style.display = "none";
                    lowsnow.style.display = "flex";
                    wet.style.display = "none";
                    persistent.style.display = "none";
                    precipitation.style.display = "none";
                    windloaded.style.display = "none";
                }else{
                    lowsnow.style.display = "none";
                    if (weakLayer && tempValue < 40){
                        persistent.style.display = "flex";
                        precipitation.style.display = "none";
                        windloaded.style.display = "none";
                        wet.style.display = "none";
                    }else{
                        persistent.style.display = "none";
                        if (tempValue > 40){
                            wet.style.display = "flex";
                            persistent.style.display = "none";
                            precipitation.style.display = "none";
                            windloaded.style.display = "none";
                        }else{
                            wet.style.display = "none";
                        }
                    }
                    if (precValue && tempValue < 35){
                        persistent.style.display = "none";
                        precipitation.style.display = "flex";
                        windloaded.style.display = "none";
                        wet.style.display = "none";
                    }else{
                        precipitation.style.display = "none";
                    }
                    if (windValue > 30 && tempValue < 40) {
                        persistent.style.display = "none";
                        precipitation.style.display = "none";
                        windloaded.style.display = "flex";
                        wet.style.display = "none";
                    } else {
                        windloaded.style.display = "none";
                    }

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
            this.snowflakes = new DisplayPrecipitation;
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
            this.snowflakes.drawPrec(this.windCanvas.windValue, this.tempCanvas.tempValue);
            requestAnimationFrame(this.animate)

        }
    }
    
    
    let displayCanvas = new DisplayCanvas;
    displayCanvas.animate();
    // let mountainCanvas = new displayMountain;
    // mountainCanvas.animate();

});