
//Write a program getIndex3.js that prompts the user for an array then logs out the item at the 3rd index. If there are not four items (i.e., if there is no index 3), it logs out the value at the last index

const prompt = require('prompt-sync')({sigint: true});


let str = userArray = JSON.parse(prompt("Enter an array;  "))

console.log(userArray)

if(userArray.length >= 3){
    console.log(userArray[3]);
 } else{
        console.log(userArray[userArray.length-1])

}
