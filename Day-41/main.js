"use strict";
//Day# 41.
//Question #121.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; //skip the rest of the loop when i is 5
    }
    console.log(i); //output the current value
}
//Question #122.
//while loop.
let i = 10;
while (i > 0) {
    if (i === 5) {
        break;
    }
    console.log(i);
    i--;
}
//Question# 123.
let str = "Hello World";
let vowels = "aeiouAEIOU";
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        console.log(`First vowel '${str[i]}' found at index ${i}`);
        break;
    }
    // first vowel "e " found.
}
