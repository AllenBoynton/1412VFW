// global variables
var beachNames = ["Miami, FL", "Myrtle Beach, SC", "Daytona Beach, FL", "Laguna Beach, CA",
				"Venice Beach, CA", "Clearwater Beach, FL", "Long Beach, NJ" ];

var beachNames = function() {
	titleText.text = "leadFile";
	
	for(var i=0, b=beach.length; i<b; i++) {
		var beachNames = Ti.UI.createLabel({
			text: beachNames[i],
			color: "blue",
			font: {fontSize: 24, fontFamily: "Baskerville", fontWeight: "bold", fontStyle: "italic"},
			textAlign: "center",
			top: 37
		});
		mainWindow.add(beachNames);
	}

};

titleText.addEventListener("click", beachNames);