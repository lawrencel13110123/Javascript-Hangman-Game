alert("Welcome to the Avengers! The Hangman Darklord has captured your favorite heroes. You need to decipher your heroes' favorite beverage to save them. Are you up for the challenge?")

var wordBank = ["coke", "whiskey", "cranberry juice", "vodka", "sprite", "milk", "tea", "coffee", "coconut water", "tequilla", "wine"]; 
var wins = 0; 
var facts = ["Hulk was originally grey when he was introduced, but became green to compensate for poor color separations used to print comics in the '60s.", 
"Marvel had a rule in the mid-'70s that Wolverine did not have arm hair while in costume, but could have arm hair when he was in regular clothing.", "Marvel Comics owned the rights to the word zombie from 1975 through 1996, when they realized it was impossible to enforce the trademark.","Stan Lee put a hyphen in Spider-Man's name so it would look different from Superman in print.","Wolverine was originally intended to be a genetically mutated wolverine rather than a human mutant. Stan Lee himself vetoed the idea.", "Bill Sarnoff, the head of DC Comics' parent company Warner Communications, approached Marvel Comics editor-in-chief Jim Shooter in 1984 about licensing the publishing rights to the entire DC Universe.","Martin Goodman tried to talk Stan Lee and Steve Ditko out of introducing Spider-Man because he insisted that kids hate spiders."]
var imgSrc = ["assets/images/hero1.png", "assets/images/hero2.png", "assets/images/hero3.png", "assets/images/hero4.png","assets/images/hero5.png","assets/images/hero6.png"]

function reset() {
	currentWord = wordBank [Math.floor(Math.random() * wordBank.length)]; 
		console.log(currentWord);
		//currentWord = wordBank[index #]
	currentFacts = facts [Math.floor(Math.random() * facts.length)];
		console.log(currentFacts); 
	currentImg = imgSrc [Math.floor(Math.random() * imgSrc.length)];
		console.log(currentImg); 
	currentWordCharacters = currentWord.split(""); 
		console.log(currentWordCharacters);
	wordLength = currentWord.length; 
		console.log(wordLength);
	blankSpaces = []; 
	guessesRemaining = 10; 
	usedLetters = [];
		console.log(usedLetters);

	for (var i = 0 ; i < wordLength; i++) {
		if (currentWord.charAt(i) === " ") {
			blankSpaces.push(" ");
		}
		else {
			blankSpaces.push("_ "); 
		}
	}
			console.log(blankSpaces);
		tabs = blankSpaces.join(""); 
			console.log(tabs); 



	document.getElementById("guesses").innerHTML = "Number of Guesses Remaining: " + guessesRemaining; 
	document.getElementById("letters").innerHTML = usedLetters; 
	document.getElementById("word").innerHTML = tabs; 
	document.getElementById("facts").innerHTML = "Marvel Interesting Facts: " + currentFacts;
	document.getElementById("canvas").innerHTML = "<img src=" + currentImg + ">"

}

reset()


document.onkeyup = function(event) {

	var userKeyPress = event.key; 
		console.log(userKeyPress)

	if (currentWord.includes(userKeyPress)) { 
		for (var i = 0 ; i < wordLength; i++) {
			if (userKeyPress === currentWordCharacters[i]) {
				blankSpaces.fill(userKeyPress, i, i+1) 
			}

			tabs = blankSpaces.join("")
			document.getElementById("word").innerHTML = tabs; 

			if (currentWord === tabs) {
					alert("You're a True Hero! " + "Correct Answer: " + currentWord);
					wins += 1; 
					reset(); 
			}			
		}
	}else if (usedLetters.indexOf(userKeyPress) < 0) {
			guessesRemaining -= 1;
			usedLetters.push(userKeyPress);
	}


	if (guessesRemaining === 0) {
		alert("You Fail Like DC Heroes! " + "Correct Answer: " + currentWord); 
		reset(); 
	}


document.getElementById("guesses").innerHTML = "Number of Guesses Remaining: " + guessesRemaining; 
document.getElementById("letters").innerHTML = usedLetters; 
document.getElementById("wins").innerHTML = "Wins: " + wins; 

}

