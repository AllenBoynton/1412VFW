// Main js file for Project 3	

// Author: Allen Boynton
// Visual Frameworks 1412
// Project 3
// Due: December 13, 2014
Ti.UI.setBackgroundColor("#000");

//Background
var mainWindow = Ti.UI.createWindow({
	backgroundImage: "water.jpg"
});

//Main menu button
var menuButton = Ti.UI.createView({
	backgroundColor: "white",
	top: 200,
	height: 75,
	width: 275,
	borderColor: "blue",
	borderWidth: 2,
	borderRadius: 8
});

//Main menu text
var menuText = Ti.UI.createLabel({
	text: "Open Underwater Dog Gallery",
	color: "blue",
	font: {fontFamily: "Chalkduster", fontSize: 14, fontWeight: "bold"},
	textAlign: "center"
});

//variable loadFile to access secodary js file
var loadFile = require("underwaterdogs");

//Main code
mainWindow.add(menuButton);
menuButton.add(menuText);
mainWindow.open();
