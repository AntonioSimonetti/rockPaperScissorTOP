let player = ``;     // variable to store player choose from btnLogic
let playerW = 0;     // variable to store player points
let computerW = 0;   // variable to store computer points

document.addEventListener("click", () => {
const audio = document.getElementById("suono");
audio.volume = 0.025;
audio.play();

const inizia = document.getElementById("rest");
inizia.style.display = "block";

const bottone = document.getElementById("button");
bottone.style.display = "none";


});

/* The variable "player" is set to "rock" */
let buttonRock = document.getElementById("rock");
buttonRock.addEventListener("click", () => {
    let playerRock = `rock`;
    player = playerRock;
});
/* The variable "player" is set to "paper" */
let buttonPaper = document.getElementById("paper"); 
buttonPaper.addEventListener("click", () => {
    let playerPaper = `paper`;
    player = playerPaper;
});
/* The variable "player" is set to "scissors" */
let buttonScissors = document.getElementById("scissors"); // player click the button scissors
buttonScissors.addEventListener("click", () => {
    let playerScissors = `scissors`;
    player = playerScissors;
});
/* An array that stores the possible moves of the computer. */
const movePC = ["rock", "paper","scissors"];
/* Computer random choise is generated here */
function computerPlay() {
   return movePC[Math.floor(Math.random() * movePC.length)] 
};
/* The function playRound() is the function that plays the round and updates the points */
function playRound() {   
  
    



    let playerSelection = player;
    let computerSelection = computerPlay();
    /* This show the computer choise to the player */
    let Comp = document.createElement(`div`);
    Comp.classList.add(`computerChoice`);
    Comp.textContent = `Computer chose: `+ computerSelection;
    CC.appendChild(Comp);

     if (playerSelection === computerSelection) {
        return "Tie"; }
     else if (playerSelection === "rock" && computerSelection === "scissors" ||
      playerSelection === "scissors" && computerSelection === "paper"  || 
      playerSelection === "paper" && computerSelection == "rock") 
       {
      playerW++ 
      console.log(playerW + " P");
      const PP = document.getElementById(`PP`); // select the ID in the html
      PP.innerHTML = playerW;  // update the html ID with the player points
     } else {
      computerW++ 
      console.log(computerW + " C");
      const CP = document.getElementById(`CP`); // select the ID in the html
      CP.innerHTML = computerW;   // update the html ID with the computer points
  }    
 /* This function is called when the user clicks the "Play Again" button. It refreshes the page, which resets the game */
  function refreshPage(){ 
    /*window.location.reload();*/
    let playerWO = 0;
    playerW = playerWO;     
    let computerWO = 0;
    computerW = computerWO;   
    const PP = document.getElementById(`PP`); 
    PP.innerHTML = playerW;  
    const CP = document.getElementById(`CP`); 
    CP.innerHTML = computerW;   
    let winT = document.getElementById("winT");
    let CC = document.getElementById("CC");
    let farewell = document.getElementById("farewell");
    farewell.textContent ="";
    function removeAllChildNodes(parent){
      while(parent.firstChild){
        parent.removeChild(parent.firstChild);
      }
    };
   removeAllChildNodes(winT);
   removeAllChildNodes(CC);
    let roundStart = document.querySelectorAll(".btnLogic").forEach(item => {
      item.addEventListener(`click`,playRound)
  });
  };


  /* This function is called when the user clicks the button with the id of "farewell". 
     When the function is called, the HTML element with the id of "farewell" is changed to "Thanks for playing" */
  function farewell(){
    document.getElementById(`farewell`).innerHTML = `Thanks for playing!`;  
  };


  /* This is the code that is executed when the player wins the game. */
  if (playerW === 3){
    let winnerText = document.createElement(`div`);
    winnerText.classList.add(`winnerText`);
    winnerText.setAttribute("id", "WT");
    winnerText.textContent = `You win the game, do you want to play again?`;
    let playAgain = document.createElement(`button`);
    playAgain.setAttribute(`id`,`ref`);
    document.getElementById(`ref`)
    playAgain.onclick = refreshPage;
    playAgain.textContent = `YES`;
    let playAgainNo = document.createElement(`button`);
    playAgainNo.setAttribute(`id`,`rof`);
    playAgainNo.textContent = `NO`;
    playAgainNo.onclick = farewell;
    winT.appendChild(winnerText);
    winT.appendChild(playAgain);
    winT.appendChild(playAgainNo);
   /* This adds audio effects to the buttons created here. */
    let selectPa = document.getElementById("ref");
    let selectPaNo = document.getElementById("rof");
    selectPa.addEventListener('mouseover', function() {
      [].forEach.call(audios, function(audio) {
        audio.volume = 0.025;
        audio.play();
      });
      }, false);
      
      selectPa.addEventListener('mouseleave', function() {
        heartbeat.pause();
        heartbeat.currentTime = 0;
      }, false);

      selectPaNo.addEventListener('mouseover', function() {
        [].forEach.call(audios, function(audio) {
          audio.volume = 0.025;
          audio.play();
        });
        }, false);
        
        selectPaNo.addEventListener('mouseleave', function() {
          heartbeat.pause();
          heartbeat.currentTime = 0;
        }, false);

  /* This is a function that removes the event listener from all the buttons. */
    document.querySelectorAll(`.btnLogic`).forEach(item => {
    item.removeEventListener(`click`,playRound)
    });   
} /* This code is executed when the computer wins the game. */
else if (computerW === 3) {
    let loserText = document.createElement(`div`);
    loserText.classList.add(`winnerText`);
    loserText.setAttribute("id","LT");
    loserText.textContent = `You lose the game, do you want to play again?`;
    let playAgain = document.createElement(`button`);
    playAgain.setAttribute(`id`,`ref`);
    playAgain.textContent = `YES`;
    playAgain.onclick = refreshPage;
    let playAgainNo = document.createElement(`button`);
    playAgainNo.setAttribute(`id`,`rof`);
    playAgainNo.textContent = `NO`;
    playAgainNo.onclick = farewell;
    winT.appendChild(loserText);
    winT.appendChild(playAgain);
    winT.appendChild(playAgainNo);

    /* This adds audio effects to the buttons created here. */
    let selectPa = document.getElementById("ref");
    let selectPaNo = document.getElementById("rof");

    selectPa.addEventListener('mouseover', function() {
      [].forEach.call(audios, function(audio) {
        audio.volume = 0.025;
        audio.play();
      });
      }, false);
      
      selectPa.addEventListener('mouseleave', function() {
        heartbeat.pause();
        heartbeat.currentTime = 0;
      }, false);

      selectPaNo.addEventListener('mouseover', function() {
        [].forEach.call(audios, function(audio) {
          audio.volume = 0.025;
          audio.play();
        });
        }, false);
        
        selectPaNo.addEventListener('mouseleave', function() {
          heartbeat.pause();
          heartbeat.currentTime = 0;
        }, false);
   /* This is a function that removes the event listener from all the buttons. */
    document.querySelectorAll(`.btnLogic`).forEach(item => {
    item.removeEventListener(`click`,playRound)
    });
}; 
  };
/* A function that add event listener to all the buttons. */
let roundStart = document.querySelectorAll(".btnLogic").forEach(item => {
      item.addEventListener(`click`,playRound)
  });


  
var playBtn = document.getElementById('rock'),
    resetBtn = document.getElementById('paper'),
    scisBtn = document.getElementById("scissors"),
    hearbeat = document.getElementById('heartbeat')
	  audios = document.querySelectorAll('.suono');

playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  audio.volume = 0.025;
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);

resetBtn.addEventListener('mouseover', function() {
  [].forEach.call(audios, function(audio) {
    audio.volume = 0.025;
    audio.play();
  });
  }, false);

resetBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);

scisBtn.addEventListener('mouseover', function() {
  [].forEach.call(audios, function(audio) {
    audio.volume = 0.025;
    audio.play();
  });
  }, false);

scisBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);
  

