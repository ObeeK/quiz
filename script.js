
var btnStart = document.querySelector("#btnstart")
var startPage = document.querySelector("#startingP")
var questionP = document.querySelector("#questionP")
var questionNum = -1
let score = 0;
let timer = 0;
// after each question - questionNum++

var questions = [
    {
        question: "question number 1",
        answer: ['0', "answer2", "answer3", "answer4"],
        correct: '0'
    },
    {
        question: "question number 2",
        answer: ['1', "answer6", "answer7", "answer8"],
        correct: '1'
    },
    {
        question: "question number 3",
        answer: ['2', "answer2", "answer3", "answer4"],
        correct: '2'
    },
    {
        question: "question number 4",
        answer: ['3', "answer2", "answer3", "answer4"],
        correct: '3'
    },

]

// This is the start of the quiz


window.addEventListener('DOMContentLoaded', (event) => {
    nextQuestion()
});



btnStart.addEventListener("click", function(event) {
    // hide start page
    startPage.classList.add("hidden");

    // show questions page
    questionP.classList.remove("hidden");

    // start timer

})

// Display next question (function)
function nextQuestion(event){
    if(event){
        if (event.target.innerHTML === questions[questionNum].correct) score++
    } 
    questionNum++
    
    document.getElementById('question').innerText = questions[questionNum].question
    let answerButtons = document.getElementById('answerContainer').children
    for(let i = 0; i < answerButtons.length; i++){
        if(answerButtons[i].tagName === 'BUTTON'){
            answerButtons[i].innerText = questions[questionNum].answer[i]
        }
    }
    
}


var quiz = function() {

}

// Make timer

setInterval(() => {
    
},1000)

// Function to check if answer is correct (display if wrong/right/subtract timer)

// Initials page (localStorage)

// highscore page (LocalStorage)