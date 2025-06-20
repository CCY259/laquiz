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
const scoreBox = document.getElementById("score-summary");

let answeredCount = 0;
let correctCount = 0;

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


function checkAnswer(index, selected) {
  const correct = questions[index].answer;
  const feedback = document.getElementById(`feedback-${index}`);
  const trueBtn = document.getElementById(`true-${index}`);
  const falseBtn = document.getElementById(`false-${index}`);

  if (trueBtn.disabled || falseBtn.disabled) return; // prevent double-clicking

  // Disable buttons
  trueBtn.disabled = true;
  falseBtn.disabled = true;

  const isCorrect = selected === correct;
  feedback.innerHTML = isCorrect ? "Correct!" : "Incorrect.";

  answeredCount++;
  if (isCorrect) correctCount++;

  // scoreBox.innerHTML = `<br><strong> Score: ${correctCount} / ${answeredCount}</strong>`;

  // Show final score after last answer
  if (answeredCount === questions.length) {
    let grade;
    if (correctCount >= 3) grade = 'Well Done!';
    else if (correctCount == 2) grade = 'So close!';
    else if (correctCount == 1) grade = 'Need more practice!';
    else grade = 'Habis lah!';
    scoreBox.innerHTML = `<br><strong> You got ${correctCount} out of ${questions.length} correct. ${grade} </strong>`;
  }
}
