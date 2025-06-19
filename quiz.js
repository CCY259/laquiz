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

questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p><b>Q${index + 1}:</b> ${q.question}</p>
    <button onclick="checkAnswer(${index}, true)">True</button>
    <button onclick="checkAnswer(${index}, false)">False</button>
    <p id="feedback-${index}"></p>
  `;
  container.appendChild(div);
});

function checkAnswer(index, selected) {
  const result = selected === questions[index].answer;
  const feedback = document.getElementById(`feedback-${index}`);
  feedback.innerHTML = result ? "✅ Correct!" : "❌ Incorrect.";
}
