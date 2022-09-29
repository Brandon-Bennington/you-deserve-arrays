const prompt = require('prompt-sync')({sigint: true});

//Write a program, getLastItemFrom.js that prompts the user for an array, then logs out the last item from that array

let str = userArray = JSON.parse(prompt("Enter an array;  "))

let lastItem = str[str.length -1]

console.log(lastItem)

