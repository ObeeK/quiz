
var btnStart = document.querySelector("#btnstart")
var startPage = document.querySelector("#startingP")
var questionP = document.querySelector("#questionP")
var questionNum = -1
let score = 0;
let timer = 0;
let ticking = true
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



btnStart.addEventListener("click", function (event) {
    // hide start page
    startPage.classList.add("hidden");

    // show questions page
    questionP.classList.remove("hidden");

    // start timer
    

})

// initButton.addEventListener("click", function (event) {
//     questionP.classList.add("hidden");
//     initials.classList.remove("hidden");
// }),

// Display next question (function)
function nextQuestion(event) {
    if (event && event.target.innerText === questions[questionNum].correct) {
        score++
        document.getElementById('result').innerText = 'Correct!'
    } else if (event) {
        document.getElementById('result').innerText = 'Wrong!'
        timer -= 5;
        document.getElementById('timer').innerText = `timer: ${timer}`
    }

    console.log(score)
    questionNum++

    if (questionNum >= questions.length) {
        ticking = false
        document.getElementById('questionP').classList.add('hidden');
        document.getElementById('initials').classList.remove('hidden');
        hiScores();
        
    }

    document.getElementById('question').innerText = questions[questionNum].question
    let answerButtons = document.getElementById('answerContainer').children
    for (let i = 0; i < answerButtons.length; i++) {
        if (answerButtons[i].tagName === 'BUTTON') {
            answerButtons[i].innerText = questions[questionNum].answer[i]
        } else {
            return;
        }
    } 

}


var quiz = function () {

}

// Make timer
function timerFunction() {
    if (ticking) timer--
    document.getElementById('timer').innerText = `timer: ${timer}`

    if (timer <= 0) {
        ticking = false;
        alert('You lose!')
        document.getElementById('questionP').classList.add('hidden')
        document.getElementById('initials').classList.remove('hidden')
    }

    if (ticking) {
        setTimeout(timerFunction, 1000)
    }
}



function startQuiz() {
    timer = 10
    document.getElementById('timer').innerText = `timer: ${timer}`
    setTimeout(timerFunction, 1000)
}

// Function to check if answer is correct (display if wrong/right/subtract timer)

// Initials page (localStorage)
function hiScores(initials){
    let hiscores = localStorage.getItem('hiscores')
    let addHiscore = `${initials}: ${timer}|` //split by |
    if(hiscores){
        localStorage.setItem('hiscores', `${hiscores} ${addHiscore}`)
        console.log(hiscores)
    }else{
        localStorage.setItem('hiscores', addHiscore)
        console.log(hiscores)
    }
}


var initialSub = function() {
    // Save initials
    var button1 = document.getElementById("initButton")
    button1.addEventListener('click', function(event) {
        event.preventDefault();
        var initials = document.getElementById("initInput").value;
        hiScores(initials);
        
        console.log();
    })
    //Go to hiScores page
}

// highscore page (LocalStorage)