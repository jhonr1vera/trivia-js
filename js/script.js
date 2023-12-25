document.getElementById("time").style.display = "none"

// Buttons
const replyButton = document.getElementById('reply');
const gamesButton = document.getElementById('games');
const countriesButton = document.getElementById('countries');
const cultureButton = document.getElementById('culture');

gamesButton.addEventListener('click', function() {
  showQuestion(gamesQuestions);
  replyButton.addEventListener('click', function(){
    checkAnswer(gamesQuestions)
  });
  start();
  document.getElementById("reply").style.display = "inline-flex";
});

countriesButton.addEventListener('click', function() {
  showQuestion(countriesQuestions);
  replyButton.addEventListener('click', function(){
    checkAnswer(countriesQuestions)
  });
  start();
  document.getElementById("reply").style.display = "inline-flex";
});

cultureButton.addEventListener('click', function() {
  showQuestion(cultureQuestions);
  replyButton.addEventListener('click', function(){
    checkAnswer(cultureQuestions)
  });
  start();
  document.getElementById("reply").style.display = "inline-flex";
});

// Questions
const cultureQuestions = [
  {
    question: "What is the capital of Venezuela?",
    answers: ["Caracas", "Maracaibo", "Valencia"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Chile?",
    answers: ["Quito", "Santiago", "Lima"],
    correctAnswer: 1,
  },
  {
    question: "What is the largest jungle in the world?",
    answers: ["Amazon", "Darien", "Upata"],
    correctAnswer: 0,
  },
  {
    question: "Who wrote The Odyssey?",
    answers: ["Omero", "Shakespeare", "The apostles"],
    correctAnswer: 0,
  },
  {
    question: "Where did the Olympic Games originate?",
    answers: ["Mexico", "Greece", "Holland"],
    correctAnswer: 1,
  },
  {
    question: "Who is the author of 'One Hundred Years of Solitude'?",
    answers: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar"],
    correctAnswer: 0
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra"],
    correctAnswer: 2
  },
  {
    question: "Who painted the 'Mona Lisa'?",
    answers: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
    correctAnswer: 2
  },
  {
    question: "What is the longest river in the world?",
    answers: ["Amazon River", "Nile River", "Yangtze River"],
    correctAnswer: 1
  },
  {
    question: "In what year did World War II begin?",
    answers: ["1914", "1939", "1941"],
    correctAnswer: 1
  }
];

const gamesQuestions = [
  {
    question: "What is the best-selling video game of all time?",
    answers: ["Super Mario Bros.", "Minecraft", "Tetris"],
    correctAnswer: 1,
  },
  {
    question: "Which company developed the video game 'The Legend of Zelda'?",
    answers: ["Sony", "Nintendo", "Sega"],
    correctAnswer: 1, 
  },
  {
    question: "What is the name of the protagonist in the video game 'The Witcher'?",
    answers: ["Geralt of Rivia", "Arthur Morgan", "Aloy"],
    correctAnswer: 0,
  },
  {
    question: "In what year was the first video game of 'Super Mario Bros.' released?",
    answers: ["1980", "1985", "1990"],
    correctAnswer: 1,
  },
  {
    question: "What is the name of the main villain in the video game series 'Final Fantasy VII'?",
    answers: ["Sephiroth", "Bowser", "Ganondorf"],
    correctAnswer: 0,
  },
  {
    question: "What is the name of the main character in 'Halo'?",
    answers: ["Master Chief", "Solid Snake", "Marcus Fenix"],
    correctAnswer: 0
  },
  {
    question: "Which video game popularized the Battle Royale genre?",
    answers: ["Fortnite", "PUBG", "Call of Duty"],
    correctAnswer: 1
  },
  {
    question: "What is the name of the kingdom where most of 'The Legend of Zelda' games take place?",
    answers: ["Hyrule", "Azeroth", "Eorzea"],
    correctAnswer: 0
  },
  {
    question: "What is the name of the dragon in 'Spyro the Dragon'?",
    answers: ["Spyro", "Draco", "Smaug"],
    correctAnswer: 0
  },
  {
    question: "In which video game is the city of Rapture located?",
    answers: ["Bioshock", "Fallout", "Half-Life"],
    correctAnswer: 0
  }
];

const countriesQuestions = [
  {
    question: "How many continents are there?",
    answers: ["7", "5", "4"],
    correctAnswer: 0, 
  },
  {
    question: "How many countries are there in the world?",
    answers: ["174", "195", "206"],
    correctAnswer: 1, 
  },
  {
    question: "Which country is famous for its sushi, sashimi and ramen noodle dishes?",
    answers: ["China", "Japan", "India"],
    correctAnswer: 1, 
  },
  {
    question: "Which country has the highest population in the world?",
    answers: ["Russia", "Brazil", "China"],
    correctAnswer: 2, 
  },
  {
    question: "Which country is known for the iconic monument of Machu Picchu?",
    answers: ["Peru", "Venezuela", "Argentina"],
    correctAnswer: 0, 
  },
  {
    question: "Which is the most populous country in the world?",
    answers: ["India", "China", "United States"],
    correctAnswer: 1
  },
  {
    question: "Which is the largest country in the world by geographical area?",
    answers: ["Canada", "Russia", "China"],
    correctAnswer: 1
  },
  {
    question: "Which is the smallest country in the world?",
    answers: ["Monaco", "Vatican", "San Marino"],
    correctAnswer: 1
  },
  {
    question: "Which country has the most spoken languages?",
    answers: ["India", "Papua New Guinea", "Indonesia"],
    correctAnswer: 1
  },
  {
    question: "Which country has the most UNESCO World Heritage Sites?",
    answers: ["Italy", "China", "Spain"],
    correctAnswer: 0
  }
];


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