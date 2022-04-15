//Break and continue

for (var i = 0; i<= 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}

for (var x = 0; x<= 10; x++) {
    if (x < 5) {
        continue;
    }
    console.log(x);
}

// can use break and continue with while loops aswell