var viewFavImage = Ti.UI.createImageView({
	image: "images/Kennah.jpeg"
});

var viewFavText = Ti.UI.createLabel({
	text: "This is my own baby girl Kennah, a Blue Nose Pit Bull rescue",
	color: "white",
	font: {fontSize: 24, fontFamily: customFont},
	left: 15,
	right: 15
});

var flipSwitch = Ti.UI.createSwitch({
	value: false,
	bottom: 15
});

var mainWindow = function(){
	var favWindow = Ti.UI.createWindow({
		title: "Favorite",
		backgroundColor: "pink"
	});
	
	var viewFav = function(){
		if (flipSwitch.value == false){
			favWindow.add(viewFavText);
			favWindow.remove(viewFavImage);
		}
		else if (flipSwitch.value == true){
			favWindow.add(viewFavImage);
			favWindow.remove(viewFavText);
		}
	};
};
