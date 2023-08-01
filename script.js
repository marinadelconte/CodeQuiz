let timerEl = document.querySelector(".time");
let mainEl = document.getElementById("main");
let startEl = document.querySelector("#start");
let questionEl = document.querySelector("#question");
let quizDiv = document.querySelector("#quiz");
let highScores = JSON.parse(localStorage.getItem("highScores")) || []
let timer = 90;
let timerId;

let questions = [{ question: "1. JavaScript and Java are the same coding language", answers: ["True", "False"], correctAnswer: "False" },
    { question: "2. What datatype do we use to return the values true or false?", answers: ["Boolean", "String", "Constant", "Null"], correctAnswer: "Boolean" },
    { question: "3. What would you use to store multiple variables under a single name?", answers: ["Train", "Array", "Index", "Copy"], correctAnswer: "Array" },
    { question: "4. What would we use to check the equality of two variables?", answers: ["%", "&&", "==="], correctAnswer: "===" },
    { question: "5. Which of the following is used to alter the length of an array?", answers: ["push()", "kick()", "jump()", "move()"], correctAnswer: "push()" },
    ]

    let currentQuestion = 0;

    
function renderQuestion() {
    questionEl.textContent = questions[currentQuestion].question;
    console.log("Correct Answer:" + questions[currentQuestion].correctAnswer)

    for (let index = 0; index < questions[currentQuestion].answers.length; index++) {
        let button = document.createElement("button");
        button.textContent = questions[currentQuestion].answers[index]
        questionEl.append(button)
    }
}

function endGame() {
    clearInterval(timerId);
    prompt("Enter your initials to save your time.");
}

startEl.addEventListener("click", function () {
    timerId = setInterval(function () {
        timer--;
        timerEl.textContent = ("Time remaining: " + timer);
        console.log(timer);
        if (timer === 0) {
            clearInterval(timerId);
            alert("Time's up!");
        }
    }, 1000)

});

quizDiv.addEventListener("click", function (event) {
    if (event.target.matches("#start")) {
        let start = document.getElementById("start");
        start.style.display = "none";
        console.log(event.target)
        console.log("clicked")
        console.log("value:" + event.target.innerText);
        console.log("correct answer:" + questions[currentQuestion].correctAnswer);

        
     
        renderQuestion();

    }
    else if(event.target.matches("button")){
        currentQuestion++;
        if (event.target.innerText != questions[currentQuestion].correctAnswer) {
            timer = timer - 10;
        }
        if (timer <= 0 || currentQuestion === questions.length - 1) {
            endGame();
        }

        renderQuestion();

    }
//time and initials stored in local storage
//some button that saves //localStorage.setItem("highScores", JSON.stringify([{"initials": "dre", "score": 80}]))

})
