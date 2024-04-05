import { Question } from "./question";

class Quiz {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;

  constructor(questions: Question[]) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  getCurrentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  advanceQuestion(): void {
    this.currentQuestionIndex++;
  }

  isQuizComplete(): boolean {
    return this.currentQuestionIndex >= this.questions.length;
  }

  checkAnswer(userAnswer: string): boolean {
    const currentQuestion = this.getCurrentQuestion();
    return currentQuestion.correctAnswer === userAnswer;
  }

  updateScore(isCorrect: boolean): void {
    if (isCorrect) {
      this.score++;
    }
  }
}
