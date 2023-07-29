//app.js file content
// console.log("Hello world")
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8 // british pound
};

const fromDollarToYen = (dollarAmount) => {
    return dollarAmount*(1/oneEuroIs['USD'])*oneEuroIs['JPY'];
}

const fromEuroToDollar = (euroAmount) =>{
    return euroAmount*oneEuroIs['USD'];
}

const fromYenToPound = (yenAmount) =>{
    return yenAmount*(1/oneEuroIs['JPY'])*oneEuroIs['GBP'];
}

// console.log(fromDollarToYen(1.2));
// console.log(fromEuroToDollar(3.5));
// console.log(fromYenToPound(2));
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};