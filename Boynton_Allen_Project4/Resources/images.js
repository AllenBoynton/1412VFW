var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resoursesDirectory, "images");
var imageList = imagesFolder.getDirectoryListing();

var currentWindow = Ti.UI.currentWindow;

for (var i=0, j=imageList.length; i<j; i++){
	var myImage = Ti.UI.createImageView({
		image: "images" + imageList[i],
		width: 350,
		top: 25
	});
	
	currentWindow.add(myImage);
}
