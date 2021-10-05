# [AvySim](https://ctvidic.github.io/AvySim/)




**Background**:
	Throughout snowy mountainous areas in the United States avalanches pose a big concern to winter backcountry enthusiasts. The purpose of the project is to serve as a visual educational resource for avalanche characteristics based off inputted user weather/terrain criteria. Avalanches are classified into nine different types, varying based off local terrain and recent weather conditions. Users can input their own input data (or potentially have recent local weather data inputted for them) allowing for an educational visual representation of the avalanche type. After submission, there will be a dynamic visual representation of the avalanche type as well as a relevant description for the avalanche type.

****Functionality and MVPs****

While using this visual representation, users will be able to: 

	• Input necessary data for identifying avalanche type

		o Ex inputs: Slope Angle, Snowpack, Temperature, Wind, etc

		o Ex avalanche types: Glide, Cornice, Persistent Slab, etc


	• View a dynamic output of one of the nine avalanche types that match their inputted conditions

	• Associated info for the avalanche type, and an explanation for why it was chosen based off user conditions

****Calculations for Avalanche Type****

User Input:

	• Snowpack: (inches)
	
	• Temperature: (degrees fahreinheit)
	
	• Slope angle: 0 - 90 degrees
	
	• Sunny: (True, False)
	
	• Precipitation: (True, False)
	
	• Windspeed: 0-30 mph
	
	• Weak Layer: (True, False)
	

Avalanche Type Based off Input

	• Wind Slab, Cornice Fall: Windspeed > 15 mph
	
	• Persisent Slab: Weak Layer = True
	
	• Loose Wet/Wet Slab: Temperature > 40F, Sunny = True OR Precipitation = True
	
	• Storm Slab: Precipitation = True
	
	• If slope angle is less than 30 degrees or greater than 45, there will be no avalanche (out of angle)
	
	• If snowpack is zero there will be no avalanche (no snow)

In addition, the project will include:

	• A production README

	• Instructions for user, controls

**Wireframe**
![image](https://user-images.githubusercontent.com/80602202/129402391-8d00ad65-2c35-40e2-ad1a-4f029f13fa15.png)

	• Title: Displays title of project 
	
	• Visualization Display: Displays avalanche on sloped mountainside, will dynamically move avalanche based off gravity, wind.
	
	• User input: Area for user to input
	
	• Avalanche type+Explantion for Avalanche type: Self explanatory, will show the avalanche type and a relevant description.
	

	
**Technologies, Libraries, APIs**
This project will be implemented with the following technologies

	• Webpack and Babel to bundle and transpile the source Javascript code

	• npm to manage project dependencies
	
**Code Example**
From a creative standpoint, creating a wind effect seemed like very difficult challenge working with only Canvas and Javascript. I was able to accomplish this effect with the following code: 
```javascript
drawWind(snowvalue, tempValue) {
        this.snowVal = snowvalue
        let windSlider = document.getElementById("windspeed");
        this.windValue = Number.parseInt(windSlider.value);
        for (let i = 0; i < this.windArray.length; i++) {
            let val = this.windArray[i]
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
 ```
This code snippet works by consistently generating new wind 'arc' elements. Arcs are canvas form of a circle and by only representing a portion of the circle we can 'rotate' the arc over time by rendering different portions of the circle over time. Combine this with a slightly randomized x-value that is dependent on the wind value, a slightly radomized value that accelerates over time from gravity, and an array limit allowing old arc elements to be destroyed, we get an accurate and visually pleasing wind effect coming off the summit of the mountain.  

**Implementation Timeline**

Friday Afternoon and Weekend: Research related project info. Setup project and webpack configuration. The overall layout (as seen in the wireframe) should be able to viewed by end of weekend. Create all the necessary classes.

Monday: Begin work on graphics that will be displayed to user. Work on logic implementation for user input.

Tuesday: Basic visualization of each avalanche type should be visible. Work on ensuring user input is represented correctly. Work on more advanced graphics and physics for project (wind effects, gravity)

Wednesday: Improve the graphics and overall appearance. Improve dynamics of graphics and any bugs. If time implement bonus objectives. End with Finishing touches. Deploy GitHub page


**Bonus Features**

	• Implement the Weatherbit.io historical weather API to input historical snow conditions based off user location







	
	





