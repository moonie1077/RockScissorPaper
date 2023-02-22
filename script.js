function getComputerChoice() {
    let rdmCompNumber = Math.floor(Math.random() * 3)
    //Expected output of 0, 1, or 2 for use in the assign switch

    switch (rdmCompNumber){
     case 0:
        return "Rock";
        break;
     case 1:
        return "Paper";
        break;
     case 2:
        return "Scissors";
        break;
        }
}
function formatPlayerInput (input) {
    let firstLetter = input.slice(0,1);
    let remainingLetters = input.slice(1);
    return firstLetter.toUpperCase() + remainingLetters.toLowerCase();
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return 0; //representing a Tie
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                playerSelection === "Scissors" && computerSelection === "Paper" ||
                playerSelection === "Paper" && computerSelection === "Rock")
      {return 1;} //representing PlayerVictory}
      else {return 2;} //representing ComputerVictory}

    }

function game(){
let scorePlayer = 0;
let scoreComputer = 0;

for (let i=1; i<6; i++){  //i starting at one to act as round counter in output
    let formattedPlayerSelection = "default"
    let compChoice = getComputerChoice();

        while(true) {
        //This while loop uses Regex to check for specific values of player input
          playerPrompt = prompt("Please type Rock, Scissors, or Paper.");
          if (playerPrompt.match (/^(rock|paper|scissors)$/i))
             {
             formattedPlayerSelection = formatPlayerInput(playerPrompt);
             break;
             }
          else {alert ("Please enter a valid selection!")}
        }
        
    switch (playRound(formattedPlayerSelection,compChoice)){
        case 0:
          scoreComputer++;
          scorePlayer++;
          console.log("It was a tie!  Point for each.");
          break;
        case 1:
          scorePlayer++;
          console.log (formattedPlayerSelection + " beats " + compChoice + ". Player wins!");
          break;
        case 2:
          scoreComputer++;
          console.log (formattedPlayerSelection + " does not beat " + compChoice + ". Computer wins!");
          break;
        }
    console.log("Round " + i + " results:  Computer: " + scoreComputer + "; Player: " + scorePlayer);
    }

    if (scoreComputer == scorePlayer)
        {console.log ("Best of five was a tie!");}
    else if (scoreComputer > scorePlayer)
        {console.log ("Computer wins best of five!");}
    else
        {console.log ("Player wins best of five!");}

    }

game()