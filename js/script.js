fetch('../data/data.json')
  .then(res => res.json())
  .then(JsonData => {
    data = JsonData; 
  } 
  )
  .catch(err => console.log(err))

document.getElementById("time").style.display = "none"

const replyButton = document.getElementById('reply');
const gamesButton = document.getElementById('games');
const countriesButton = document.getElementById('countries');
const cultureButton = document.getElementById('culture');

gamesButton.addEventListener('click', function() {
  showQuestion(data.gamesQuestions);
  replyButton.addEventListener('click', function(){
    checkAnswer(data.gamesQuestions)
  });
  start();
  document.getElementById("reply").style.display = "inline-flex";
});

countriesButton.addEventListener('click', function() {
  showQuestion(data.countriesQuestions);
  replyButton.addEventListener('click', function(){
    checkAnswer(data.countriesQuestions)
  });
  start();
  document.getElementById("reply").style.display = "inline-flex";
});

cultureButton.addEventListener('click', function() {
  showQuestion(data.cultureQuestions);
  replyButton.addEventListener('click', function(){
    checkAnswer(data.cultureQuestions)
  });
  start();
  document.getElementById("reply").style.display = "inline-flex";
});


let currentQuestion = 0;
let score = 0;

// Main Function
function showQuestion(questions) {
  
  document.getElementById("time").style.display = ""
  document.getElementById("home-trivia").style.display = "none"

  const question = questions[currentQuestion];

  let triviaHtml = `<p><b>${question.question}</b></p>`;
  
  for (let i = 0; i < question.answers.length; i++) {
    
    triviaHtml += `<input type="radio" name="answer" value="${i}">${question.answers[i]}<br>`;
  }
  document.getElementById("quiz").innerHTML = triviaHtml;
}

function checkAnswer(questions) {
  const answer = document.querySelector('input[name="answer"]:checked').value;

  if (answer == questions[currentQuestion].correctAnswer) {
    score++;
  } else {
    stop();
    currentQuestion--;
    document.getElementById("quiz").style.display = "none"
    document.getElementById("result").innerHTML = `Your score was ${score}/${questions.length}.`;
    document.getElementById("retry").style.display = "inline-flex";
    document.getElementById("reply").style.display = "none"
  }
  
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(questions);
  } else {
    stop();
    document.getElementById("quiz").style.display = "none"
    document.getElementById("result").innerHTML = `Your score was ${score}/${questions.length}. Congrats, you won!`;
    document.getElementById("retry").style.display = "inline-flex";
    document.getElementById("reply").style.display = "none"
  }
}

// Cronometer
let startTime;
let intervalId;

function start() {
  startTime = Date.now();
  intervalId = setInterval(updateTime, 10);
}

function stop() {
  clearInterval(intervalId);
}

function updateTime() {
  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;

  document.getElementById("time").innerHTML = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  document.addEventListener('DOMContentLoaded', () => {

    const DATE_TARGET = new Date('02/14/2024 0:01 AM');
    // DOM for render
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');

    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    function updateCountdown() {

        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
    }
    updateCountdown();

    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
    });