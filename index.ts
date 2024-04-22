#!  /usr/bin/env node


import inquirer from 'inquirer'

// declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answer: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        massage: "Enter your sentence to count the word: "

    }
]) 

const words = answer.sentence.trim().split(" ")

console.log(words);

console.log(`Your sentence word count is ${words.length}`);