//document.addEventListener("DOMContentLoaded", function(event) {
if (document.readyState == "complete") {
	// var titulos = [];
	// var puntuaciones = [];
	// var x = document.getElementsByClassName("title_card");

	// for (i=0; i<x.length; i++){
	// 	titulos[i] = x[i].getAttribute("aria-label");
	// 	var xhttp = new XMLHttpRequest();
	// 	xhttp.onreadystatechange = function() {
	// 		if (this.readyState == 4 && this.status == 200) {
	// 			puntuaciones[this.numero] = myFunction(this);
	// 			if (!isNaN(puntuaciones[this.numero])){
	// 				var p = document.createElement("p");
	// 				p.classList.add("score");
	// 				p.innerHTML = puntuaciones[this.numero];
	// 				x[this.numero].appendChild(p);
	// 			}
	// 		}
	// 	}
	// 	xhttp.numero = i;
	// 	var url = "https://www.omdbapi.com/?t=" + titulos[i];
	// 	xhttp.open("GET", url, true);
	// 	xhttp.send();
	// }

	var x = document.getElementsByClassName("smallTitleCard");
	for (i=0; i<x.length; i++){
		var titulo = x[i].getAttribute("aria-label");
		if(typeof x[i].getElementsByTagName("span")[0]!="undefined" && x[i].getElementsByTagName("span")[0].getAttribute("data-reactid")) {//comprueba que el span es correcto
			x[i].getElementsByTagName("span")[0].addEventListener("DOMSubtreeModified", (function (titulo, elemento) {
				return function () {
					if (elemento.childNodes.length>0 && elemento.getElementsByClassName("score").length<1)//comprueba que está abierto y no hay puntuación
						myFunction2(titulo, elemento);
				};
			})(titulo, x[i].getElementsByTagName("span")[0]));
		}
	}
}//)

function myFunction(json) {
	var jsonObj = JSON.parse(json.responseText);
	//console.log(jsonObj.Title);
	//console.log(jsonObj.imdbRating);
	return jsonObj.imdbRating;
}

function myFunction2(titulo, elemento) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var puntuacion = myFunction(this);
			if (!isNaN(puntuacion)){
				var p = document.createElement("p");
				p.classList.add("score");
				p.innerHTML = "IMDb: "+puntuacion;
				elemento.getElementsByClassName("bob-overlay")[0].appendChild(p);
			}
		}
	}
	var url = "https://www.omdbapi.com/?t=" + titulo;
	xhttp.open("GET", url, true);
	xhttp.send();
}