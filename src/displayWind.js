export default class DisplayWind {
    constructor(snowVal) {
        this.canvas = document.getElementById("display-canvas")
        this.ctx = this.canvas.getContext('2d');
        this.snowVal = snowVal;
        this.windArray = [];
        this.x = 0;
        this.y = 0
        this.rotation = 0;
        this.gravity = 0;
        this.changeValue = 0;
        this.sizeChange = 1;
    }

    drawWind(snowvalue, tempValue) {
        this.snowVal = snowvalue
        let windSlider = document.getElementById("windspeed");
        this.windValue = Number.parseInt(windSlider.value);

        //old four lines


        // if (this.windValue > 0){
        //     let y = Math.random() * 4-7
        //     this.ctx.moveTo(0, 50);
        //     this.ctx.lineTo(150 + this.windValue / 2, 50 + y * this.windValue / 20);
        //     this.ctx.moveTo(0, 100);
        //     this.ctx.lineTo(100 + this.windValue / 2, 100+y*this.windValue/20);
        //     this.ctx.moveTo(0, 150);
        //     this.ctx.lineTo(50+this.windValue/1.5, 150+y*this.windValue/20);
        //     this.ctx.moveTo(0, 200);
        //     this.ctx.lineTo(this.windValue, 200+y*this.windValue/20);
        //     this.ctx.stroke();
        // }

        for (let i = 0; i < this.windArray.length; i++) {
            let val = this.windArray[i]
            // this.ctx.moveTo(val.x1,val.y1);
            this.ctx.beginPath()
            this.ctx.arc(
                val.x1,
                val.y1,
                val.r,
                val.start,
                val.angle,
                false
            )
            this.ctx.strokeStyle = "white";
            this.ctx.stroke();
            val.x1 += 5 * Math.random() * this.windValue / 40;
            val.y1 -= 3 * Math.random() - val.gravity;
            val.r -= .01
            val.start += .1 * Math.PI
            val.angle += .1 * Math.PI
            val.gravity += .02
        }
        if (this.windValue > 25 && this.windArray.length < 100 && tempValue < 35) {
            this.windArray.push({
                x1: this.canvas.width / 5 + Math.random() * 10 - 15,
                y1: this.canvas.height / 3 - this.snowVal + Math.random() * 10,
                r: 9,
                start: .5 * Math.PI,
                angle: 1 * Math.PI,
                gravity: 0
            })
        }
        else {
            this.windArray.shift()
        }

    }
}