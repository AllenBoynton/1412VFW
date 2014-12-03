// (bootstrap file) Only contains the necessary objects to open this application.

// Author: Allen Boynton
// VFW1412
// Project 1
// Due: December 2, 2014

Ti.UI.setBackgroundColor("#000");

var mainWindow = Ti.UI.createWindow({
	// Reserved Properties
	backgroundColor: "#fff",
	backgroundImage: "beach.png",
	title: "My First App Window"
});

var mainView = Ti.UI.createView({
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
	top: mainView.top + mainView.height + 250,
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
	top: mainView.top + mainView.height + 250,
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

var leadFile = require("beaches");

mainWindow.open();
mainWindow.add(mainView, previousButton, previousLabel, nextButton, nextLabel);
mainView.add(titleText);
