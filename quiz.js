const questions = [
  {
    question: "The derivative of $x^2$ is $2x$.",
    answer: true
  },
  {
    question: "$\\sqrt{2}$ is a rational number.",
    answer: false
  },
  {
    question: "The series $\\sum_{n=1}^\\infty \\frac{1}{n^2}$ converges.",
    answer: true
  }
];

const container = document.getElementById("quiz-container");

questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p><b>Q${i + 1}:</b> ${q.question}</p>
    <button id="true-${i}" onclick="checkAnswer(${i}, true)">True</button>
    <button id="false-${i}" onclick="checkAnswer(${i}, false)">False</button>
    <p id="feedback-${i}"></p>
  `;
  container.appendChild(div);
});

MathJax.typeset();

let answeredCount = 0;
let correctCount = 0;

function checkAnswer(index, selected) {
  const correct = questions[index].answer;
  const feedback = document.getElementById(`feedback-${index}`);
  const trueBtn = document.getElementById(`true-${index}`);
  const falseBtn = document.getElementById(`false-${index}`);

  // Disable both buttons
  trueBtn.disabled = true;
  falseBtn.disabled = true;

  // Show result
  feedback.innerHTML = selected === correct ? "Correct" : "Incorrect.";
  MathJax.typeset(); // Re-render if LaTeX appears in feedback

  answeredCount++;
  const isCorrect = selected === correct;
  if (isCorrect) correctCount++;

  // If all questions answered, show total score
  if (answeredCount === questions.length) {
    const scoreDiv = document.createElement("div");
    scoreDiv.innerHTML = `<h2>You got ${correctCount} out of ${questions.length} correct.</h2>`;
    document.body.appendChild(scoreDiv);
  }
}
