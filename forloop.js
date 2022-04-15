//Loops

//For loops

for (var i = 0; i<=10; i++) {
    console.log(i);
}
// will print nums 0 - 10

var names = [
    "Alex",
    "Jamila",
    "Joe",
    "Aisha"
];

console.log("fori:")
for (var i = 0; i<names.length; i++) { //not ideal for looping through arrays \/
    console.log(names[i]);
}
console.log();
console.log("forof:");
//use forof instead
for (const name of names) {
    console.log(name);
}
console.log();
console.log("foreach:");
//foreach
names.forEach(function(name) {
    console.log(name)
});
