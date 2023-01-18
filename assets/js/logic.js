const start = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
let choices = document.querySelector("#choices");
let choicesList = document.querySelector("#choices-list");
const questionTitle = document.querySelector("#question-title");
const endScreen = document.querySelector("#end-screen");
const submit = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");
const time = document.querySelector("#time");
let timer;
let btnAnswers;
let li;
let sec = 100;
let liOptions;


// * A start button that when clicked a timer starts and the first question appears.
 
//   * Questions contain buttons for each answer.
//   * 
//   * When answer is clicked, the next question appears
//   * 
//   * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

//   * When the game ends, it should display their score and give the user the ability to save their initials and their score
function clear () {
    choicesList.innerHTML = '';
}
function finish () {
    endScreen.classname ="show";
    questions.className ="hide";

}

function checkAnswer () {
        liOptions = document.getElementsByTagName('li');
        liOptions.addEventListener('click',function(event) {
            event.preventDefault;
            if (liOptions.getAttribute('value') == questionsArr[i].correct){
                // giving one point for eac h correct answer. Using == instead of 3 because correct answer is a string. Could parseIn
                score++;
            }
            else sec -= 15;
        } ) 
}

function showQuestions () {
    startScreen.className ="hide";
    questions.className ="show";
    // Just visualising data below
    // console.log(questionsArr[questionIndex]['quiz']); 
    // Will use this number to check HTML value for the right answer.
    let answerNumber = 1;
    questionTitle.textContent = questionsArr[questionIndex]['quiz'];
    for (item of questionsArr[questionIndex]['answers']){
        
        btnAnswers = document.createElement('button');
        li = document.createElement('li');
        choicesList.appendChild(li);
        li.appendChild(btnAnswers);     
        btnAnswers.textContent = item;
        li.setAttribute("value",answerNumber);
        answerNumber++;
    }
    
}
const countDown = function () {
    
    timer = setInterval(()=>{
        time.innerHTML = sec;
        --sec;
    },1000) // 1 second
    if (sec === 0) {
        clear();
        finish();
    }
}
start.addEventListener("click", function (){
    countDown();
    showQuestions();
    checkAnswer();
})