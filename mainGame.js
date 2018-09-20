var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");

// var flashOne = new BasicCard("33rd president of the United States of America.", "Harry S. Truman");
// var flashTwo = new BasicCard("What city is UCLA located?", "Westwood");
// var flashThree = new BasicCard("Who killed John F. Kennedy?", "Lee Harvey Oswald");
// var flashFour = new BasicCard("Who killed Abraham Lincoln?", "John Wilkes Booth");
// var flashFive = new BasicCard("What is the highest court in the United States?", "Supreme Court");
// var flashSix = new BasicCard("Who signs bills to become laws?", "President");
// var flashSeven = new BasicCard("What ocean is in the west coast of the United States?", "Pacific Ocean");
// var flashEight = new BasicCard("Where is the Statue of Liberty?", "New York Harbor");
// var flashNine = new BasicCard("What is the supreme law of the land?", "The Constitution");
// var flashTen = new BasicCard("What is the economic system in the United States?", "Capitalist");


// FLASHCARD FRONT AND BACK
var questions = [
    new BasicCard("33rd president of the United States of America.", "Harry S. Truman"),
    new BasicCard("What city is UCLA located?", "Westwood"),
    new BasicCard("Who killed John F. Kennedy?", "Lee Harvey Oswald"),
    new BasicCard("Who killed Abraham Lincoln?", "John Wilkes Booth"),
    new BasicCard("What is the highest court in the United States?", "Supreme Court"),
    new BasicCard("Who signs bills to become laws?", "President"),
    new BasicCard("What ocean is in the west coast of the United States?", "Pacific Ocean"),
    new BasicCard("Where is the Statue of Liberty?", "New York Harbor"),
    new BasicCard("What is the supreme law of the land?", "The Constitution"),
    new BasicCard("What is the economic system in the United States?", "Capitalist")
]

//RECURSION FUNCTION
var i = 0;
var correct = 0;
var wrong = 0;

function game() {
    if (i < 10) {
        inquirer.prompt([
            {
                name: "one",
                message: questions[i].front,
                type: "input"
            }
// CHECK ANSWERS
        ]).then(function (data) {
            if (data.one.toLowerCase() === questions[i].back.toLowerCase()) {
                console.log("CORRECT!!");
                console.log("--------------");
                correct++;
            } else {
                console.log("WRONG!! Correct answer is " + questions[i].back);
                console.log("--------------");
                wrong++;
            }
            i++
            game();
        })
    }
    else{
        console.log("You got " + correct + " correct! & " + wrong + " wrong!");
        console.log("IT'S OVER!! PLEASE EXIT!!");
    }
}
// INITIAL QUESTION
game();

