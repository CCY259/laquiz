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
    question: "$\\mathbb{C}$ is a vector space over $\\mathbb{R}$.",
    answer: true
  },
  {
    question: "$\\mathbb{C}$ is a vector space over $\\mathbb{C}$.",
    answer: true
  },
  {
    question: "Every field $\\mathbb{F}$ is a vector space over $\\mathbb{F}$.",
    answer: true
  },
  {
    question: "The set of all continuous function $f:(0,1)\\rightarrow \\mathbb{R}$, together with the usual function addition and scalar multiplication, is a vector space over $\\mathbb{R}$.",
    answer: true
  },
  {
    question: "The set of all invertible matrices over $\\mathbb{F}$ is a vector space over $\\mathbb{F}$.",
    answer: false
  },
  {
    question: "The set of all singular matrices over $\\mathbb{F}$ is a vector space over $\\mathbb{F}$.",
    answer: false
  },
  {
    question: "The set of all diagonal matrices over $\\mathbb{F}$ is a vector space over $\\mathbb{F}$.",
    answer: true
  },
  {
    question: "The set of all upper triangular matrices over $\\mathbb{F}$ is a vector space over $\\mathbb{F}$.",
    answer: true
  },
  {
    question: "The set of all diagonalizable matrices over $\\mathbb{F}$ is a vector space over $\\mathbb{F}$.",
    answer: true
  },
  {
    question: "Every vector space contains an additive identity.",
    answer: true
  },
  {
    question: "Every vector space contains a multiplicative identity.",
    answer: false
  },
  {
    question: "Every field contains an additive identity.",
    answer: true
  },
  {
    question: "Every field contains a multiplicative identity.",
    answer: true
  },
  {
    question: "A vector space may have more than one additive identity.",
    answer: false
  },
  {
    question: "In a field, the additive identity may equal to the multiplicative identity.",
    answer: false
  },
  {
    question: "$\\alpha x = \\beta x \\implies \\alpha = \\beta$.",
    answer: false
  },
  {
    question: "$\\alpha x = 0 \\implies \\alpha = 0$ or $x = 0$.",
    answer: true
  },
  {
    question: "$ \\alpha = 0$ or $x = 0 \\implies \\alpha x = 0$.",
    answer: true
  },
  {
    question: "$\\alpha \\neq 0$ or $x \\neq 0 \\implies \\alpha x \\neq 0$.",
    answer: false
  },
  {
    question: "$\\alpha x \\neq 0 \\implies \\alpha \\neq 0$ or $x \\neq 0$.",
    answer: true
  },
  {
    question: "$\\alpha x = \\alpha y \\implies  x=y$.",
    answer: false
  },
  {
    question: "Any finite union of subspaces of $V$ is a subspace of $V$.",
    answer: false
  },
  {
    question: "Any finite intersection of subspaces of $V$ is a subspace of $V$.",
    answer: true
  },
  {
    question: "Any complement of a subspace of $V$ is a subspace of $V$.",
    answer: false
  },
  {
    question: "",
    answer: false
  },
  // Remember to delete , for the last question
];

const container = document.getElementById("quiz-container");
const scoreBox = document.getElementById("score-summary");

let answeredCount = 0;
let correctCount = 0;

const intro = document.createElement("intro")
intro.innerHTML = `<p><b>Note.</b>  When some symbols are not specified, it is understood that alphabets 
    ($x,y,z,\\dots$) represents vectors in an arbitrary vector space (capital letters $V,W,\\dots$) and 
    Greek letters ($\\alpha,\\beta,\\gamma,\\lambda,\\dots$) represent scalars in the underlying field. </p>`
container.appendChild(intro)


questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p><b>Q${i + 1}.</b> ${q.question}</p>
    <button style = "font-size: 1.1em; padding: 5px 14px;", id="true-${i}" onclick="checkAnswer(${i}, true)">True</button>
    <button style = "font-size: 1.1em; padding: 5px 14px;", id="false-${i}" onclick="checkAnswer(${i}, false)">False</button>
    <span id="feedback-${i}" style="min-width: 100px; margin-left: 30px;"></span>
  `;
  container.appendChild(div);
});

const savedAnswer = localStorage.getItem(`question-${i}`);
if (savedAnswer !== null) {
  checkAnswer(i, savedAnswer === 'true', true); // true = restoring
}


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

  // Show final score after last answer
  if (answeredCount === questions.length) {
    let grade;
    if (correctCount == questions.length) grade = 'Genius Level!';
    else if (correctCount >= questions.length-2) grade = 'So close!';
    else if (correctCount >= questions.length-10) grade = 'Good Job.';
    else if (correctCount >= questions.length-40) grade = 'Need more practice!';
    else grade = 'Habis lah!';
    scoreBox.innerHTML = `<div style="font-size: 1.5em; font-weight: bold; margin-top: 50px; margin-bottom: 50px;">
    You got ${correctCount} out of ${questions.length} correct. ${grade}
    </div>`
  }
}
