import { Quiz } from "./quiz";

const questions: Quiz.Question[] = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  // More questions...
];

const quiz = new Quiz(questions);

// Display initial question
displayQuestion(quiz.getCurrentQuestion());

// Event listeners
document.getElementById("next")!.addEventListener("click", () => {
  if (!quiz.isQuizComplete()) {
    quiz.advanceQuestion();
    displayQuestion(quiz.getCurrentQuestion());
  }
});

document.getElementById("prev")!.addEventListener("click", () => {
  if (quiz.currentQuestionIndex > 0) {
    quiz.advanceQuestion(-1);
    displayQuestion(quiz.getCurrentQuestion());
  }
});

document.getElementById("submit")!.addEventListener("click", () => {
  const userAnswer = (document.querySelector('input[name="choice"]:checked') as HTMLInputElement).value;
  const isCorrect = quiz.checkAnswer(userAnswer);
  quiz.updateScore(isCorrect);
});

function displayQuestion(question: Quiz.Question): void {
  (document.getElementById("question") as HTMLParagraphElement).textContent = question.question;
  const choices = document.getElementById("choices");
  choices.innerHTML = "";
  question.choices.forEach((choice, index) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "choice";
    input.value = choice;
    const label = document.createElement("label");
    label.textContent = choice;
    if (index === 0) {
      input.checked = true;
    }
    const li = document.createElement("li");
    li.appendChild(input);
    li.appendChild(label);
    choices.appendChild(li);
  });
}