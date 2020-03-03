var startButton = document.querySelector("#start-btn") 
var quizDisplay= document.querySelector("#quiz-display") 
var quizResults = document.querySelector("#quiz-results") 

var questionSet = []
var score = 0 

startButton.addEventListener("click", quizTimer()) 

quizTimer () 