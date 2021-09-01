
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
    if(event && event.target.innerText === questions[questionNum].correct){
        score++
        document.getElementById('result').innerText = 'Correct!'
    }else if(event){
        document.getElementById('result').innerText = 'Wrong!'
        timer -= 5;
        document.getElementById('timer').innerText = `timer: ${timer}`
    }

    console.log(score)
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

function startQuiz(){
    timer = 75
    document.getElementById('timer').innerText = `timer: ${timer}`
   let timerInterval =  setInterval(() => {
        timer--
        document.getElementById('timer').innerText = `timer: ${timer}`

        if(timer <= 0){
            clearInterval(timerInterval)
            alert('You lose!')
            document.getElementById('questionP').classList.add('hidden')
            document.getElementById('initials').classList.remove('hidden')
        }
    },1000)
}

// Function to check if answer is correct (display if wrong/right/subtract timer)

// Initials page (localStorage)

// highscore page (LocalStorage)