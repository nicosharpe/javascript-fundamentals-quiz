// start button - on click, timer starts and 1st question appears
// Attach event listener to increment button element
var startBtn = document.querySelector("#start");
var choices = document.querySelector("#choices");
var timer = document.querySelector("#time")
var seconds = 60

startBtn.addEventListener("click", function() {
  setInterval(function () {
    seconds -= 1;
    timer.textContent = seconds;
console.log(seconds);
  }, 1000);
  
  function timer(){
    // Update the count down every 1 second
//
    // var sec = 60;

  }
  // count++;
  // setCounterText();
});

// timer

console.log(timer);

// questions - contain buttons for each answer
// when answer is clicked, next question appears
//if incorrect answer, subtract time from clock
var questions = [
  {
  question1:'How many javascript data-types are there?',
  answers1: ["5","100","50","85"],

  question2:'How many javascript data-types are there?',
  answers2: ["5","100","50","85"],

  question3:'How many javascript data-types are there?',
  answers3: ["5","100","50","85"],

  question4:'How many javascript data-types are there?',
  answers4: ["5","100","50","85"],

  question5:'How many javascript data-types are there?',
  answers5: ["5","100","50","85"],

}
]



// quiz ends when all questions are answered OR timer reaches zero
// when game ends it should display score and give user ability to save initials and score
// local storage



// var count = 0;
// //  Select increment and decrement button elements
// var incrementEl = document.querySelector("#increment");
// var decrementEl = document.querySelector("#decrement");
// var countEl = document.querySelector("#count");

// // Updates count on page
// function setCounterText() {
//   countEl.textContent = count;
// }
// // Attach event listener to increment button element
// incrementEl.addEventListener("click", function() {
//   count++;
//   setCounterText();
// });

// // Attach event listener to decrement button element
// decrementEl.addEventListener("click", function() {
//   // Action will fire if count is greater than  0
//   if (count > 0) {
//     count--;
//     setCounterText();
//   }
// });
