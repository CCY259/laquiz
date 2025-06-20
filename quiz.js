const questions = [
  {
    question: "$\\mathbb{N}$ is a field.",
    answer: false
  },
  {
    question: "$\\mathbb{Z}$ is a field.",
    answer: false
  },
  {
    question: "$\\mathbb{Q}$ is a field.",
    answer: true
  },
  {
    question: "$\\mathbb{R}\\setminus\\mathbb{Q}$ is a field.",
    answer: false
  },
  {
    question: "$\\mathbb{C}$ is a vector space over $\\mathbb{R}$",
    answer: true
  },
  {
    question: "$\\mathbb{C}$ is a vector space over $\\mathbb{C}$",
    answer: true
  },
  {
    question: "Every field $\\mathbb{F}$ is a vector space over $\\mathbb{F}$.",
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
    <button style = "font-size: 1.1em; padding: 5px 14px;", id="true-${i}" onclick="checkAnswer(${i}, true)">True</button>
    <button style = "font-size: 1.1em; padding: 5px 14px;", id="false-${i}" onclick="checkAnswer(${i}, false)">False</button>
    <span id="feedback-${i}" style="min-width: 100px; margin-left: 30px;"></span>
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

  // Highlight the clicked button
  const selectedBtn = selected ? trueBtn : falseBtn;
  if (selected === correct) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("wrong");
  }

  const isCorrect = selected === correct;
  feedback.innerHTML = isCorrect ? "Correct!" : "Incorrect.";

  answeredCount++;
  if (isCorrect) correctCount++;

  // scoreBox.innerHTML = `<br><strong> Score: ${correctCount} / ${answeredCount}</strong>`;

  // Show final score after last answer
  if (answeredCount === questions.length) {
    let grade;
    if (correctCount == questions.length) grade = 'Genius Level!';
    else if (correctCount >= questions.length-2) grade = 'So close!';
    else if (correctCount >= questions.length-10) grade = 'Good Job.';
    else if (correctCount >= questions.length-40) grade = 'Need more practice!';
    else grade = 'Habis lah!';
    scoreBox.innerHTML = `<div style="font-size: 1.5em; font-weight: bold; margin-top: 50px; margin-bottom: 100px;">
    You got ${correctCount} out of ${questions.length} correct. ${grade}
    </div>`
  }
}
