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
    answer: false
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
    question: "The sum of two subspaces $S$ and $T$ is the largest subspace contained in $S$ and $T$.",
    answer: false
  },
  {
    question: "The sum of two subspaces always exists.",
    answer: true
  },
  {
    question: "The direct sum of two subspaces always exists.",
    answer: false
  },
  {
    question: "A complement of a subspace always exists.",
    answer: true
  },
  {
    question: "A complement of a subspace always exists and is unique.",
    answer: false
  },
  {
    question: "Every vector space has a spanning set.",
    answer: true
  },
  {
    question: "A linearly independent set of vectors cannot contain the zero vector.",
    answer: true
  },
  {
    question: "Any subset containing a basis for a vector space is linearly dependent.",
    answer: false
  },
  {
    question: "Any proper subset of a basis for $V$ does not span $V$.",
    answer: true
  },
  {
    question: "Any vector space has a basis.",
    answer: false
  },
  {
    question: "Any basis for a vector space contains a spanning set.",
    answer: false
  },
  {
    question: "Any linearly independent set in a vector space is contained in a basis.",
    answer: true
  },
  {
    question: "If $b_1,\\dots, b_n$ is a basis for $V$, then $\\lambda_1 b_1,\\dots, \\lambda_n b_n$ is a basis for $V$ for any $\\lambda_1,\\dots,\\lambda_n\\in \\mathbb{F}$.",
    answer: false
  },
  {
    question: "If $v_1,\\dots,v_n$ are linearly independent, then no $v_i$ is a linear combination of the other vectors.",
    answer: true
  },
  {
    question: "If $v_1,\\dots,v_n$ are vectors such that no $v_i$ is a linear combination of the other vectors, then they are linearly independent.",
    answer: true
  },
  {
    question: "If $\\dim V = \\dim W$, then $V = W$.",
    answer: false
  },
  {
    question: "$\\dim (S+T) + \\dim(S\\cap T) = \\dim S + \\dim T$",
    answer: true
  },
  {
    question: "$|S\\cup T| + |S\\cap T| = |S| + |T|$",
    answer: true
  },
  {
    question: "$|S\\cup T \\cup U| =  |S| + |T| + |U| - |S\\cap T| - |S\\cap U| - |T\\cap U| + |S\\cap T\\cap U|.$",
    answer: true
  },
  {
    question: "\\begin{align*}\\dim(S+ T + U) &=  \\dim S + \\dim T + \\dim U \\\\ &\\quad- \\dim(S\\cap T) - \\dim(S\\cap U) - \\dim(T\\cap U) \\\\ &\\quad+ \\dim(S\\cap T\\cap U).\\end{align*}",
    answer: false
  },
  {
    question: "Given any two matrices $A,B\\in M_n(\\mathbb{F})$ ($n\\geq 2$), we have $(A+B)^2 = A^2+2AB+B^2$.",
    answer: false
  },
  {
    question: "Given any two matrices $A,B\\in M_n(\\mathbb{F})$ ($n\\geq 2$), we have $AB = 0\\implies A=0$ or $B = 0$.",
    answer: false
  },
  {
    question: "Coordinate vector can be defined using an unordered basis.",
    answer: false
  },
  {
    question: "Elementary row operations do not affect the rank of a matrix.",
    answer: true
  },
  {
    question: "The rank of a matrix $A$ is the number of nonzero rows of $A$.",
    answer: false
  },
  {
    question: "Every elementary matrix is a square matrix.",
    answer: true
  },
  {
    question: "Let $A$ be an $n \\times n$ matrix. Then $\\dim R(A)$ and $\\dim C(A)$ are not necessarily equal.",
    answer: false
  },
  {
    question: "Let $A$ be an $n \\times n$ matrix. Then $\\operatorname{rank} A = n$ if and only if $A$ is invertible.",
    answer: true
  },
  {
    question: "Let $A$ be an $m \\times n$ matrix. Then $\\operatorname{rank} A = 0$ if and only if $A = 0$.",
    answer: true
  },
  {
    question: "Let $\\psi:V \\rightarrow W$ be a linear map. Then $\\operatorname{ker} \\psi$ is a subspace of $W$.",
    answer: false
  },
  {
    question: "$\\psi:V\\rightarrow W$ is surjective if and only if $\\operatorname{ker} \\psi = \\{0\\}$.",
    answer: false
  },
  {
    question: "$\\psi:V\\rightarrow W$ is injective if and only if $\\operatorname{ker} \\psi = \\{0\\}$.",
    answer: true
  },
  {
    question: "Let $\\psi:V\\rightarrow W$ be a linear map. Then $S$ spans $V$ if and only if $\\psi(S)$ spans $V$.",
    answer: false
  },
  {
    question: "Any linear map from $\\mathbb{F}^n$ into $\\mathbb{F}^m$ can be interpreted as the left multiplication by an $m \\times n$ matrix.",
    answer: true
  },
  {
    question: "Let $\\psi:V\\rightarrow W$ be a linear map with $\\dim V =n$. If $\\{u_1,\\dots, u_k\\}$ is a basis for $\\operatorname{ker} \\psi$ and is extended to a basis $\\{u_1,\\dots, u_{k}, u_{k+1},\\dots, u_n\\}$ for $V$, then $\\{\\psi(u_{k+1}),\\dots, \\psi(u_n)\\}$ is a basis for $\\operatorname{im}\\psi$.",
    answer: true
  },
  {
    question: "$\\psi: \\mathbb{F}^n \\rightarrow \\mathbb{F}^m$ is surjective if and only if $\\operatorname{rank} \\psi = m$.",
    answer: true
  },
  {
    question: "$\\psi: \\mathbb{F}^n \\rightarrow \\mathbb{F}^m$ is injective if and only if $\\operatorname{rank} \\psi = m$.",
    answer: false
  },
  {
    question: "Let $n = \\dim V$ and let $\\mathcal{B}$ be an ordered basis for $V$. The map $f:V \\rightarrow \\mathbb{F}^n$ defined by $f(x)=[x]_{\\mathcal{B}}$ can be viewed as an isomorphism from $V$ onto $\\mathbb{F}^n$.",
    answer: true
  },
  {
    question: "Transition matrices are not necessarily invertible.",
    answer: false
  },
  {
    question: "The matrix of a linear map is not necessarily invertible.",
    answer: true
  },
  {
    question: "The set of all linear transformations from $V$ to $W$, together with usual function addition and scalar multiplication, is a vector space.",
    answer: true
  },
  {
    question: "If two matrices represent the same linear operator, possibly with respect to different ordered basis, then they are similar.",
    answer: true
  },
  {
    question: "Similar matrices have the same determinant.",
    answer: true
  },
  {
    question: "Similar matrices have the same corresponding eigenvectors.",
    answer: false
  },
  {
    question: "In general, $\\operatorname{rank} AB = \\operatorname{rank} BA$.",
    answer: false
  },
  {
    question: "If $P$ is invertible, then $\\operatorname{rank} PA= \\operatorname{rank} A$.",
    answer: true
  },
  {
    question: "$\\operatorname{rank} AB\\leq \\operatorname{rank} B$.",
    answer: true
  },
  {
    question: "The trace is a linear map from $M_n(\\mathbb{F})$ to $M_n(\\mathbb{F})$ ($n\\geq 2$).",
    answer: false
  },
  {
    question: "The transpose is a linear map from $M_n(\\mathbb{F})$ to $M_n(\\mathbb{F})$ ($n\\geq 2$).",
    answer: true
  },
  {
    question: "Assuming that we know the set $\\mathcal{X}$ of all real-valued random variables is a vector space over $\\mathbb{R}$. Then the expectation is a linear map from $\\mathcal{X}$ to $\\mathbb{R}$.",
    answer: true
  },
  {
    question: "The composition of two linear maps is linear.",
    answer: true
  },
  {
    question: "Any two linear transformations commute.",
    answer: false
  },
  {
    question: "The inverse of an invertible linear map is not necessarily linear.",
    answer: false
  },
  {
    question: "If $A$ is a diagonal matrix and $B$ commutes with $A$, then $B$ is a diagonal matrix.",
    answer: false
  },
  {
    question: "If $\\mathbb{F}$ is algebraically closed, then the trace of a matrix $A$ over $\\mathbb{F}$ is the sum of all the eigenvalues of $A$.",
    answer: true
  },
  {
    question: "If $\\mathbb{F}$ is algebraically closed, then the determinant of a matrix $A$ over $\\mathbb{F}$ is the sum of all the eigenvalues of $A$.",
    answer: false
  },
  {
    question: "If a square complex matrix $A$ has a nonreal entry, then at least one of the eigenvalues of $A$ is not a real number.",
    answer: false
  },
  {
    question: "A square matrix $A$ is invertible if and only if $0$ is not an eigenvalue of $A$.",
    answer: true
  },
  {
    question: "If $A$ and $B$ are two $n \\times n$ matrices, then $AB$ and $BA$ have the same eigenvalues.",
    answer: false
  },
  {
    question: "If $\\lambda$ is an eigenvalue of $A$, then $p(\\lambda)$ is an eigenvalue of $p(A)$, where $p(x)$ is a polynomial.",
    answer: true
  },
  {
    question: "The eigenvalues of a matrix are the elements of the matrix on the main diagonal.",
    answer: false
  },
  {
    question: "If $A$ has $n$ distinct eigenvectors, then $A$ is diagonalizable. ",
    answer: false
  },
  {
    question: "If $A$ has $n$ distinct eigenvalues, then $A$ is diagonalizable.",
    answer: true
  },
  {
    question: "If $A$ is diagonalizable, then $A$ has $n$ distinct eigenvalues.",
    answer: false
  },
  {
    question: "If $A$ is diagonalizable, then $A$ has $n$ distinct eigenvectors.",
    answer: true
  },
  {
    question: "The eigenvalues of a linear operator depend on the choices of bases.",
    answer: false
  },
  {
    question: "If the characteristic polynomials of $A$ and $B$ are equal, then $A$ and $B$ have the same eigenvalues.",
    answer: true
  },
  {
    question: "$\\operatorname{tr}(ABC) = \\operatorname{tr}(ACB)$.",
    answer: false
  },
  {
    question: "$\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$.",
    answer: true
  },
  {
    question: "$\\det(\\alpha A) = \\alpha\\det A$.",
    answer: false
  },
  {
    question: "$\\det(AB) = \\det(BA)$.",
    answer: true
  },
  {
    question: "If $\\lambda_1,\\dots,\\lambda_k$ are all distinct eigenvalues of an $n\\times n$ matrix $A$, then $\\mathbb{F}^n = \\mathcal{E}_{\\lambda_1}+\\cdots+\\mathcal{E}_{\\lambda_k}$, where $\\mathcal{E}_{\\lambda_i}$ is the eigenspace of $\\lambda_i$.",
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
    ($x,y,z,\\dots$) represent vectors in an arbitrary vector space (capital letters $V,W,\\dots$) and 
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
  feedback.innerHTML = isCorrect ? "(¦3[▓▓]" : "＼(・｀(エ)・)/ ";

  answeredCount++;
  if (isCorrect) correctCount++;

  // Show final score after last answer
  if (answeredCount === questions.length) {
    let grade;
    if (correctCount == questions.length) grade = 'Genius Level!';
    else if (correctCount >= questions.length-2) grade = 'So close!';
    else if (correctCount >= questions.length-15) grade = 'Good Job.';
    else if (correctCount >= questions.length-30) grade = 'Need more practice!';
    else grade = 'Habis lah!';
    scoreBox.innerHTML = `<div style="font-size: 1.5em; font-weight: bold; margin-top: 50px; margin-bottom: 50px;">
    You got ${correctCount} out of ${questions.length} correct. ${grade}
    </div>`
  }
}
