var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var choices = document.querySelector("#choices");
var end = document.querySelector("#end-screen");
var score = end.getElementsByTagName("#final-score");

console.log(score);

var currentQuestionIndex = 0
var secondsLeft = 60;
var userScore = 0

var questions = [
  {
    question: 'What is JavaScript primarily used for in web development?',
    answers: ["Styling", "Animation", "Client-side scripting", "Database management"],
    // client side scripting
    correctAnswer: 2
  },

  {
    question: 'What does DOM satand for?',
    answers: ["Document Object Model", "Data Object Model", "Document Orientation Model", "Document Order Model"],
    //document object model
    correctAnswer: 0
  },

  {
    question: 'Which of the following is used to loop through elements in an array in JavaScript?',
    answers: ["forEach", "iterate", "loop", "traverse"],
    //forEach
    correctAnswer: 0
  },

  {
    question: 'What is the purpose of the localStorage object in JavaScript?',
    answers: ["Store data that will be cleared when the browser is closed", "Store data that persists even when the browser is closed", "Store only numerical data", "Store server-side data"],
    //store data that persists even when the browser is closed
    correctAnswer: 1
  },

]

// start button - on click, timer starts and 1st question appears
startBtn.addEventListener("click", function () {
  ;

  // Set interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if ((secondsLeft === 0) || (currentQuestionIndex >= questions.length)) {
      // Stop execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append message
      sendMessage();
    }

  }, 1000);

  questionTime(currentQuestionIndex);
});


// removes starting page after click (onclick in html)
function startQuiz() {
  var quizStart = document.querySelector("#start-screen");
  if (quizStart.style.display === "none") {
    quizStart.style.display = "block";
  } else {
    quizStart.style.display = "none";
  }
}

var QSection = document.querySelector("#questions")

function questionTime(index) {
  QSection.classList.remove("hide");
  var QTitle = QSection.getElementsByTagName("h2")[0];
  QTitle.textContent = questions[index].question;
  var answers = questions[index].answers
  choices.innerHTML = "";

  for (let i = 0; i < answers.length; i++) {

    var answerBtn = document.createElement("BUTTON");
    choices.appendChild(answerBtn);
    answerBtn.textContent = answers[i];
    answerBtn.dataset.index = i;
    answerBtn.onclick = checkAnswer;
  }


  console.log(questions[0].question);


}

function checkAnswer(event) {
  var answerIndex = event.target.dataset.index;
  const question = questions[currentQuestionIndex];
  if (answerIndex === question.correctAnswer) {
    userScore++;
  } else {
    secondsLeft -= 10;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    questionTime(currentQuestionIndex);
  } else {
    showResults();

  }


}

function showResults() {
  QSection.classList.add("hide")
  end.classList.remove("hide")
}
// Function to create and append message
function sendMessage() {

  var timesUpTitle = end.getElementsByTagName("h2")[0];
  timesUpTitle.textContent = "Times Up!";
  score.textContent = secondsLeft;
}

var submit = document.querySelector("#submit");

submit.addEventListener('click', function (event) {
  function saveUserScore() {
    let initials = document.querySelector("#initials"); // the text that user submits


console.log(score);

    localStorage.setItem("Initials", initials);
    localStorage.setItem("score", score);

    let userScore = initials + score
    console.log(userScore);



  }
});





// data we capture from the user input and score
// let tempUser = { name: "test", score: 12 }
// type of tempUser --> JS OBJECT  | typeof tempUser

// highScores = [{}, {}]

// JSON --> "{ "name": "test", "score": 12 }"
// JSON.stringify(jsObj)  --> JSON OBJ "{ }"
// JSON.parse(jsonData)  --> JavaScript OBJ
var highscores = [{ name: "test", score: 12 }, { name: "test1", score: 6 }];
JSON.stringify(highscores);

// -- localStorage -- 
// setItem(key, data);  --> sets key and data
// getItem(key) --> retrieves data stored
function populateStorage() {
  setItem(highscores,)
}





// -- Order of Operations
// How do we deal with or interact with our data(?)
// --> in localStorage (KEY: VALUE) --> highscores: []
// Q) How do we initalize localStorage DATA(?)
// ---> setItem('highScores', JSON.stringify([]);
// Q) How would we update the highscores(?) --> What ACTION triggers this logic(?)

// --> submit event to capture user initials 
// data we capture from the user input and score
// let tempUser = { name: "test", score: 12 }
// type of tempUser --> JS OBJECT  | typeof tempUser

// Q) what steps do we need to keep in mind to update localStorage(?)
// --> we need to retrieve stored data | let jsonData = localStorage.getItem(key);
// data = "[]"  --> STRING OBJECT (JSON)
// --> CONVERT that data into something more useable (jsOBJ)
// let jsDATA = JSON.parse(jsonObj) --> []  --> typeof 
// --> Manipulate the data (Create Read Update Delete)
// jsData.push(tempUser)  | filter to remove 
// --> CONVERT it BACK to a STRING(JSONobj)
// let jsonData = JSON.stringify(jsData);
// --> SAVE the updated dataset to localStorage
// localStorage.setItem(key, jsanData)  --> WRITEING DATA TO THE BROWSER


console.log(questions);

// quiz ends when all questions are answered OR timer reaches zero
// when game ends it should display score and give user ability to save initials and score
// local storage

