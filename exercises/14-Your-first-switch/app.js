function getColor(selection){
    selectionToLowerCase = selection.toLowerCase()
    console.log("dentro de la fn getColor", selectionToLowerCase)
	switch(selectionToLowerCase){
		case ('red'):
            console.log("entro y leo");
            return true;
            break;
		case "blue":
            return true;
            break;
		case "green":
            return true;
            break;
	    default:
            console.log("estoy en el default");
            
            return false;  //returns false because the user picked an unavailable color  
                       
	}
}

var colorname = window.prompt('What color do you want?');
console.log("llego despues del prompt", colorname);

var isAvailable = getColor(colorname);
console.log("llego despues de llamar a getColor", colorname, isAvailable);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
