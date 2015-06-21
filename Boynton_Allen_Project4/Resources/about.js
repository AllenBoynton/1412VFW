var dogBreeds = {
	{
	title    : "Female Pit bull",
	training : "65%",
	strength : "90%",
	description: "The dog was bred first to bait bulls and bears. When bear-baiting and bull-baiting were deemed inhumane, rat-baiting and dog-baiting became more popular. The APBT Breed was used in both sports, and its prevalence in being put in pits with rats, or other dogs led to \"pit\" being added to its name.",
	image: "images/Faith.jpg"
	},
	{
	title    : "Golden Retriever",
	training : "90%",
	strength : "70%",
	description: "The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl such as ducks and upland game birds during hunting and shooting parties, and were named 'retriever' because of their ability to retrieve shot game undamaged.",
	image: "images/Bandit.jpg"
	},
	{
	title    : "Boxer",
	training : "80%",
	strength : "75%",
	description: "The Boxer is a breed of stocky, medium-sized, short-haired dogs developed in Germany. Their coat is smooth and tight-fitting; colors are fawn or brindled, with or without white markings, which may cover the entire body, and white. Boxers held steady as the seventh most popular breed of dog in the United States for the fourth consecutive year.",
	image: "images/Duke.jpg"
	},
	{
	title    : "Blue-Nose Pit bull",
	training : "65%",
	strength : "92%",
	description: "Blue nose pits are very fascinating to a lot of people because this is a color that cannot be found in many dog breeds. The only thing different about a blue nose is coloring. That’s not to say that all pit bulls are the same, but any differences between them have nothing to do with the coloring of the dog.",
	image: "images/Kennah.jpeg"
	},
	{
	title    : "Miniature Pinscher",
	training : "70%",
	strength : "45%",
	description: "The Miniature Pinscher (Zwergpinscher, Min Pin) is a small breed of dog, originating from Germany. The breed's earliest ancestors may have included the German Pinscher mixed with Italian greyhounds and dachshunds. The Miniature Pinscher is reported to include the Dachshund and Italian Greyhound among its ancestors. Many historians agree the shorthaired German Pinscher to the family tree.",
	image: "images/Diego.jpg"
	}		
};

var aboutWindow = function(){
	var mainWindow = Ti.UI.createWindow({
		title: "Popular Dog Breeds",
		backgroundColor: "gray"
	});
	
	var border = Ti.UI.createView({
		backgroundColor: "black",
		height: 2
	});
	
	var dogs = Ti.UI.createTableView({
	});
	
	if(Ti.Platform.name === "iPhone OS"){
		dogs.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	};
	
	var dogsSection = Ti.UI.createTableViewSection({
		headerTitle: "These are some top dog breeds in popularity with many people today."
	});
	
	var getDetail = function(){
		var detailWindow = Ti.UI.createWindow({
			title: this.title,
			backgroundColor: "brown"
		});
		
		var detailBorder = Ti.UI.createView({
			backgroundColor: "black",
			height: 2,
			top: 0
		});
		
		var dogImageView = Ti.UI.createImageView({
			image: this.imageView,
			top: 20,
			borderRadius: 8,
			imageAlign: "center",
			width: 300
		});
		
		// Start training meter
		var trainingText = Ti.UI.createLabel({
			text: "Training Ability",
			color: "white",
			font: {fontSize: 20, fontFamily: customFont},
			bottom: 250,
			left: 20
		});
		
		var trainingPercent = Ti.UI.createLabel({
			text: this.training,
			color: "white",
			font: {fontSize: 16, fontFamily: customFont},
			bottom: 250,
			right: 20
		});
		
		var trainingFiller = Ti.UI.createView({
			backgroundColor: "orange",
			height: 30,
			width: this.training,
			bottom: trainingText.bottom - 30,
			left: 15,
			borderRadius: 20
		});
		
		var trainingView = Ti.UI.createView({
			backgroundColor: "red",
			height: 30,
			bottom: trainingText.bottom - 30,
			left: 15,
			right: 15,
			borderRadius: 20
		});
		
		// Start strength meter
		var strengthText = Ti.UI.createLabel({
			text: "Animal Strength: ",
			color: "white",
			font: {fontSize: 20, fontFamily: customFont},
			bottom: trainingText.bottom - 65,
			left: 20
		});
		
		var strengthPercent = Ti.UI.createLabel({
			text: this.strength,
			color: "white",
			font: {fontSize: 16, fontFamily: customFont},
			bottom: trainingPercent.bottom - 65,
			right: 70
		});
		
		var strengthFiller = Ti.UI.createView({
			backgroundColor: "orange",
			height: 30,
			width: this.strength,
			bottom: trainingFiller.bottom - 65,
			left: 15,
			right: 15,
			borderRadius: 20
		});
		
		var strengthView = Ti.UI.createView({
			backgroundColor: "red",
			height: 30,
			bottom: trainingView.bottom - 65,
			left: 15,
			right: 15,
			borderRadius: 20
		});
		
		// Start description text
		descriptionText = Ti.UI.createLabel({
			text: this.desc,
			color: "white",
			font: {fontSize: 16, fontFamily: customFont},
			top: strengthFiller.bottom + 10,
			left: 15,
			right: 15,
			bottom: 10
		});
		dogImageView.add(trainingView, trainingText, trainingPercent, trainingFiller, strengthView, strengthText, strengthPercent, strengthFiller);
		detailWindow.add(dogImageView, trainingView, strengthView, descriptionText);
		
		mainWindow.openWindow(aboutWindow);
	};
};

midView.addEventListener("click", detailWindow);
