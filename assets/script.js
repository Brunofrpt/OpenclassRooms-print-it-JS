const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//*********************************************************
// Ecouteurs sur les fleches de gauche et droite */
//****************************************************** */

let btnFlecheGauche = document.querySelector(".arrow_left")

btnFlecheGauche.addEventListener("click", () => {
	console.log("t'as bien cliqué sur la flèche gauche")
});

let btnFlecheDroite = document.querySelector(".arrow_right")

btnFlecheDroite.addEventListener("click", () => {
	console.log("T'as bien cliqué sur la flèche de droite")
});

let sectionDots = document.querySelector(".dots");//dit que la variable JS sectionDots est la classe css html .dots


function genererDots(slides) {
	for (let i = 0; i < slides.length; i++) { //on initialise la BOUCLE donne l'arret et on l'incrémente

		//********************************************************************************************
		//on créé toutes les variables necessaires pour créer le html
		//********************************************************************************************


		let boutonDot = document.createElement("button");// crée une balise button
		boutonDot.classList.add("dot");// ajoute la class dot au boutonDot

		if (i === 0) {                  // si [i] est égal a 0 
			boutonDot.classList.add("dot_selected")// alors on la class devient devient dot_selected
		};

		sectionDots.appendChild(boutonDot);//ajoute boutonDot a la class html .dots ici sectionDots

	}

}

genererDots(slides)



