import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let main: () => void = () => {
    game()
}

let game: () => void = () => {

    let random: number = Math.floor(Math.random() * 100 + 1);
    question(random)


}

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



main()