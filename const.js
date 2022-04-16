// const
// use const to make a variable un-reassignable

let brand = "Amigoscode";
brand = {};
brand = 10;
brand = function() {
    return "Hello"
}

console.log(brand);

// above is bad prctice of reassigning a variable
// use const 

const brand1 = "Amigoscode";
const brand1Object = {};
brand1Object["brand"] = brand1;

console.log(brand1Object);

//but using this append properties into the object
// just not allowed to add a new value to brand1

// for everything you do in javascript start with const
// then if you need reassingment change it to let keyword