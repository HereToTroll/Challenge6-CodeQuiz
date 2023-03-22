let score = 0;
let questionId = 0;
let remainingTime = 60;

const finalScore = document.querySelector("#final-score");
const questions = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const endScreen = document.querySelector("#end-screen");
const startScreen = document.querySelector("#start-screen");
const feedback = document.querySelector("#feedback");
const startButton = document.querySelector("#start");
const sumbitButton = document.querySelector("#submit");
const time = document.querySelector("#time");
const initials = document.querySelector("#initials");
let timeInterval;


function startQuiz() {
    startScreen.className = "hide";
    questions.className = "";
    timer();
    showQuestion(questionId);
};

function timer() {
    // starting timer 
    timeInterval = setInterval(function() {
      if (remainingTime > 0) {
        time.textContent = remainingTime;
        remainingTime--;
      } else {
        // stop quiz if no time left
        stopQuiz();
      };
    }, 1000);
};

function checkAnswer(target) {
    if (questionId < questionsArray.length-1) {
     if (target.textContent == questionsArray[questionId].correct) {
        // if targeted option if correct add score
         score++;
         questionId++;
         showQuestion(questionId);
     } else {
         remainingTime -= 10;
         score--;
     }
    } else if (questionId = questionsArray.length-1) {
     if (target.textContent == questionsArray[questionId].correct) {
         score++;
         questionId++;
         stopQuiz()
     } else {
         remainingTime -= 10;
         score--;
         
     }
    }
 
 };

function stopQuiz() {
        // hide question when quiz finished
        questions.className = "hide";
        endScreen.className = "";
        finalScore.textContent = score;
        clearInterval(timeInterval);
};

function saveScores() {
    // save score to local storage
    let newScore = [{
        player: initials.value,
        score: score
    }];
    let savedScores = JSON.parse(localStorage.getItem("scores"));
    if (savedScores != null) {
        let joined = newScore.concat(savedScores);
        localStorage.setItem("scores", JSON.stringify(joined));
    } else {
        localStorage.setItem("scores", JSON.stringify(newScore));
    }

};





function showQuestion(index) {
    // clear text in tags before showing next question
    questionTitle.textContent = "";
    choices.textContent = "";
    questionTitle.textContent = questionsArray[index].question
    var ol = document.createElement("ol");
    choices.appendChild(ol);
    for (i=0; i<3; i++) {
        var option = document.createElement("li");
        var choice = document.createElement("button");
        choice.textContent = questionsArray[index].options[i];
        option.appendChild(choice);
        ol.appendChild(option);
   }
};

function restart() {
    // setting time, score and questionid to default values
   score = 0;
   questionId = 0;
   remainingTime = 60;
   // hiding end screen and removing text from the last question
   endScreen.className = "hide";
   startScreen.className = "start";
   time.textContent = "60";
   questionTitle.textContent = "";
   choices.textContent = "";
};

// Setting event listeners on every button
startButton.addEventListener("click", function(event) {
    startQuiz();
});

sumbitButton.addEventListener("click", function(event) {
    saveScores();
    restart();
});

choices.addEventListener("click", function(event) {
    target = event.target;
   if (target.tagName == "BUTTON") {
    checkAnswer(target);
   }
});