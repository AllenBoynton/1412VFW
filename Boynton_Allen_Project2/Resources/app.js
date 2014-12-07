// Main .js bootstrap file for cruise ship theme

// Author: Allen Boynton
// Visual Frameworks 1412
// Project 2
// Due: December 6, 2014

Ti.UI.setBackgroundColor("d3d3d3");

// Main background
var mainBackground = Ti.UI.createWindow({
	backgroundColor: "transparent",
});

// Title bar
var titleBar = Ti.UI.createView({
	backgroundColor: "blue",
	top: 20,
	height: 50
});

// Title bar text
var titleText = Ti.UI.createLabel({
	text: "Cruise Ships",
	textAlign: "center",
	font: {color: "blue", fontWeight: "bold", fontSize: 18}
});

// Border line
var borderLine = Ti.UI.createView({
	backgroundColor: "blue",
	top: titleBar.top + titleBar.height,
	height: 2
});

// Table view
var shipTable = Ti.UI.createTableView({
	top: borderLine.top + borderLine.height,
});

// Cruise ships
var shipSection = Ti.UI.createTableViewSection({
	headerTitle: "Cruise Ships",
	footerTitle: "Ship Features"
});

// Grand ships
var grandShipSection = Ti.UI.createTableViewSection({
	headerTitle: "Grand Ships",
	footerTitle: "Ship Features"
});

// Create array to add to the cruise ship table
var shipSections = [cruiseShipSection, grandShipSection];

// Add sections to the table
shipTable.setData(shipSections);

// loadFile variable to load secondary file
var loadFile = require("json");

// Main code
mainBackground.add(titleBar, borderLine, shipTable);
titleBar.add(titleText);
mainBackground.open();
