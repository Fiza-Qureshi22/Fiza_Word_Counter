#!  /usr/bin/env node
//import the 'inquirer' module, which is a command line interface for node.js
import inquirer from "inquirer";
//declair a constant 'answer' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentance",
        type: "input",
        message: "Enter your sentance to count the word"
    }
]);
//trim yaani whitespaces ko remove karrrahy start to end (split)jitni bhii values hyn yaani 20 worsd ko ham aiikk array k andar leayn
const words = answers.sentance.trim().split("  ");
//print the array of words to the consol
console.log(words);
//print the word count of the sentance to the consol
console.log(`your sentance word count is ${words.length}`);
//trim whitespaces ko khatam karny k lia ham trim use arty hnnn or y start or last k words ko count karta hy
//split y letter or space sab ko count nhi karta hy aar y hataden to y sabko count karta hy 
