
function getColor(colorNumber){
    //make sure parameter is a number and not a string by converting the value to int:
    
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
    }
    
}
let arrayColors = []
function getAllStudentColors(students){
	
	for (let i=1; i <= students; i ++) {
        randomNumber = Math.floor(Math.random() * 4) + 1;
        arrayColors.push(getColor(randomNumber))
    }
	return arrayColors;
}

//call the function below with the number of students in the class and print on the console
console.log(getAllStudentColors(10));