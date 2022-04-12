const movePC = ["rock", "paper","scissors"];


function computerPlay() {
   
   return movePC[Math.floor(Math.random() * movePC.length)]
};

function playerPlay() {
   let playerChoose = prompt("Choose rock, paper or scissors!");
   
    if (playerChoose) {
       playerChoose = playerChoose.toLowerCase();
       if(playerChoose === "rock" || playerChoose === "paper" || playerChoose === "scissors") {
          return playerChoose;
       } else { return "retry" } 
    } 
   return "retry";
};

function playRound() {

  let playerSelection = playerPlay();
  let computerSelection = computerPlay();
   if (playerSelection === computerSelection) {
      return "Tie"; }
   else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper"  || 
    playerSelection === "paper" && computerSelection == "rock") 
     {
   return "Player";
}   else{
   return "Computer";
}
};

function game () {
   let winnerPlayer = 0;
   let winnerPc = 0;
   for (let i = 0; i < 5; i++) {

      const roundPo = playRound();
      if (roundPo === "Player") { 
         winnerPlayer ++;
         console.log(winnerPlayer);
        
      } else if (roundPo === "Computer") {
         winnerPc ++;
         console.log(winnerPc);
         
      }
  
  }
  if (winnerPlayer > winnerPc) {
   console.log("You win the game!")
}  else if (winnerPc > winnerPlayer) { 
   console.log("Computer win the game")
} else { 
   console.log("Play another round!")
}  
}; 

game();


