var bulletPosition = 4;

const spinChamber = () => {
    var chamberPosition = Math.floor((Math.random() * 6) + 1);
    console.log(chamberPosition);
    
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    if ( spinnerPosition == chamberPosition ){
        return ("You're dead!");
    } 
    else {
        return ("Keep playing!")
    }
};
console.log(fireGun(spinChamber()));
console.log(spinChamber());
console.log(bulletPosition);



