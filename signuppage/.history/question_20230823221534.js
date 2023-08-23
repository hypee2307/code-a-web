const quizData = [
  {
    question: "Đâu là câu lệnh chỉnh màu background?",
    a: "Background-position: center center;",
    b: "Background-repeat: no-repeat;",
    c: "Background-size: cover; ",
    d: "Background-color: white;",
    correct: "d",
  },
  {
    question: "Đâu là câu lệnh chỉnh màu hệ RGB?",
    a: "Color: red;",
    b: "Color: #ffa400;",
    c: "Color: (0,0,0);",
    d: "Cả 3 đều sai",
    correct: "c",
  },
  {
    question: "Đâu là câu lệnh tạo viền tròn?",
    a: "Hypertext Markup Language",
    b: "border-width: 0.1rem;",
    c: "Border-radius: 0.5rem ",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <h2>Click button to reload or wait few seconds to return to login page</h2>
           <button onclick="location.reload()">Reload</button>

           `;
      function change() {
        window.location.href = "loading2.html";
      }
      setTimeout(change, 5000);
    }
  }
});
