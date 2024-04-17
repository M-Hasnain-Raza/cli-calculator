#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first num", type: "number", name: "firstNumber" },
  { message: "Enter your second num", type: "number", name: "secondNumber" },
  {
    message: "Select operator you want",
    type: "list",
    name: "operator",
    choices: ["Add", "Sub", "Multiply", "Divide"],
  },
]);

if (answer.operator === "Add") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Sub") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiply") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Divide") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please entered valid value");
}
