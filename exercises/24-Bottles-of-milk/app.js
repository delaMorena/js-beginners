let song = [];

function bottlesOfMilk() {
    for (let i = 99; i > 1; i--){
        song.push(i + ' bottles of milk on the wall,' + i + ' bottles of milk. Take one down and pass it around,' + (i-1)+ ' bottles of milk on the wall.')
    }
    for (let j = 1; j >= 0; j--){
        song.push(j + ' bottle of milk on the wall, ' + j + ' bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.')
    }
    return song.join('')
}

console.log(bottlesOfMilk());
// expected result: "12345"
