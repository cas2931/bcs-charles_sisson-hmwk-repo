var startButton = document.getElementById("#start-btn") 
var quizDisplay= document.getElementById("#quiz-display") 
var quizResults = document.getElementById("#quiz-results") 

var questionSet = [
    {
        question: "In relation to information technology, what does API stand for?",
            answers: {
                a: "academic performance index",
                b: "alphabet phonetique international",
                c: "application programming interface",
                d: "advance passenger information"
                    },
            correctAnswer: "c"
    },
    {
        question: "Which API would allow a user to provide their current whereabouts to a web application?",   
            answers: {
                a: "geocity",
                b: "geolocation", 
                c: "geospot",
                d: "geodestination"
                    },
            correctAnswer: "b"
    }, 
    {
        question: "",
            answers: {
                a:"",
                b:"",
                c:"", 
                d:""
                    },
            correctAnswer: ""
    },
    {
        question: "",
            answers: {
                a:"",
                b:"",
            c:"", 
            d:""
                },
        correctAnswer: ""
    },
    {
        question: "",
            answers: {
                a:"",
                b:"",
                c:"", 
                d:""
                    },
            correctAnswer: ""
    },
];
var score = 0 

startButton.addEventListener("click", quizTimer()) 

function quizTimer () 
function showResults ()  
function runQuiz ()
