


class DisplayPrecipitation{
        constructor() {
            this.canvas = document.getElementById("weather-canvas")
            this.ctx = this.canvas.getContext('2d');
            this.particlesArray=[];
            this.createSnowflakes();
        }
        drawPrec(windValue,tempValue) {
            let precValue = document.getElementById("prec-true").checked;
                if (!precValue){
                    weatherbackdrop.style.visibility = 'hidden';
                    this.ctx.beginPath();
                    this.ctx.arc(
                        this.canvas.width - 100,
                        100,
                        30,
                        0,
                        Math.PI*2,
                        false
                    )
                    this.ctx.shadowColor = '#feca1d';
                    this.ctx.shadowBlur = Math.random()*(tempValue/20) + tempValue;
                    this.ctx.fillStyle = '#feca1d';
                    this.ctx.fill();
                }
                for(let i = 0; i<(this.particlesArray.length);i++){
                    if (precValue && tempValue <= 35){
                        weatherbackdrop.style.visibility = 'visible';
                        this.ctx.beginPath();
                        this.ctx.arc(
                            this.particlesArray[i].x,
                            this.particlesArray[i].y,
                            this.particlesArray[i].radius,
                            0,
                            Math.PI*2,
                            false
                        )
                        this.ctx.fillStyle = 'white';
                        this.ctx.fill();
                        let randCap = Math.random()*50 + 110
                        if (this.particlesArray[i].x < this.canvas.width / 5 && this.particlesArray[i].y > randCap && windValue > 20){
                        
                            this.particlesArray[i].y -= this.particlesArray[i].speedY;
                            this.particlesArray[i].x += (windValue) / 40 + Math.floor(Math.random()*2);
                        }else{
                        this.particlesArray[i].y += this.particlesArray[i].speedY;
                            this.particlesArray[i].x += (windValue) / 40 + Math.floor(Math.random() *2);
                        }
                    }else if(precValue && tempValue > 35){
                        weatherbackdrop.style.visibility = 'visible';
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.particlesArray[i].x, this.particlesArray[i].y)
                        this.ctx.lineTo(this.particlesArray[i].x, this.particlesArray[i].y+8)
                        this.ctx.strokeStyle = 'cyan';
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

export default DisplayPrecipitation;