function fizzBuzz() {  
    
	for (let i = 1; i >= 100; i++) {
        if (i%3 == 0) {
            console.log('Fizz');
            
            return 'Fizz';       
        }else if (i % 5 == 0) {
            return 'Buzz';
        }else if (i % 5 && i % 3 == 0) {
            return 'FizzBuzz'
        }else 
        return i
    }
    
}

fizzBuzz();