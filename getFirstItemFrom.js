const prompt = require('prompt-sync')({sigint: true});

userArray = JSON.parse(prompt("Enter an array;  "))
let firstItem = userArray[0]

console.log(firstItem)
