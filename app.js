let choices = ['rock', 'paper', 'scissors']
let userChoice = ""
let compChoice = ""
let userScore = 0
let compScore = 0

var rock = document.getElementById('rock') // rock = 1
    rock.addEventListener("click", setChoice(0))  
var paper = document.getElementById('paper') // paper = 2
    paper.addEventListener("click", setChoice(1)) 
var scissors = document.getElementById('scissors') // sciss = 3
    scissors.addEventListener("click", setChoice(2))

function setChoice(num) {
userChoice = choices[num]
compChoice = choices[Math.round(Math.random() * 3)]
showDown(userChoice, compChoice)
}

function showDown(userChoice, compChoice) {
  if (userChoice === compChoice){userTie}
  else if(userChoice === 1 && compChoice === 3){userWin}
  else if(userChoice === 2 && compChoice === 1){userWin}
  else if(userChoice === 3 && compChoice === 2){userWin}
  else {userLose}
}

function userTie{
  document.getElementById("score").innerHTML = 'YOU TIE!!!!'
}
function userWin{
  userScore += 1
  document.getElementById("score").innerHTML = 'YOU WIN!!!'
}
function userLose{
  compScore += 1
  document.getElementById("score").innerHTML = 'YOU LOSE!!!'
}

function showScores{
  document.getElementById("totals").innerHTML = `Your score: ${userScore} Computer score: ${compScore}`
}