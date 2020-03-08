// Home div 
var welcomeEl = document.querySelector("#welcome");
var startButton = document.querySelector("#startQuiz");

// Quiz div 
var quizEl = document.querySelector("#quiz");
var questionDisplay = document.querySelector("#question");
var answersDisplay = document.querySelector("#answers");

// Initials & score div  
var inputScoreEl = document.querySelector("#inputScore");
var initialsEl = document.querySelector("#initials");
var submit_initialsButton= document.querySelector("#submitInitials");
var userScoreEl = document.querySelector("#score");

// High scores div
var highScoresEl = document.querySelector("#highScores");
var scoresEl = document.querySelector("#scores");
var go_backButton = document.querySelector("#goBack");
var clear_scoresButton = document.querySelector("#clearScores");

var high_scores_viewButton = document.querySelector("#viewHScores");
var quizTimer = document.querySelector("#timer");
var score = 0;
var currentQuestion = 0;
var highScores = [];
var interval;
var timeGiven = 80;
var secondsElapsed = 0;

// Question Array
var questionSet = [
  {
    title: "In relation to information technology, what does API stand for?",
    choices: ["academic performance index",
                "alphabet phonetique international",
                "application programming interface",
                "advance passenger information"],
    answer: "application programming interface"
  },
  {
    title: "Which built-in method removes the last element from an array and returns that element?",
    choices: ["last()", "get()", "pop()", "None of the Above"],
    answer: "pop()"
  },
  {
    title: "Which API would allow a user to provide their current whereabouts to a web application?",
    choices: ["geocity", "geolocation", "geospot", "geodestination"],
    answer: "geolocation"
  },
  {
    title: "Which built-in method returns the calling string value converted to lower case?",
    choices: ["toLowerCase()", "toLower()", "changeCase(case)", "None of the Above"],
    answer: "toLowerCase()"
  }, 
  {
    title: "Which is a popular JavaScript library designed to simplify HTML DOM tree traversal & manipulation, event handling, CSS animation, and Ajax.",
    choices: ["JAsk", "JQuiz", "JQuery", "JInquire"] , 
    answer: "Jquery" 
  },
  {
    title: "Which of the following function of Number object returns the number's value?",
    choices: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
    answer: "valueOf()"
  }, 
  {
    title: "Which of the following isn't a method to schedule a JavaScript function call?",
    choices: ["setInterval", "setAwatchman","setTimeout","None of the above"],
    answer: "setAwatchman"
  },
  {
    title: "Which of the following function of Array object joins all elements of an array into a string?",
    choices: ["concat()", "join()", "pop()", "map()"],
    answer: "join()"
  }
];

// Start timer f(x)
function startTimer() {
    quizTimer.textContent = timeGiven;
    interval = setInterval(function () {
        secondsElapsed++;
        quizTimer.textContent = timeGiven - secondsElapsed;
        if (secondsElapsed >= timeGiven) {
            currentQuestion = questionSet.length;
            nextQuestion();
        }
    }, 1000);
}

// Stop timer f(x)
function stopTimer() {
    clearInterval(interval);
}

//Clears current question and calls for display of next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questionSet.length) {
        renderQuestion();
    } else {
        stopTimer();
        if ((timeGiven - secondsElapsed) > 0)
            score += (timeGiven - secondsElapsed);
        userScoreEl.textContent = score;
        hide(quizEl);
        show(inputScoreEl);
        quizTimer.textContent = 0;
    }
}

//checks answer based on current question and updates the user score
function checkAnswer(answer) {
    var answerIndex = answer.id - 1;

    if (questionSet[currentQuestion].answer == questionSet[currentQuestion].choices[answerIndex]) {
        score += 5;
        displayMessage("Correct!");
    }
    else {
        secondsElapsed += 10;
        displayMessage("Wrong...");
    }
}

//displays a message for 2 seconds
function displayMessage(m) {
    var timeStart = 0;
    var timeStop = 2;
    var messageHr = document.createElement("hr");
    var messageEl = document.createElement("div");
    messageEl.textContent = m;
    document.querySelector(".jumbotron").appendChild(messageHr);
    document.querySelector(".jumbotron").appendChild(messageEl);
    var messageInterval = setInterval(function () {
        timeStart++;
        if (timeStart >= timeStop) {
            messageHr.remove();
            messageEl.remove();
            clearInterval(messageInterval)
        }
    }, 1000);

}

//hides a div when needed
function hide(element) {
    element.style.display = "none";
}

//displays a div when needed
function show(element) {
    element.style.display = "block";
}

//reset f(x)
function reset() {
    score = 0;
    currentQuestion = 0;
    secondsElapsed = 0;
    quizTimer.textContent = 0;
}

//Renders current question
function renderQuestion() {
    questionDisplay.textContent = questionSet[currentQuestion].title;
    for (i = 0; i < answersDisplay.children.length; i++) {
        answersDisplay.children[i].children[0].textContent = (i + 1) + ": " + questionSet[currentQuestion].choices[i];
    }
}

function renderHighScores() {
    while (scoresEl.firstChild) {
        scoresEl.removeChild(scoresEl.firstChild);
    }
    show(highScoresEl);
    highScores = JSON.parse(localStorage.getItem("scores"));
    for (var i = 0; i < highScores.length; i++) {
        var scoreItem = document.createElement("div");
        scoreItem.className += "row mb-3 p-2";
        console.log(scoreItem)
        scoreItem.setAttribute("style", "background-color:PaleTurquoise;");
        scoreItem.textContent = (i + 1) + ". " + highScores[i].username + " - " + highScores[i].userScore;
        scoresEl.appendChild(scoreItem);
    }
}

//displays high scores
high_scores_viewButton.addEventListener("click", function () {
    hide(welcomeEl);
    hide(quizEl);
    hide(inputScoreEl);
    renderHighScores();
    stopTimer();
    reset();
});

//starts quiz from Welcome page
startButton.addEventListener("click", function () {
    hide(welcomeEl);
    startTimer();
    renderQuestion();
    show(quizEl);
});

//Calls to check answer selected and calls to next question if button is clicked
answersDisplay.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        checkAnswer(e.target);
        nextQuestion();
    }
});

//Creates a user score object to push to the local storage scores array calls to display high scores
//calls to render high scores
submit_initialsButton.addEventListener("click", function () {
    var initValue = initialsEl.value.trim();
    if (initValue) {
        var userScore = { username: initValue, userScore: score };
        initialsEl.value = '';
        if (localStorage.getItem("scores")) {
            highScores = JSON.parse(localStorage.getItem("scores"));
        }
        highScores.push(userScore)
        localStorage.setItem("scores", JSON.stringify(highScores));
        hide(inputScoreEl);
        renderHighScores();
        reset();
    }
});

//Goes back to Welcome page from High scores 
go_backButton.addEventListener("click", function () {
    hide(highScoresEl);
    show(welcomeEl);
});

//Clear saved scores from local storage
clear_scoresButton.addEventListener("click", function () {
    highScores = [];
    localStorage.setItem("scores", JSON.stringify(highScores));
    renderHighScores();
});