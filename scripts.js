document.addEventListener("DOMContentLoaded", function(event) {
	var titulos = [];
	var puntuaciones = [];
	var x = document.getElementsByClassName("title_card");

	for (i=0; i<x.length; i++){
		titulos[i] = x[i].getAttribute("aria-label");
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
		    	puntuaciones[n] = myFunction(this);
		    }
		};
		var url = "https://www.omdbapi.com/?t=" + titulos[i];
		xhttp.open("GET", url, true);
		xhttp.send();

		x[i].innerHTML += "<p>" + puntuaciones[i] + "</p>";
	}
})

function myFunction(json) {
	var jsonObj = JSON.parse(json.responseText);
	//console.log(jsonObj.Title);
	//console.log(jsonObj.imdbRating);
	return jsonObj.imdbRating;
}