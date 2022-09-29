const prompt = require('prompt-sync')({sigint: true});

let userArray1 = JSON.parse(prompt("Please create an array: "));


console.log(typeof userArray1[0] === "number" )
