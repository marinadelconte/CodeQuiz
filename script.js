
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


function renderQuestion(){
console.log(questions[0].question)
console.log(questions[0].answers[0])
console.log(questions[0].question)
console.log(questions[0].question)
console.log(questions[0].question)



}










timer = timer -= 10;
clearInterval(timerId) //how to clear timer