// Two methods for timers - setTimeout and SetInterval (single / repeating)

// function simpleMessage() {
// 	alert("This is just an alert box");
// }

// settimeout is in milliseconds
// setTimeout(simpleMessage, 5000);

var myImage = document.getElementById("mainImage");
// alert("myImage =mainImage")

var imageArray = ["images/ediblecars.jpg","images/vw.jpg",
					"images/oldsmobile.jpg", "images/engine.jpg"
					,"images/biodegradablecar.jpg"];



// alert(imageArray);

var imageIndex = 0;
// alert(imageIndex);

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	// alert("image changed");
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
		// alert("looping ");
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,5000);
// alert("done");
// myImage.onclick = function() {
// 	clearInterval(intervalHandle);
// }