// Switch

var gender = "F";

if (gender == "M") {
    console.log("Male");
} else if (gender == "F") {
    console.log("Female");
} else {
    console.log("unknown");
}

//write the same thing with a switch

switch(gender) {
    case "M" :
        console.log("Male");
        break;
    case "F" :
        console.log("Female");
        break;
    default:
        console.log("unknown");
}