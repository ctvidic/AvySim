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

        drawMountain(snowCanvasBool){
            if (!snowCanvasBool){
            let slopeSlider = document.getElementById("slope");
            let slopeValue = slopeSlider.value;
            this.slopeVal = Number.parseInt(slopeValue);
            }
            let peak = this.canvas.height / 3;
            this.ctx.beginPath();
            this.ctx.moveTo(0, 2/3*this.canvas.height);
            this.ctx.lineTo(this.canvas.width / 5, peak);
            this.ctx.lineTo(-6*this.slopeVal+this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            this.ctx.fillStyle = 'rgb(32,32,32)';
            this.ctx.fill();
        }
        
      
    }

    class DisplaySnow{
        constructor(slopeVal) {
            this.canvas = document.getElementById("snow-canvas")
            this.snowSlider = document.getElementById("snow");
            this.snowValue = this.snowSlider.value;
            this.snowVal = Number.parseInt(this.snowValue);
            this.snowCords = {
                topRCornerX: -6 * slopeVal + this.canvas.width,
                topRCornerY: this.canvas.height - this.snowVal,
                bottomRCornerX: -6 * slopeVal + this.canvas.width + 6,
                bottomRCornerY: this.canvas.height
            };
            this.xSpeed = 10;
            this.move = false;
            this.end = false;
            this.drawSnow();
        }

        drawSnow(slopeVal) {
            this.ctx = this.canvas.getContext('2d');
            let peak = this.canvas.height / 3;
            if (!this.move){
            this.snowCords = {
                topRCornerX: -6 * slopeVal + this.canvas.width,
                topRCornerY: this.canvas.height - this.snowVal,
                bottomRCornerX: -6 * slopeVal + this.canvas.width + 6,
                bottomRCornerY: this.canvas.height,
                topLCornerX: this.canvas.width / 5,
                topLCornerY: peak - this.snowVal,
                bottomLCornerX: this.canvas.width / 5,
                bottomLCornerY: peak,
                round: 0
            };
            }
            this.snowSlider = document.getElementById("snow");
            this.snowValue = this.snowSlider.value;
            this.snowVal = Number.parseInt(this.snowValue);

            if (this.move && this.snowCords.topRCornerX < this.canvas.width && slopeVal > 29 && slopeVal < 60){
                this.snowCords.bottomRCornerX += this.xSpeed;
                this.snowCords.topRCornerX+= this.xSpeed;
                this.snowCords.topLCornerX+=this.xSpeed;
                this.snowCords.bottomLCornerX += this.xSpeed;
                this.snowCords.topLCornerY += ((2/3*(this.canvas.height))/(4/5 * this.canvas.width-6*slopeVal))*this.xSpeed;
                this.snowCords.bottomLCornerY += ((2/3 * (this.canvas.height)) / (4/5 * this.canvas.width - 6*slopeVal)) * this.xSpeed;
                if (this.xSpeed > 1){
                    this.xSpeed -= .3;
                }else if(this.xSpeed < 1 && this.xSpeed > 0){
                    this.xSpeed -= .03;
                }else{
                    this.xSpeed = 0;
                }

                if (this.snowCords.topRCornerX > this.canvas.width || this.xSpeed === 0){
                    // this.move = false;
                    this.end = true;
                }
            }
            //Slope Description
            if (slopeVal > 70 && slopeVal <= 75) {
                this.snowVal /= 1.5;
            }else if (slopeVal > 75 && slopeVal <= 80) {
                this.snowVal /= 2;
            }else if (slopeVal > 80) {
                this.snowVal /= 2.5;
            }else if (slopeVal < 30){
            }

            
            if (!this.move){
            this.ctx.beginPath();
            this.ctx.moveTo(0, 2 / 3 * this.canvas.height - this.snowVal);
            this.ctx.lineTo(this.canvas.width / 5, peak - this.snowVal);
            this.ctx.lineTo(this.snowCords.topRCornerX, this.canvas.height - this.snowVal);
            this.ctx.lineTo(this.snowCords.bottomRCornerX, this.canvas.height);
            this.ctx.lineTo(this.snowCords.bottomRCornerX, this.canvas.height);
            this.ctx.lineTo(-6 * slopeVal + this.canvas.width, this.canvas.height);
            this.ctx.lineTo(this.canvas.width / 5, peak);
            this.ctx.lineTo(0, 2 / 3 * this.canvas.height);
            this.ctx.lineTo(0, 2 / 3 * this.canvas.height-this.snowVal);
            this.ctx.fillStyle ='white';
            this.ctx.fill();
            this.ctx.stroke();
            }else{
                this.ctx.beginPath();
                this.ctx.moveTo(0, 2 / 3 * this.canvas.height - this.snowVal);
                this.ctx.lineTo(this.canvas.width / 5, peak - this.snowVal);
                this.ctx.lineTo(this.canvas.width / 5, peak);
                this.ctx.lineTo(0, 2 / 3 * this.canvas.height)
                this.ctx.fillStyle = 'white';
                this.ctx.fill();
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(this.snowCords.topLCornerX, this.snowCords.topLCornerY);
                this.ctx.lineTo(-6 * slopeVal + this.canvas.width, this.canvas.height - this.snowVal - this.snowCords.round);
                this.ctx.lineTo(this.snowCords.topRCornerX, this.canvas.height - this.snowVal);
                this.ctx.lineTo(this.snowCords.bottomRCornerX, this.canvas.height);
                this.ctx.lineTo(-6 * slopeVal + this.canvas.width, this.canvas.height);
                // this.ctx.lineTo(this.snowCords.bottomRCornerX, this.canvas.height);
                this.ctx.lineTo(this.snowCords.bottomLCornerX, this.snowCords.bottomLCornerY);
                this.ctx.lineTo(this.canvas.width / 5, peak);
                this.ctx.lineTo(this.snowCords.topLCornerX, this.snowCords.topLCornerY)
                this.ctx.fillStyle = 'white';
                this.ctx.fill();
                this.ctx.stroke();
            }
            if (slopeVal > 29 && slopeVal < 60){
                if (this.snowCords.round < 5){
                        this.snowCords.round+=.3
                }else if (this.snowCords.round< 20){
                    this.snowCords.round+=.2
                } else if (this.snowCords.round < 30){
                    this.snowCords.round+=.1;
                }else{
                    this.snowCords.round+=0;
                }
            }
        }

        moveSnow(){
            this.move = true;
            this.snowCords.topLCornerX += xSpeed;
            this.snowCords.bottomLCornerX += xSpeed;
        }
    }

    class DisplayWind{
        constructor(snowVal){
            this.canvas = document.getElementById("display-canvas")
            this.ctx = this.canvas.getContext('2d');
            this.snowVal = snowVal;
            this.windArray = [];
            this.x=0;
            this.y=0
            this.rotation = 0;
            this.createWind(snowVal);
            this.gravity=0;
            this.changeValue = 0;
            this.sizeChange = 1;
        }

        drawWind(snowvalue){
            this.snowVal = snowvalue
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
            if (this.windValue > 0){
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

            for (let i=0;i<this.windArray.length;i++){
                let val  = this.windArray[i]
                this.ctx.moveTo(val.x1,val.y1);
                this.ctx.arc (
                    val.x1,
                    val.y1,
                    val.r,
                    val.start,
                    val.angle,
                    false
                    )
                this.ctx.stroke();
                val.x1 += 5 * Math.random()*this.windValue/40;
                val.y1 -= 3 * Math.random() - val.gravity;
                val.r -= .005
                val.start += .1 * Math.PI
                val.angle += .1 * Math.PI
                val.gravity += .01
                if (val.r < .01){
                    debugger;
                    this.windArray[i] = {
                        x1: this.canvas.width / 5,
                        y1: this.canvas.height / 3 - this.snowVal,
                        r: 4,
                        start: .5 * Math.PI,
                        angle: 1 * Math.PI,
                        gravity: 0
                    }
                }
            }
            if (this.windValue > 25 && this.windArray.length < 100){
                    this.windArray.push({
                        x1: this.canvas.width / 5 + Math.random()*10 -3,
                        y1: this.canvas.height / 3 - this.snowVal + Math.random()*10,
                        r: 4,
                        start: .5 * Math.PI,
                        angle: 1 * Math.PI,
                        gravity: 0
                    })
                }
            else {
                this.windArray.shift()
            }

            
            // this.x += this.windValue/3

            // if (this.windValue * 5 + this.x > 1160){
            //     this.x = 0;
            // }

        }

        createWind(snowVal){
            for (let i = 0; i < 20; i++) {
                this.windArray.push({
                    x1: this.canvas.width / 5,
                    y1: this.canvas.height / 3 - snowVal,
                    r: 3,
                    start: .5 * Math.PI,
                    angle: 1 * Math.PI,
                    gravity: 0
                })
            }
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
            let precValue = document.getElementById("prec-true").checked;
                for(let i = 0; i<(this.particlesArray.length);i++){
                    if (precValue && tempValue <= 35){
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
                        let randCap = Math.random()*50 + 110
                        if (this.particlesArray[i].x < this.canvas.width / 5 && this.particlesArray[i].y > randCap && windValue > 20){
                        
                            this.particlesArray[i].y -= this.particlesArray[i].speedY;
                            this.particlesArray[i].x += (windValue) / 20;
                        }else{
                        this.particlesArray[i].y += this.particlesArray[i].speedY;
                        this.particlesArray[i].x += (windValue)/20;
                        }
                    }else if(precValue && tempValue > 35){
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.particlesArray[i].x, this.particlesArray[i].y)
                        this.ctx.lineTo(this.particlesArray[i].x, this.particlesArray[i].y+8)
                        this.ctx.stroke();
                        this.particlesArray[i].y += 5
                        this.particlesArray[i].x += (windValue) / 50;

                    }
                    if (this.particlesArray[i].y > this.canvas.height) {
                        this.particlesArray[i].y = Math.random(0, 10);
                    }
                    if (this.particlesArray[i].x > this.canvas.width) {
                        this.particlesArray[i].x = Math.random() * this.canvas.width;
                    }
                //  this.moveSnowflakes();
            }
        }

        createSnowflakes(){
            for(let i =0; i<300;i++){
                this.particlesArray.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    speedY: 1,
                    speedX: 2,
                    radius: Math.random()+1
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
            this.tempSlider = document.getElementById("temperature");
            this.tempValue = Number.parseInt(this.tempSlider.value);
            this.drawTemp();
        }
        drawTemp(){ 
            this.tempValue = Number.parseInt(this.tempSlider.value);
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
            this.snowcanvas = document.getElementById("snow-canvas")
            this.snowctx = this.snowcanvas.getContext('2d');
            this.animate = this.animate.bind(this)
            
            this.tempCanvas = new DisplayTemperature;
            this.weakLayer = new DisplayWeakLayer;
            this.snowflakes = new DisplayPrecipitation;
            this.textbox = new TextBox;
            this.mountainCanvas = new DisplayMountain;
            this.snowCanvas = new DisplaySnow(this.mountainCanvas.slopeVal);
            this.windCanvas = new DisplayWind(this.snowCanvas.snowVal);
        }
        animate(){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.snowctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.mountainCanvas.drawMountain(this.snowCanvas.end);
            this.windCanvas.drawWind(this.snowCanvas.snowVal);
            this.tempCanvas.drawTemp();
            this.textbox.createText();
            this.weakLayer.drawLayer(this.mountainCanvas.slopeVal, this.snowCanvas.snowVal);
            this.snowflakes.drawPrec(this.windCanvas.windValue, this.tempCanvas.tempValue);
            const initiate = document.getElementById("submit")
            let snowCanvas = this.snowCanvas;
            this.snowCanvas.drawSnow(this.mountainCanvas.slopeVal);
            initiate.onclick = function (){
                snowCanvas.moveSnow();
            }
            
            requestAnimationFrame(this.animate)

        }
    }
    
    
    let displayCanvas = new DisplayCanvas;
    displayCanvas.animate();

    const reset = document.getElementById("reset");
    reset.onclick = function(){
        let resetCanvas = new DisplayCanvas;
        resetCanvas.animate();
    }

    
    // let mountainCanvas = new displayMountain;
    // mountainCanvas.animate();

});