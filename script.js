let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let highScores = JSON.parse(localStorage.getItem("highScores")) || []


let timer = 90;

let timerId = setInterval(function(){
    timer -= 1;
    console.log(timer);

}, 1000)

let questions = [{question: "enter question here", answers: ["enter answers"], correctAnswer: "enter"},
                {question: "enter question here", answers: ["enter answers"], correctAnswer: "enter"},
                {question: "enter question here", answers: ["enter answers"], correctAnswer: "enter"},
                {question: "enter question here", answers: ["enter answers"], correctAnswer: "enter"},
                {question: "enter question here", answers: ["enter answers"], correctAnswer: "enter"},
                {question: "enter question here", answers: ["enter answers"], correctAnswer: "enter"},
]

let currentQuestion = 0;

renderQuestion();

function renderQuestion(){
console.log(questions[currentQuestion].question)
questionButton1.textContent = questions[currentQuestion].answers[0];
console.log(questions[currentQuestion].question[1])
console.log(questions[currentQuestion].question[2])
console.log(questions[currentQuestion].question[3])
console.log("Correct Answer:" + questions[currentQuestion].correctAnswer)



}




quizDiv.addEventListener("click", function(event){
    if(event.target.matches("button")){
        console.log("clicked")
        console.log("value:" + event.target.innerText);
        console.log("correct answer:" + questions[currentQuestion].correctAnswer);
        renderQuestion();
        currentQuestion++
    }

})



//time and initials stored in local storage

timer = timer -= 10;
clearInterval(timerId) //how to clear timer






//some button that saves //localStorage.setItem("highScores", JSON.stringify([{"initials": "dre", "score": 80}]))