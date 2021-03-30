let letItBe = "let it be, ";
let wordsOf = " words of wisdom, ";
let thereWilBe = "there will be an answer, ";
let text = []
function sing() {
    for (let i = 1; i <= 4; i++) {
        text.push(letItBe)
    }
    for (let j = 0; j < 1; j++) {
        text.push(wordsOf)
    }
    for (let k = 1; k <= 5; k++) {
        text.push(letItBe)
    }
    for (let i = 0; i < 1; i++) {
        text.push(thereWilBe + letItBe)
    }
    return text.join('')
}
//Your code above ^^^
console.log(sing());