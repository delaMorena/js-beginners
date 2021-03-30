function fizzBuzz() {  
    
	for (let i = 1; i <= 100; i++) {
        if (i%3 == 0) {
            console.log('Fizz');      
        }else if (i % 5 == 0) {
            console.log("Buzz");
        }else if (i % 5 && i % 3 == 0) {
            console.log("FizzBuzz");
        }else 
        console.log(i);
    }
    
}

fizzBuzz();
// for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)