var userChoice = prompt("Do you choose rock, paper, scissors, lizard or spock?");
var computerChoice = Math.random();

if (computerChoice < 0.2) {
	computerChoice = "rock";
} else if (computerChoice <= 0.4) {
	computerChoice = "paper";
} else if (computerChoice <= 0.6) {
	computerChoice = "scissors"; 
} else if (computerChoice <= 0.8) {
	computerChoice = "lizard";
} else {
	computerChoice = "spock";
}
console.log("Computer chose: " + computerChoice);
console.log("You chose: " + userChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return ("The result is a tie!");
    } 
	// if choice1 is rock //
	else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return ("Rock crushes Scissors, You win!");
        } else if (choice2 === "lizard") {
			return ("Rock crushes Lizard, You win!");
		} else if (choice2 === "spock") {
			return ("Spock vaporizes Rock, Computer wins!");
		} else {
            return ("Paper covers Rock, Computer wins!");
        }
    } 
	// if choice1 is paper //
	else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return ("Paper covers Rock, You win!");
        } else if (choice2 === "spock") {
			return ("Paper disproves Spock, You win!");
		} else if (choic2 === "lizard") {
			return("Lizard eats Paper, Computer wins!");
		} else {
            return("Scissors cuts Paper, Computer wins!");
        }
	}
	// if chice1 is scissors //
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return("Scissors cuts Paper, You win!");
        } else if (choice2 === "lizard") {
			return("Scissors decapitates Lizard, You win!");
		} else if (choice2 === "spock") {
			return("Spock smashes Scissors, Computer wins!");
		} else {
            return("Rock crushes Scissors, Computer wins!");
        }
	}
	// if choice1 is lizard //
    else if (choice1 === "lizard") {
		if (choice2 === "spock") {
			return("Lizard poisons Spock, You win!");
		} else if (choice2 === "paper") {
			return("Lizard eats Paper, You win!");
		} else if (choice2 === "rock") {
			return("Rock crushes Lizard, Computer wins!");
		} else {
			return("Scissors decapitates Lizard, Computer wins!");
		}
	}
	// if chooice1 is spock //
	else if (choice1 === "spock"){
		if (choice2 === "scissors") {
			return("Spock smashes Scissors, You win!");
		} else if (choice2 === "rock") {
			return("Spock vaporizes Rock, You win!");
		} else if (choice2 === "lizard") {
			return("Lizard poisons Spock, Computer wins!");
		} else {
			return("Paper disproves Spock, Computer wins!");
		}
	} else {
		return ("I'm sorry, please type in either rock, paper, scissors, lizard or spock");
	}
};
compare(userChoice, computerChoice);