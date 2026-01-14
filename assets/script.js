//*********************************************************
// Données*/
//****************************************************** */
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
// État*/
//****************************************************** */
let indexSlide = 0;
//*********************************************************
// DOM (élements de la page) */
//****************************************************** */
let btnFlecheGauche = document.querySelector(".arrow_left")
let btnFlecheDroite = document.querySelector(".arrow_right")
let sectionDots = document.querySelector(".dots");
let imageSlides = document.querySelector(".banner-img");
let descriptionSlide = document.querySelector("#banner p");
//*********************************************************
// Fonctions*/
//****************************************************** */
function genererDots(slides) {
	for (let i = 0; i < slides.length; i++) { //on initialise la BOUCLE donne l'arret et on l'incrémente

		let boutonDot = document.createElement("button");// crée une balise button
		boutonDot.classList.add("dot");// ajoute la class dot au boutonDot

		if (i === 0) {                  // si [i] est égal a 0 
			boutonDot.classList.add("dot_selected")// alors la class devient devient dot_selected
		};

		sectionDots.appendChild(boutonDot);//ajoute boutonDot a la class html .dots ici sectionDots

	}

}

function GenererSlider(slides, indexSlide) {

    imageSlides.src = `./assets/images/slideshow/${slides[indexSlide].image}`; // donne le chemin pour afficher la bonne image
	
	descriptionSlide.innerHTML = slides[indexSlide].tagLine; 

	const dotActuel = document.querySelector(".dot_selected");
	dotActuel.classList.remove("dot_selected");

	const listeDots = document.querySelectorAll(".dot");
	listeDots[indexSlide].classList.add("dot_selected");

}
//*********************************************************
// Événements*/
//****************************************************** */
btnFlecheGauche.addEventListener("click", () => {
	console.log("t'as bien cliqué sur la flèche gauche");
	indexSlide--;
	if (indexSlide < 0) {
		indexSlide = slides.length - 1};
	console.log(indexSlide);
	GenererSlider(slides, indexSlide);

});

btnFlecheDroite.addEventListener("click", () => {
	console.log("T'as bien cliqué sur la flèche de droite");
	indexSlide++;
	if (indexSlide >= slides.length) {
		indexSlide = 0;};
	console.log(indexSlide);
	GenererSlider(slides, indexSlide);

});
//*********************************************************
// Initialisation*/
//****************************************************** */
genererDots(slides)
GenererSlider(slides, indexSlide);


