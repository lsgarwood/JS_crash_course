// Hoisting

// using var for variable is bad practice

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("value of i outside loop" + i);

// will search for the variable ionsode of the loop and use it outside which is problematic

//Use let instead..
// Let

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("value of i outside loop" + i);