var ClozeCard = function(text, cloze){
    this.cloze = cloze;
    this.fullText =  text;
    this.partial = function(){
        if(this.fullText.includes(this.cloze)){
            return this.fullText.replace(this.cloze, "...")
        }
        else if(!this.fullText.includes(this.cloze)){
            console.log("ERROR!! WORD NOT FOUND!!")
        }
    }
}

module.exports = ClozeCard;

// var balls = new ClozeCard("Hello my name is", "Hello");

// console.log(balls.partial());


// new ClozeCard("Harry S. Truman is the 33rd president of the United States of America.", "Harry S. Truman")
// new ClozeCard("UCLA is located in Westwood.", "Westwood")
// new ClozeCard("Lee Harvey Oswald killed John F. Kennedy.", "Lee Harvey Oswald")
// new ClozeCard("John Wilkes Booth killed Abraham Lincoln.", "John Wilkes Booth")
// new ClozeCard("Supreme Court is the highest court in the United States.", "Supreme Court")
// new ClozeCard("The President signs bills to become laws.", "President")
// new ClozeCard("The pacific ocean is in the west coast of the United States.", "pacific ocean")
// new ClozeCard("The Statue of Liberty is located in New York Harbor.", "New York Harbor")
// new ClozeCard("The Constitution is the supreme law of the land.", "Constitution")
// new ClozeCard("Capitalist is the economic system in the United States.", "Capitalist")