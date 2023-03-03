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
      divRound.textContent = "It was a tie!  No one wins.";
      return 0; //representing a Tie
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                playerSelection === "Scissors" && computerSelection === "Paper" ||
                playerSelection === "Paper" && computerSelection === "Rock")
      {
         divRound.textContent = playerSelection + " beats " + computerSelection + ". Player wins!";
         return 1;} //representing PlayerVictory}
      else {
         divRound.textContent = playerSelection + " does not beat " + computerSelection + ". Computer wins!";
         return 2;} //representing ComputerVictory}
    }

//function game(){
//let scorePlayer = 0;
//let scoreComputer = 0;
//
//for (let i=1; i<6; i++){  //i starting at one to act as round counter in output
//    let formattedPlayerSelection = "default"
//    let compChoice = getComputerChoice();
//
//       while(true) {
//       //This while loop uses Regex to check for specific values of player input
//         //playerPrompt = prompt("Please type Rock, Scissors, or Paper.");
//         if (playerPrompt.match (/^(rock|paper|scissors)$/i))
//            {
//            formattedPlayerSelection = formatPlayerInput(playerPrompt);
//            break;
//            }
//         else {alert ("Please enter a valid selection!")}
//       }
 function score (roundOutcome) {
    switch (roundOutcome){
        case 0:// removed tie condition for each point to simplify win
         // scoreComputer++;
         // scorePlayer++;
          break;
        case 1:
          scorePlayer++;
          break;
        case 2:
          scoreComputer++;
          break;
        }

 }
 //   console.log("Round " + i + " results:  Computer: " + scoreComputer + "; Player: " + scorePlayer);
 //   }

function checkGameOver(adam, hal) {
  if(adam == '5' || hal == '5') {
    (adam == 5?
            divHumanScore.textContent = "Human wins it all!"
          : divCompScore.textContent = "Computer wins it all!"
     )
     playerButton.forEach((button) => {button.style.display = "none"});
  }
return;
}

 //   if (scoreComputer == scorePlayer)
 //       {console.log ("Best of five was a tie!");}
 //   else if (scoreComputer > scorePlayer)
 //       {console.log ("Computer wins best of five!");}
 //   else
 //       {console.log ("Player wins best of five!");}
 //
 //   }

//game()
let scoreComputer = 0
let scorePlayer = 0
const playerButton = document.querySelectorAll('button');
const divHumanScore = document.querySelector('#Player');
const divCompScore = document.querySelector('#Computer');
const divRound = document.querySelector('#Round');



playerButton.forEach((button) => {
    button.addEventListener('click',() => {
        score((playRound(button.id, getComputerChoice())))
        divHumanScore.textContent = "Human score is " + scorePlayer;     
        divCompScore.textContent = "Computer score is " + scoreComputer;
        checkGameOver(scorePlayer,scoreComputer) });
    });

