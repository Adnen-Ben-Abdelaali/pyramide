let nombreEtagesPyramide = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

//let nombreEtagesPyramide = 5;
let affichageLigne = "";
let espace = "";
let affichage = "#";
let nombreEspaces = nombreEtagesPyramide;
//console.log(affichage);

console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log(nombreEtagesPyramide);


if( (nombreEtagesPyramide >= 1) && (nombreEtagesPyramide <= 25) ) {

    console.log("Voici la pyramide :");
    for(let i = 0; i < nombreEtagesPyramide; i++) {
    

        for(var j = nombreEspaces - 1; j > 0; j--) {
        
            //console.log("j = " + j);
        
            espace += " "; 
            
        }
        affichageLigne = espace + affichage;

        //console.log("espace = " + espace);

        affichage += "##";
        
    
        console.log(affichageLigne);

        nombreEspaces -= 1;
        espace = "";
    }
}