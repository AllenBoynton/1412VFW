// (bootstrap file) Only contains the necessary objects to open this application.

// Author: Allen Boynton
// VFW1412
// Project 1
// Due: December 2, 2014

Ti.UI.setBackgroundColor("#000");

var mainBackground = Ti.UI.createWindow({
	// Reserved Properties
	backgroundColor: "#fff",
	backgroundImage: "beach.png",
	title: "My First App Window"
});

var mainWindow = Ti.UI.createView({
	backgroundColor: "f6e2b7",
	borderColor: "black",
	borderRadius: 5,
	borderWidth: 1,
	height: 100,
	top: 50,
	left: 20,
	right: 20,
});

var titleText = Ti.UI.createLabel({
	text: "USA Beaches",
	color: "blue",
	font: {fontSize: 24, fontFamily: "Baskerville", fontWeight: "bold", fontStyle: "italic"},
	textAlign: "center",
	top: 37
});

var previousButton = Ti.UI.createView({
	backgroundColor: "00bff0",
	borderColor: "black",
	top: mainWindow.top + mainWindow.height + 250,
	left: 20,
	right: 175,
	borderRadius: 5,
	height: 75 
});

var previousLabel = Ti.UI.createLabel({
	text: "Previous",
	color: "white",
	font: {fontSize: 18, fontFamily: "Baskerville", fontWeight: "bold", fontStyle: "italic"},
	top: 425,
	left: 45
});

var nextButton = Ti.UI.createView({
	backgroundColor: "00bff0",
	borderColor: "black",
	top: mainWindow.top + mainWindow.height + 250,
	left: 175,
	right: 20,
	borderRadius: 5,
	height: 75
});

var nextLabel = Ti.UI.createLabel({
	text: "Next",
	color: "white",
	font: {fontSize: 18, fontFamily: "Baskerville", fontWeight: "bold", fontStyle: "italic"},
	top: 425,
	right: 65
});

var beachNames = ["Miami, FL", "Myrtle Beach, SC", "Daytona Beach, FL", "Laguna Beach, CA",
				"Venice Beach, CA", "Clearwater Beach, FL", "Long Beach, NJ" ];
/*
var leadFile = require("beaches");
*/
var showBeachNames = function(){
	titleText.hide();
	//titleText = null;
	
	var beachLabel = Ti.UI.createLabel({
		text: beachNames[0],
		color: "blue",
		font: {fontSize: 24, fontFamily: "Baskerville", fontWeight: "bold", fontStyle: "italic"},
		textAlign: "center",
		top: 37
	});
	// Displays beach names in main window
	mainWindow.add(beachLabel);
	
};
// Give function to buttons
previousButton.addEventListener("click", showBeachNames);
nextButton.addEventListener("click", showBeachNames);


mainBackground.open();
mainBackground.add(mainView, previousButton, previousLabel, nextButton, nextLabel);
mainWindow.add(titleText);

