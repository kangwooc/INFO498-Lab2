"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var main = function () {
    game();
};
var game = function () {
    var random = Math.floor(Math.random() * 100 + 1);
    question(random);
};
var question = function (num) {
    rl.question("Please guess your number: ", function (input) {
        console.log("Answer: ", num);
        if (Number.parseFloat(input) > num) {
            console.log("The number is lower");
            question(num);
        }
        else if (Number.parseFloat(input) < num) {
            console.log("The number is higher");
            question(num);
        }
        else {
            console.log("You guessed it correctly!");
            rl.close();
        }
    });
};
main();
