/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(0,9))