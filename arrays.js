//Arrays

var firstName = "Alex"; //only one string value

//arrays allow many string values within the variable
var names = [
    "Alex", 
    "Jamila", 
    "Joe", 
    "Aisha"
];

console.log(names); //display all names
console.log(names[0]); //display one value at index[] starting at 0
console.log("Index 1 - " + names[1]); //deiplay more neatly
console.log("Index 1 - " + names[2]);
console.log("Index 4 - " + names[4]); //will display 'undefined' as out of range of our array
console.log("size  = " + names.length);



