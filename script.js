let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {

  let humanGuessDiff = Math.abs(humanGuess - secretTarget);
  let computerGuessDiff = Math.abs(computerGuess - secretTarget);

     if (humanGuessDiff < computerGuessDiff || humanGuessDiff < computerGuessDiff) {
       return true;
     } else {
       return false;
     }
  }

const updateScore = theWinner => theWinner === 'human' ? humanScore++ : computerScore++; 

const advanceRound = () => currentRoundNumber++; 



/*
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
/* function generateTarget() {
    let randomNumber = Math.floor(Math.random() * 9);
}

function compareGuesses(userGuess, computerGuess, secretTarget) {
   let userGuess = randomNumber;
   let computerGuess = randomNumber;
   let secretTarget = randomNumber; 
   return Math.abs(userGuess - secretTarget);
   return Math.abs(computerGuess - secretTarget);
}

// MY CODE

// Function to generate a random number for 'target' variable in game.js file

/* const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  } */
  
// const generateTarget = () => Math.floor(Math.random() * 10);


// Human guess is added into 'currentHumanGuess' variable in game.js file
// Computer guess - same function as 'generateTarget' variable in game.js file

// Function for 'humanIsWinner' variable in game.js file
// const compareGuesses = (humanGuess, computerGuess, secretTarget) => {

//      let humanGuessDiff = Math.abs(humanGuess - secretTarget);
//      let computerGuessDiff = Math.abs(computerGuess - secretTarget);

//      if (humanGuessDiff < computerGuessDiff || humanGuessDiff < computerGuessDiff) {
//        return true;
//      } else {
//        return false;
//      }
//   }

// This function is called through in game.js with 'winner' as it's parameter 
// If 'winner' is 'human' and therefore 'true', 1 point is added to humanScore. If 'computer' / 'false', 1 point is added to computerScore. 

// const updateScore = (theWinner) => {
//     if (theWinner === 'human') {
//       humanScore++;
//     } 
//     if (theWinner === 'computer') {
//       computerScore++;
//     } 
//   }

// const updateScore = theWinner => theWinner === 'human' ? humanScore++ : computerScore++; 
  
// This function is called through in the game.js file   
// const advanceRound = () => {
//     currentRoundNumber++;
//   }

// const advanceRound = () => currentRoundNumber++;  







/* const generateTarget = () =>{
    return Math.floor(Math.random()*10)
  }
  

const compareGuesses = (userGuess, computerGuess, targetGuess)=>{
    let user = Math.abs(userGuess - targetGuess);
    let computer = Math.abs(computerGuess - targetGuess);
  
    if(user < computer || user === computer){
      return true;
    }else{
      return false;
    }
  }

const updateScore = winner =>{
    if(winner === 'human'){
      humanScore+= 1;
    }
    if(winner === 'computer'){
      computerScore+= 1;
    }
  }
  
const advanceRound = () =>{
    currentRoundNumber+= 1;
  } */

