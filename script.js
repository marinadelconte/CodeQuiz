let timerEl = document.querySelector(".time");
let mainEl = document.getElementById("main");
let startEl = document.querySelector("#start");
let questionEl = document.querySelector("#question");

let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let highScores = JSON.parse(localStorage.getItem("highScores")) || []
let timer = 90;
let timerId;
startEl.addEventListener("click", function () {
    timerId = setInterval(function () {
        timer -= 1;
        timerEl.textContent = ("Time remaining: " + timer);
        console.log(timer);
        renderQuestion();
        if (timer === 0) {
            clearInterval(timerId);
            alert("Time's up!");
        }
    }, 1000)

});



let questions = [{ question: "1. JavaScript and Java are the same coding language", answers: ["True", "False"], correctAnswer: "False" },
{ question: "2. What datatype do we use to return the values true or false?", answers: ["Boolean", "String", "Constant", "Null"], correctAnswer: "Boolean" },
{ question: "3. What would you use to store multiple variables under a single name?", answers: ["Train", "Array", "Index", "Copy"], correctAnswer: "Array" },
{ question: "4. What would we use to check the equality of two variables?", answers: ["%", "&&", "==="], correctAnswer: "===" },
{ question: "5. Which of the following is used to alter the length of an array?", answers: ["push()", "kick()", "jump()", "move()"], correctAnswer: "push()" },
]

let currentQuestion = 0;

function renderQuestion() {
    questionEl.textContent = questions[currentQuestion].question;
    console.log(questions[currentQuestion].question)
    console.log(questions[currentQuestion].question[1])
    console.log(questions[currentQuestion].question[2])
    console.log(questions[currentQuestion].question[3])
    console.log("Correct Answer:" + questions[currentQuestion].correctAnswer)

    for (let index = 0; index < questions[currentQuestion].answers.length; index++) {
        let button = document.createElement("button");
        button.textContent = questions[currentQuestion].answers[index]
        questionEl.append(button)
    }
}


function endGame() {
    clearInterval(timerId);
}

quizDiv.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        console.log("clicked")
        console.log("value:" + event.target.innerText);
        console.log("correct answer:" + questions[currentQuestion].correctAnswer);

        if (event.target.innerText != questions[currentQuestion].correctAnswer) {
            timer = timer - 10;
        }
        if (timer <= 0 || currentQuestion === questions.length - 1) {
            endGame();
        }
        currentQuestion++;
        renderQuestion();

    }

})


//time and initials stored in local storage

// timer = timer -= 10;
// clearInterval(timerId) //how to clear timer


//some button that saves //localStorage.setItem("highScores", JSON.stringify([{"initials": "dre", "score": 80}]))