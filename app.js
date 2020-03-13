let choices = ['rock', 'paper', 'scissors']

let userChoice = ""
let compChoice = ""
let userScore = 0
let compScore = 0

var rock = document.getElementById('rock') // rock = 1
rock.addEventListener("click", function (){setChoice(0);});

var paper = document.getElementById('paper') // paper = 2
paper.addEventListener("click", function (){setChoice(1);}); 

var scissors = document.getElementById('scissors') // sciss = 3
scissors.addEventListener("click", function (){setChoice(2);});

function setChoice(num) {
userChoice = choices[num]
compChoice = choices[Math.round(Math.random() * 2)]
showDown(userChoice, compChoice)
console.log(`Your choice: ${userChoice} Computer choice: ${compChoice}`)
}

function showDown(userChoice, compChoice) {
  if (userChoice === compChoice){
    userTie()
    console.log("TIE")
  }
  else if(userChoice === 'rock' && compChoice === 'scissors'){
    userWin()
    console.log("WIN")
  }
  else if(userChoice === 'paper' && compChoice === 'rock'){
    userWin()
    console.log("WIN")
  }
  else if(userChoice === 'scissors' && compChoice === 'paper'){
    userWin()
    console.log("WIN")
  }
  else {
    userLose()
    console.log("LOSE")
  }
}
function userTie(){
  document.getElementById("score").innerHTML = 'YOU TIE!!!!'
}
function userWin(userScore, compScore){
  userScore += 1
  document.getElementById("score").innerHTML = 'YOU WIN!!!'
}
function userLose(userScore, compScore){
  compScore += 1
  document.getElementById("score").innerHTML = 'YOU LOSE!!!'
}
function showScores(userScore, compScore){
  document.getElementById("totals").innerHTML = `Your score: ${userScore} Computer score: ${compScore}`
}