var firstName = "Jamila";
var age = 21;
var isFemale = true;
var balance = 100.33;
var dob = new Date(2003, 2, 28);

var person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.33,
    dob: new Date(2003, 2, 28).toJSON(), //<allows you to use a date within an object
    address: {
        city: "London",
        postCode: "SW9"
    }
};

//accessing object

console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(person.address); //acess a nested object
console.log(person.address.city); //access specific property within nested object

console.log(Object.values(person)); //access all values for object(person)
console.log(Object.keys(person)); // access all keys for object(person)

console.log(JSON.stringify(person)); //makes all keys:values into a string from within the object








