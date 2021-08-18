// import { random } from "core-js/core/number";
import "./styles/index.scss"
import DisplayMountain from './DisplayMountain.js'
// import DisplaySnow from './DisplaySnow.js'
// import TextBox from './textbox.js'
import DisplayPrecipitation from './DisplayPrecipitation.js'
import DisplayTemperature from './DisplayTemperature.js'
import DisplayWeakLayer from './DisplayWeakLayer.js'
import DisplayWind from './DisplayWind.js'


document.addEventListener("DOMContentLoaded", () =>{

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
            this.moveRoller = false;
            this.rollerBalls = [];
            this.positionMatrix = [];
            this.createRollerBalls();
            this.drawSnow();
        }

        drawSnow(slopeVal) {
            let weakValue = document.getElementById("weak-true").checked;
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

            if (this.move && this.snowCords.topRCornerX < this.canvas.width && slopeVal > 29 && slopeVal < 75){
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
                    this.end = true;
                    this.moveRoller = true; 
                }
                if (this.xSpeed < 1){
                    this.moveRoller = true; 
                }
            } else if (this.move && this.xSpeed===10){
                this.moveRoller = true;
                this.end = true;
            }
            //Slope Description
            if (slopeVal > 30 && slopeVal <= 75) {
                this.snowVal /= 1.5;
            }else if (slopeVal > 75 && slopeVal <= 80) {
                this.snowVal /= 2;
            }else if (slopeVal > 80) {
                this.snowVal /= 2.5;
            }else if (slopeVal < 30){
            }

            let slope = ((2 / 3 * (this.canvas.height)) / (4 / 5 * this.canvas.width - 6 * slopeVal));
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
            
            if(weakValue){
                this.ctx.beginPath();
                this.ctx.moveTo(this.canvas.width / 5, peak - this.snowVal/2);
                this.ctx.lineTo(-6 * slopeVal + this.canvas.width, this.canvas.height - this.snowVal/2);
                this.ctx.setLineDash([5, 15]);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            }

            }else{
                this.moveRoller = true;
                this.ctx.beginPath();
                this.ctx.moveTo(0, 2 / 3 * this.canvas.height - this.snowVal);
                this.ctx.lineTo(this.canvas.width / 5, peak - this.snowVal);
                this.ctx.lineTo(this.canvas.width / 5, peak);
                this.ctx.lineTo(0, 2 / 3 * this.canvas.height)
                this.ctx.fillStyle = 'white';
                this.ctx.fill();
                this.ctx.stroke();
                this.ctx.beginPath();
                let slopeDown = 1;
                // let sloper2 = 0;
                // for (let i = 0; i < 50; i++) {
                //     this.ctx.lineTo(this.snowCords.topLCornerX - i, this.snowCords.topLCornerY - i * slope - sloper2);
                //     sloper2 += .01;
                // }
                // this.ctx.moveTo(his.snowCords.topLCornerX-1, this.snowCords.topLCornerY - 1*slope);
                this.ctx.moveTo(this.snowCords.topLCornerX, this.snowCords.topLCornerY+1);
                let val = 0;
                let ychange = 0
                let yychange = 0;
                let sloper = .6;
                let otherVal = this.snowVal*2
                if(slopeVal > 29 && slopeVal < 75){
                    let numba = 0;
                    if (slopeVal < 75){
                        numba = 400;
                    }else{
                        numba = 50;
                    }
                    for (let i = 0; i<numba;i++){
                        val += 1+ychange;
                        if (this.snowCords.topLCornerY + val * slope + ychange < (this.canvas.height-this.snowVal * 3)){
                            this.ctx.lineTo(this.snowCords.topLCornerX + i, this.snowCords.topLCornerY + val * slope + ychange);
                            this.positionMatrix.push(this.snowCords.topLCornerX + i, this.snowCords.topLCornerY + val * slope + ychange)
                            if (i % 10 === 0){
                                    yychange = -.015;
                            }else{
                                    yychange = .0015;
                            }
                            ychange += yychange;   
                        } else if (this.snowCords.topLCornerX + i < this.snowCords.topRCornerX-10){
                            this.ctx.lineTo(this.snowCords.topLCornerX + i, this.canvas.height - this.snowVal-otherVal);
                            this.positionMatrix.push(this.snowCords.topLCornerX + i, this.snowCords.topLCornerY + val * slope + ychange)
                            if (otherVal > 1){
                                otherVal -= sloper;
                                if (sloper > .15){
                                sloper -= .01;
                                }else{
                                    sloper -=.0001;
                                }
                            }else{
                                otherVal = 1;
                            }
                        }
                        
                    }
                }
                
                for (let i = 0; i< 600;i++){
                        this.positionMatrix.push(500+i, this.canvas.height - (this.snowVal*1.6))
                }
                // this.ctx.lineTo(-6 * slopeVal + this.canvas.width, this.canvas.height - this.snowVal - this.snowCords.round);
                this.ctx.lineTo(this.snowCords.topRCornerX, this.canvas.height - this.snowVal);
                this.ctx.lineTo(this.snowCords.bottomRCornerX, this.canvas.height);
                this.ctx.lineTo(-6 * slopeVal + this.canvas.width, this.canvas.height);
                // this.ctx.lineTo(this.snowCords.bottomRCornerX, this.canvas.height);
                this.ctx.lineTo(this.snowCords.bottomLCornerX, this.snowCords.bottomLCornerY);
                this.ctx.lineTo(this.canvas.width / 5, peak);
                // this.ctx.lineTo(this.snowCords.topLCornerX - 3, this.snowCords.topLCornerY - 3 * slope);
                // this.ctx.lineTo(this.snowCords.topLCornerX - 2, this.snowCords.topLCornerY - 2*slope);
                // this.ctx.lineTo(this.snowCords.topLCornerX-1, this.snowCords.topLCornerY - 1*slope);
                this.ctx.lineTo(this.snowCords.topLCornerX, this.snowCords.topLCornerY+1)
                this.ctx.fillStyle = 'white';
                this.ctx.fill();
                this.ctx.stroke();
            }
            if (slopeVal > 29 && slopeVal < 75){
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
            // this.snowCords.topLCornerX += xSpeed;
            // this.snowCords.bottomLCornerX += xSpeed;
        }

        moveRollerBalls(){
            if (this.moveRoller){
                for(let i=0;i<this.rollerBalls.length;i++){
                    let roller = this.rollerBalls[i];
                    this.ctx.beginPath();
                    this.ctx.arc(
                        roller.x,
                        roller.y,
                        roller.r,
                        roller.start,
                        roller.angle,
                        false
                    )
                    this.ctx.fillStyle = 'white'
                    this.ctx.stroke();
                    this.ctx.fill();
                    roller.xexp += .03;
                    roller.x += roller.xexp
                    if (roller.x > this.canvas.width){
                        this.rollerBalls.pop()
                    }
                    debugger;
                    let booli = this.positionMatrix.indexOf(Math.floor(roller.x))
                    let booly = 0
                    if (booli > 0){
                        booly = this.positionMatrix[booli+1]
                    }
                    
                    if (roller.y < (booly+3) && roller.bouncey === true || roller.gravity <= 0){
                        roller.y += roller.gravity;
                        roller.gravity += .1;
                        roller.bouncey = true;
                    }else if (roller.y > (booly + 3)|| roller.bouncey === false){
                        roller.bouncey = false;
                        roller.y -= roller.gravity;
                        roller.gravity -= 1;
                        roller.x += 2
                    }

                   
                
                }
                
                if (this.rollerBalls.length < 30) {
                    this.createRollerBalls();
                }
            }
           
            
            
        }

        createRollerBalls(){
            for(let i = 0; i<2;i++){
                this.rollerBalls.push({
                    x: this.canvas.width / 5 + Math.random()*60,
                    y: this.canvas.height / 3 - 20 + Math.random()*20,
                    r: 4,
                    start: 0,
                    angle: 2 * Math.PI,
                    bounce: true,
                    bouncey: true,
                    gravity: 1,
                    xexp: 2
                })

            }
        }
    }

    // class DisplayWind{
    //     constructor(snowVal){
    //         this.canvas = document.getElementById("display-canvas")
    //         this.ctx = this.canvas.getContext('2d');
    //         this.snowVal = snowVal;
    //         this.windArray = [];
    //         this.x=0;
    //         this.y=0
    //         this.rotation = 0;
    //         this.gravity=0;
    //         this.changeValue = 0;
    //         this.sizeChange = 1;
    //     }

    //     drawWind(snowvalue,tempValue){
    //         this.snowVal = snowvalue
    //         let windSlider = document.getElementById("windspeed");
    //         this.windValue = Number.parseInt(windSlider.value);
       
    //         //old four lines


    //         // if (this.windValue > 0){
    //         //     let y = Math.random() * 4-7
    //         //     this.ctx.moveTo(0, 50);
    //         //     this.ctx.lineTo(150 + this.windValue / 2, 50 + y * this.windValue / 20);
    //         //     this.ctx.moveTo(0, 100);
    //         //     this.ctx.lineTo(100 + this.windValue / 2, 100+y*this.windValue/20);
    //         //     this.ctx.moveTo(0, 150);
    //         //     this.ctx.lineTo(50+this.windValue/1.5, 150+y*this.windValue/20);
    //         //     this.ctx.moveTo(0, 200);
    //         //     this.ctx.lineTo(this.windValue, 200+y*this.windValue/20);
    //         //     this.ctx.stroke();
    //         // }

    //         for (let i=0;i<this.windArray.length;i++){
    //             let val  = this.windArray[i]
    //             // this.ctx.moveTo(val.x1,val.y1);
    //             this.ctx.beginPath()
    //             this.ctx.arc (
    //                 val.x1,
    //                 val.y1,
    //                 val.r,
    //                 val.start,
    //                 val.angle,
    //                 false
    //                 )
    //             this.ctx.stroke();
    //             val.x1 += 5 * Math.random()*this.windValue/40;
    //             val.y1 -= 3 * Math.random() - val.gravity;
    //             val.r -= .01
    //             val.start += .1 * Math.PI
    //             val.angle += .1 * Math.PI
    //             val.gravity += .02
    //         }
    //         if (this.windValue > 25 && this.windArray.length < 100 && tempValue < 35){
    //                 this.windArray.push({
    //                     x1: this.canvas.width / 5 + Math.random()*10 -15,
    //                     y1: this.canvas.height / 3 - this.snowVal + Math.random()*10,
    //                     r: 5,
    //                     start: .5 * Math.PI,
    //                     angle: 1 * Math.PI,
    //                     gravity: 0
    //                 })
    //             }
    //         else {
    //             this.windArray.shift()
    //         }

    //     }
