var bulletPosition = 4;

const spinChamber = () => {
    var chamberPosition = Math.floor((Math.random() * 6) + 1);
    console.log("primer chamberPosition", chamberPosition);
    
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    console.log("entro en fireGun");
    console.log('spinnerPosition: ', spinnerPosition);   
    if ( spinnerPosition == bulletPosition ){
        console.log('primer if');
        
        return ("You're dead!");
    } 
    else {
        console.log('segundo if');
        
        return ("Keep playing!")
    }
};
console.log('ultimo console.log: ', fireGun(spinChamber()));




