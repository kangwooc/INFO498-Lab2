import * as readline from 'readline';
// This is a random number game generator.
// When a user put a number between 1 and 100,
// it would show the result of the game which are higher, lower or correct. 

// create the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// access to the function called game

// looks redundent function
let main: () => void = () => {
    game()
}

// create the answer of the game and 
// access to the question function
let game: () => void = () => {
    // create the answer between 1 and 100
    let random: number = Math.floor(Math.random() * 100 + 1);
    question(random)

    
}
// read inputs from user and match with the answer
// if it's correct, close the program
// otherwise, keep asking a question with hints

// when a user types the string which is not number, returns answer
// should set conditions
// should comment out the answer
let question: (number: number) => void = (num: number) => {
    rl.question("Please guess your number: ", (input: string) => {
        console.log("Answer: ", num)
        if (Number.parseFloat(input) > num) {
            console.log("The number is lower")
            question(num)
        } else if (Number.parseFloat(input) < num) {
            console.log("The number is higher")
            question(num)
        }
        else {
            console.log("You guessed it correctly!")
            rl.close();
        }

    })
}


// execute the main function
main()