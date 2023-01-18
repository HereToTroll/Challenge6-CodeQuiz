

let questions = document.querySelector("#questions"); // Selecting div containiing question and answers.

let score = 0;
let questionIndex = 0;

// Array with quiz questions.
const questionsArr = [
    {
        quiz : "What language is used to change styles on the page?",
        answers : ["Java", "C", "CSS" , "HTML"],
        correct : 3,
    },
    {
        quiz : "What means CSS?",
        answers : [
            "Central Style Sheets", 
            "Cascading Style Sheets",
            "Cascading Simple Sheets" ,
            "Cole Can Code"
        ],
        correct : 2,
    },
    {
        quiz : "How to iterate through array?",
        answers : ["Using loop", "Using Conditional statement", "Can't iterate through array" , "Ask your coding friend"],
        correct : 1,
    },
]
