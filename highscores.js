let highScoresElement = document.querySelector(".highScores");
let highScores = JSON.parse(localStorage.getItem("scores"));
console.log(highScores);


function showScores () {
    for (let i = 0; i < highScores.length; i++) {
        let html = `<p> ${highScores[i].initials} - ${highScores[i].score} </p> <br>`
      highScoresElement.insertAdjacentHTML("beforeend", html);  
        
    }
}

showScores();