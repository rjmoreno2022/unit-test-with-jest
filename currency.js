// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function roundToTwo(num) {
    return Math.round(num * 100) / 100;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return roundToTwo(valueInYen);
}

const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromYenToPound = function (valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return roundToTwo(valueInPound);
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };

console.log(fromDollarToYen(20));
console.log(fromYenToPound(5000));