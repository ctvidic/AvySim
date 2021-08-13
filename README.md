# AvySim




**Background**:
	Throughout snowy mountainous areas in the United States avalanches pose a big concern to winter backcountry enthusiasts. The purpose of the project is to serve as a visual educational resource for avalanche characteristics based off inputted user weather/terrain criteria. Avalanches are classified into nine different types, varying based off local terrain and recent weather conditions. Users can input their own input data (or potentially have recent local weather data inputted for them) allowing for an educational visual representation of the avalanche type. After submission, there will be a dynamic visual representation of the avalanche type as well as a relevant description for the avalanche type.

****Functionality and MVPs****

While using this visual representation, users will be able to: 

•	Input necessary data for identifying avalanche type

o		Ex inputs: Slope Angle, Snowpack, Temperature, Wind, etc

o		Ex avalanche types: Glide, Cornice, Persistent Slab, etc


•	View a dynamic output of one of the nine avalanche types that match their inputted conditions

•	Associated info for the avalanche type, and an explanation for why it was chosen based off user conditions

****Calculations for Avalanche Type****

User Input:

	• Snowpack: (inches)
	
	• Temperature: (degree fahreinheit)
	
	• Slope angle: 0 - 90 degrees
	
	• Sunny: (True, False)
	
	• Precipitation: (True, False)
	
	• Windspeed: 0-30 mph
	
	• Weak Layer: (True, False)
	

	
•	Wind Slab, Cornice Fall: Windspeed > 15 mph
•	Persisent Slab: Weak Layer = True
•	Loose Wet/Wet Slab: Temperature > 40F, Sunny = True OR Precipitation = True
•	Storm Slab: Precipitation = True

If slope angle is less than 30 degrees or greater than 45, there will be no avalanche (out of angle)
If snowpack is zero there will be no avalanche (no snow)






In addition, the project will include:

•	A production README

•	Instructions for user, controls

**Wireframe**







	
	




![image](https://user-images.githubusercontent.com/80602202/129301683-be04e5d3-0241-46d9-860d-2f42256ee4bb.png)

**Technologies, Libraries, APIs**
This project will be implemented with the following technologies


•	Webpack and Babel to bundle and transpile the source Javascript code

•	npm to manage project dependencies

•	P5.js to create the dynamic canvas visualization


**Implementation Timeline**

Friday Afternoon and Weekend: Research related project info. Setup project and webpack configuration. The overall layout (as seen in the wireframe) should be able to viewed by end of weekend. Create all the necessary classes.

Monday: Begin work on graphics that will be displayed to user. Work on logic implementation for user input.

Tuesday: Basic visualization of each avalanche type should be visible. Work on ensuring user input is represented correctly. Work on more advanced graphics and physics for project (wind effects, gravity)

Wednesday: Improve the graphics and overall appearance. Improve dynamics of graphics and any bugs. If time implement bonus objectives. End with Finishing touches. Deploy GitHub page


**Bonus Features**

•	Implement the Weatherbit.io historical weather API to input historical snow conditions based off user location







	
	





