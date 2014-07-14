
var myImage = document.getElementById("mainImage");

var imageArray = ["images/ediblecars.jpg", "images/engine.jpg"
					,"images/biodegradablecar.jpg"];
					//"images/vw.jpg", "images/oldsmobile.jpg" ];

var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,5000);