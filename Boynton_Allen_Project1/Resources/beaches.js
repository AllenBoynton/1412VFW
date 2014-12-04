// global variables
var beachNames = ["Miami South Beach, FL", "Myrtle Beach, SC", 
				"Daytona Beach, FL", "Laguna Beach, CA", "Venice Beach, CA", 
				"Clearwater Beach, FL", "Long Beach, NJ"];

var i = 6;

var nextBeach = function(){
	if(beachNames[i] === "Long Beach, NJ"){
		titleText.text = beachNames[i];
		i = 0;
	} else {
		titleText.text = beachNames[i];
		i++;
	}
};

var previousBeach = function(){
	if(beachNames[i] === "Miami South Beach, FL"){
		titleText.text = beachNames[i];
		i = 6;
	} else {
		titleText.text = beachNames[i];
		i--;
	}
};


previousButton.addEventListener("click", previousBeach);
nextButton.addEventListener("click", nextBeach);