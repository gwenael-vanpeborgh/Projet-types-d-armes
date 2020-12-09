/**
 * Fonction qui initialise un tableau associatif et qui crée un tableau au lancement de la page 
 * @param {string} armes - Types d'armes sélectionné
 * @param {string} section2 - Initialisation d'un tableau dans la page
 **/
let armes;
let date;
function initialiserPage(){
  armes = {};
  let section2 = document.getElementsByTagName('section')[1];
  section2.innerHTML="<table ><thead><th>Nom</th><th>Armes sélectionnée et Date de commande</th></thead><tbody id='armes'></tbody></table>";
  
}

function genererTable(){
    var message=" ";
	
    for( i in armes){
     message +="<tr><td>" + i + "</td><td>" +  armes[i] + laDate + "</td></tr>" 
	};
    document.getElementById("armes").innerHTML = message;
}
	
	

function ajouterArmes(formulaire){
   let valeur = formulaire.nom.value
   date = new Date()
   armes[valeur]= formulaire.armes.value
   laDate = date.toLocaleString('fr-BE')
	genererTable()

	return false
}