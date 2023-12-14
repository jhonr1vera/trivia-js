// Main function

const questions = [
  {
    question: "¿Cuál es la capital de Venezuela?",
    answers: ["Caracas", "Maracaibo", "Valencia"],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    answers: ["Amazonas", "Nilo", "Yangtze"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la selva más grande mundo?",
    answers: ["Amazonas", "Darien", "Upata"],
    correctAnswer: 0,
  },
  {
    question: "¿Quién escribió La Odisea?",
    answers: ["Omero", "Shakespeare", "Los apostoles"],
    correctAnswer: 0,
  },
  {
    question: "¿Dónde originaron los juegos olímpicos?",
    answers: ["Mexico", "Grecia", "Holanda"],
    correctAnswer: 1,
  },
];

const gamesQuestions = [
  {
    question: "¿Qué videojuego es el más vendido de todos los tiempos?",
    answers: ["Minecraft", "Mario Bros", "Fornite"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la consola de juegos más vendida hasta la fecha?",
    answers: ["PlayStation 4", "Nintendo DS", "PlayStation 2"],
    correctAnswer: 3, 
  },
  {
    question: "¿En qué se inspiró el creador de Pac Man para crear este personaje?",
    answers: ["Una galleta", "Una tarta", "Una pizza"],
    correctAnswer: 3, 
  }
];

const countriesQuestions = [  {
  question: "¿Cuál es la consola de juegos más vendida hasta la fecha?",
  answers: ["PlayStation 4", "Nintendo DS", "PlayStation 2"],
  correctAnswer: 3, 
},
{
  question: "¿En qué se inspiró el creador de Pac Man para crear este personaje?",
  answers: ["Una galleta", "Una tarta", "Una pizza"],
  correctAnswer: 3, 
}
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  
  const question = questions[currentQuestion];

  let triviaHtml = `<p>${question.question}</p>`;
  
  for (let i = 0; i < question.answers.length; i++) {
    triviaHtml += `<input type="radio" name="answer" value="${i}">${question.answers[i]}<br>`;
  }
  document.getElementById("quiz").innerHTML = triviaHtml;
}

function checkAnswer() {
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
    showQuestion();
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
}

showQuestion();
start();