Ti.UI.setBackground("#333");

// Background
var mainWindow = Ti.UI.createWindow({
	backgroundcolor: "#3b3c3a",
	title: "VFW Project 4 Dogs"
});

// Navigation window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var customFont = "MarkerFelt-Wide";

// Top view in window
var topView = Ti.UI.createView({
	backgroundColor: "#d74a6b",
	height: 100,
	width: 350,
	top: 0
});

// Middle view in window
var midView = Ti.UI.createView({
	backgroundColor: "#f98663",
	height: 100,
	width: 350,
	top: topView.height + topView.top
});

// Lower view in window
var bottomView = Ti.UI.createView({
	backgroundColor: "#2d6c79",
	height: 100,
	width: 350,
	top: midView.height + midView.top
});

navWindow(navWindow, topView, midView, bottomView);





