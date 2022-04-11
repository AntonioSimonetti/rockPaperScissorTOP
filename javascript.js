const movePC = ["Rock", "Paper","Scissors"];

function computerPlay() {

   return movePC[Math.floor(Math.random() * movePC.length)];
};

function playRound( ) {

  let playerSelection = playerPlay();
  let computerSelection = computerPlay();

   if(playerSelection == computerSelection){
      return "tie";
  } else if (
      (playerSelection === "rock" && computerSelection == "scissors") ||
      (playerSelection === "paper" && computerSelection == "rock") || 
      (playerSelection === "scissor" && computerSelection == "paper") 
      ) {
      return "Player";
  }   else{
      return "Computer";
  }
};

function playerPlay() {
   let playerChoose = prompt("Choose rock, paper or scissor!");
    if (playerChoose) {
       playerChoose = playerChoose.toLowerCase();
       if(playerChoose === "rock" || playerChoose === "paper" || playerChoose === "scissor") {
          return playerChoose;
       } else {
          return prompt("You should choose between rock, paper or scissor!");
       }
    }  
};


function game () {
   let winnerPlayer = 0;
   let winnerPc = 0;
   for (let i = 0; i < 5; i++) {
      if (playRound === "Player") { 
         winnerPlayer ++;
      } else if (playRound === "Computer") {
         winnerPc ++;
      }
   if (winnerPlayer === 5) {or
      return "Computer win the game!"
   }  else { 
      return "Play another round!"
   }

   }
}; 