// }

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

            if (slopeValue < 30 || slopeValue > 75){
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
            this.weathercanvas = document.getElementById("weather-canvas")
            this.weatherctx = this.weathercanvas.getContext('2d');
            this.animate = this.animate.bind(this)
            
            this.tempCanvas = new DisplayTemperature;
            // this.weakLayer = new DisplayWeakLayer;
            this.snowflakes = new DisplayPrecipitation;
            this.textbox = new TextBox;
            this.mountainCanvas = new DisplayMountain;
            this.snowCanvas = new DisplaySnow(this.mountainCanvas.slopeVal);
            this.windCanvas = new DisplayWind(this.snowCanvas.snowVal);
        }
        animate(){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.snowctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.weatherctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.mountainCanvas.drawMountain(this.snowCanvas.end);
            this.windCanvas.drawWind(this.snowCanvas.snowVal, this.tempCanvas.tempValue);
            this.tempCanvas.drawTemp();
            this.textbox.createText();
            // this.weakLayer.drawLayer(this.mountainCanvas.slopeVal, this.snowCanvas.snowVal);
            this.snowflakes.drawPrec(this.windCanvas.windValue, this.tempCanvas.tempValue);
            const initiate = document.getElementById("submit")
            let snowCanvas = this.snowCanvas;
            this.snowCanvas.drawSnow(this.mountainCanvas.slopeVal);
            this.snowCanvas.moveRollerBalls();
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

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // let mountainCanvas = new displayMountain;
    // mountainCanvas.animate();

});