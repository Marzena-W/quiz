var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var questionTitleH2 = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var questionsDiv = document.querySelector("#questions");
var buttons = document.getElementsByTagName("button"); 
var endScreenEl = document.querySelector("#end-screen");
var questionIndex = 0

// function to start the game
startBtn.addEventListener("click", function () {
    document.getElementById("start-screen").style.display = 'none';
    countdown();
    // to show questions and answers
    questionsDiv.classList.remove('hide');
    showQuestion();
});



// function to start timer 90 sec
function countdown() {
    var secondsLeft = 5;
    var timerCount = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        // when timer is 0 or below 0, it's end of the game
        if (secondsLeft === 0 || secondsLeft < 0) {
            clearInterval(timerCount);
            questionsDiv.style.display = 'none';
            endScreenEl.classList.remove('hide');
            scorePage();
        };
    }, 1000);
};


// function to show a questions
function showQuestion() {
    questionTitleH2.textContent = quizQuestions[questionIndex].question;
    choices();
};

// function to show answers
function choices() {
    choicesDiv.textContent = ""
    for (var j = 0; j < quizQuestions[questionIndex].answers.length; j++) {
        var button = document.createElement("button");
        button.textContent = quizQuestions[questionIndex].answers[j];
        choicesDiv.appendChild(button);
    }
    var answerMessage = document.createElement("p");
    answerMessage.setAttribute("id", "message");
    choicesDiv.appendChild(answerMessage);
    checkAnswer();
};

// function to check answers
function checkAnswer() {
    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        var correctAnswerIndex = quizQuestions[questionIndex].correctAnswerIndex;

        buttons[i].addEventListener("click", function () {
            var answer = this.textContent
            if (answer === correctAnswerIndex) {
                document.querySelector("#message").textContent = "correct";
            } else {
                document.querySelector("#message").textContent = "wrong";
            };
            questionIndex++;
            // delay to show answer before showing next question
            setTimeout(showQuestion, 500);
        });
    };
};

// final score page
function scorePage() {
console.log("this will be score page");
};
 // show final score
    // add initials
    // submit to local storage





// function to deduct 15sec if answer is wrong

// high scores page
    // shows all scores saved to local storage
    // go back function
    // clear score function



// go back function
function goBack() {
    startBtn.addEventListener("click", function () {
        document.getElementById("start-screen").style.display = 'none';
        countdown();
        // to show questions and answers
        questionsDiv.classList.remove('hide');
        showQuestion();
    });
    console.log("working?")
};

// clear score function
function clearScores() {
    console.log("to clear score page");
};