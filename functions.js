//Functions

//a set of statements that perform a task or calculate a value
//may or may not retrurn a value

// var addition = 2 + 5;
// console.log(additon);
//can easily do this, but if i write a function i can pass any numbers


function addNumbers(num1, num2) {
    var addition = num1 + num2;
    //console.log(addition); return it and make variables instead
    return addition
}

var result1 = addNumbers(10,10); //expecting two arguments to be passed
var result2 = addNumbers(7, 3);

console.log(result1);
console.log(result2);

// --------------------------- Lesson 2
//built in functions

var person = {
    name: "Jamila"
}

console.log(Object.values(person)); // shows values from object
console.log(Object.keys(person)); //shows keys from object

console.log("Jamila".toUpperCase()); // changes the string to upper case using .function()
console.log("Jamila".indexOf("i")); //show index of i in string using .function()