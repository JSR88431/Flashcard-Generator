var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");


// FLASHCARD CONSTRUCTOR FUNCTIONS
var cards = [
new ClozeCard("Harry S. Truman is the 33rd president of the United States of America.", "Harry S. Truman"),
new ClozeCard("UCLA is located in Westwood.", "Westwood"),
new ClozeCard("Lee Harvey Oswald killed John F. Kennedy.", "Lee Harvey Oswald"),
new ClozeCard("John Wilkes Booth killed Abraham Lincoln.", "John Wilkes Booth"),
new ClozeCard("Supreme Court is the highest court in the United States.", "Supreme Court"),
new ClozeCard("The President signs bills to become laws.", "President"),
new ClozeCard("The pacific ocean is in the west coast of the United States.", "pacific ocean"),
new ClozeCard("The Statue of Liberty is located in New York Harbor.", "New York Harbor"),
new ClozeCard("The Constitution is the supreme law of the land.", "Constitution"),
new ClozeCard("Capitalist is the economic system in the United States.", "Capitalist")
]
// RECURSION FUNCTION
var x = 0;
var correct = 0;
var wrong = 0;


function gameTwo() {
    if (x < 10) {
        inquirer.prompt([
            {
                name: "one",
                message: cards[x].partial(),
                type: "input"
            }
// CHECK ANSWERS
        ]).then(function (data) {
            if (data.one.toLowerCase() === cards[x].cloze.toLowerCase()) {
                console.log("CORRECT!!");
                console.log("--------------");
                correct++;
            } else {
                console.log("WRONG!! Correct answer is " + cards[x].cloze);
                console.log("--------------");
                wrong++;
            }
            x++
            gameTwo();
        })
    }
    else{
        console.log("You got " + correct + " correct! & " + wrong + " wrong!");
        console.log("IT'S OVER!! PLEASE EXIT!!");
    }
}

gameTwo();