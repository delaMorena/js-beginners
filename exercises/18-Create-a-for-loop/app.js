/* This exercise should be moved before 17-Your first loop? */

// Declare and write your function here:
function standardsMaker(quote) {
    for(let i = 1; i <= 300; i++)
	{
		console.log(i + quote);
	}
	
	
}
let frase = " Yo preguntaré si estoy atascado"
// Calling the function:
standardsMaker(frase);