// Ternary If Statements

var number = 2;

if (number % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}

//perform same thing with one line
// not ideal for more than one argument
var result = number % 2 == 0 ? "even" : "odd";
console.log(result);