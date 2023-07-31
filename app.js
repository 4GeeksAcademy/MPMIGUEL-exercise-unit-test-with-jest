// import the function sum from the app.js file
const { sum } = require('./app.js');

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen =  (valueInDollar) => {
    
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
};

const fromYenToPound =  (valueInYen) => {
   
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
};


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound,fromYenToPound };







