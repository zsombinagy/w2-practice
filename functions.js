function negativeOrPositive(number) {
    if (number < 0) {
        return "negative"
    } else if (number > 0) {
        return "positive"
    } else {
        return "zero"
    }

}

function logger(text) {
    console.log(text)
}

/* logger(negativeOrPositive(0)) */

function decideIfBeerIsGood(beer) {
    if (beer.price < 340 && beer.abv > 4.7) {
        return true
    } else {
        return false
    }
}

let dreher = { name: "Dreher", price: 349, abv: 5}
let soproni = {name: "Soproni", price: 329, abv: 4.5}
let borsodi = { name: "Borsodi", price: 339, abv: 4.8}

logger(decideIfBeerIsGood(dreher))
logger(decideIfBeerIsGood(soproni))
logger(decideIfBeerIsGood(borsodi))
