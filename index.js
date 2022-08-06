var readlineSync = require('readline-sync');
const userInput = readlineSync.question("Hello! what's your name? ");
console.log(`Welcome! ${userInput}`)
console.log(`Let's play a quiz on general topics!`)
let score = 0;
let highScore = 5;

//quiz function
const playQuiz = function(question, answer) {
  console.log("---------------------------------------------------------------")

  const userAnswer = readlineSync.question(question);

  // options = readlineSync.question(options);


  if (userAnswer === answer) {
    console.log(`You answered: ${userAnswer}`);
    console.log("Right answer")
    score = score + 1;

  } else {
    console.log(`You answered: ${userAnswer}`);
    console.log("Wrong answer")
    score = score - 1;

  }
  console.log("---------------------------------------------------------------")

}


const questionBook = [
  {
    question: `
      1. When was Netflix founded?
        a.1997
        b.2001
        c.2009
      `,
    answer: "1997"
  },
  {
    question: `
      2. What's the biggest animal in the world?
        a.Elephant
        b.Kangaroo
        c.Blue whale
      `,
    answer: "Blue whale"
  },
  {
    question: `
      3. How many valves does the heart have?
        a.5
        b.4
        c.2
      `,
    answer: "4"
  },
  {
    question: `
      4. Which planet is closest to the sun?
        a.Mercury
        b.Jupiter
        c.Moon
      `,
    answer: "Mercury"
  },
  {
    question: `
      5. How many elements are there in the periodic table?
        a.112
        b.134
        c.118
      `,
    answer: "118"
  }
]

for (let i = 0; i < questionBook.length; i++) {

  const quizquestion = questionBook[i];
  playQuiz(quizquestion.question, quizquestion.answer);


}

if (score > 2) {
  console.log(`💯🥂Well played ${userInput}, your final score is: ${score}`);
} else {
  console.log(`Thanks for playing ${userInput}, your final score is: ${score}`);
}
