// Main js file for Project 3	

// Author: Allen Boynton
// Visual Frameworks 1412
// Project 3
// Due: December 13, 2014
Ti.UI.setBackgroundColor("#000");

//Background
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#333333",
});

//Main menu button
var menuButton = Ti.UI.createView({
	backgroundColor: "gray",
	height: 100,
	width: "100%",
	borderColor: "black"
});

//Main menu text
var menuText = Ti.UI.createLabel({
	text: "Open Underwater Dog Gallery",
	color: "white",
	font: {fontFamily: "Chalkduster", fontSize: 16, fontWeight: "bold"},
	textAlign: "center"
});

//variable loadFile to access secodary js file
var loadFile = require("underwaterdogs");

//Main code
mainWindow.add(menuButton);
menuButton.add(menuText);
mainWindow.open();
