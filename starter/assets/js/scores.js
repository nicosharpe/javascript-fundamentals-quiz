
//if incorrect answer, subtract time from clock

// quiz ends when all questions are answered OR timer reaches zero
// when game ends it should display score and give user ability to save initials and score
// local storage


// Q) HOW do we retrieve stored Data(?)
// let jsonData = localStorage.getItem(key)
var submit = document.querySelector("#submit");
var end = document.querySelector("#end-screen");
var score = end.getElementsByTagName("#final-score");

submit.addEventListener('click', function (event) {
  function saveUserScore() {
    let initials = document.querySelector("#initials"); // the text that user submits




    localStorage.setItem("Initials", initials);
    localStorage.setItem("Score", score);

    let userScore = initials + score
    console.log(userScore);



  }
});