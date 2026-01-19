let kissCounter = 0;
const minKiss = 5;
const maxKiss = 10;

const questions = [
  { q: "Kapan tanggal jadian kita?", a: "17 FEBRUARI" },
  { q: "12 tahun lagi kita anniversary ke berapa?", a: "15 TAHUN" },
  { q: "Siapa nama sylvanian kesukaan aku?", a: "CREME" },
  { q: "Jenis tamagotchi yang pengen aku beli?", a: "PARADISE" }
];

let currentQuestion = 0;

const kissBtn = document.getElementById("kissBtn");
const kissCountText = document.getElementById("kissCount");

kissBtn.addEventListener("click", () => {
  if (kissCounter < maxKiss) {
    kissCounter++;
    kissCountText.textContent = kissCounter + " kali";
  }

  if (kissCounter >= minKiss) {
    document.getElementById("step1").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
  }
});

function loadQuestion() {
  document.getElementById("question").textContent =
    questions[currentQuestion].q;
  document.getElementById("answer").value = "";
  document.getElementById("warning").textContent = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer")
    .value.trim().toUpperCase();

  if (userAnswer === questions[currentQuestion].a) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("quiz").classList.add("hidden");
      document.getElementById("final").classList.remove("hidden");
    }
  } else {
    document.getElementById("warning").textContent =
      "Salah. coba lagi.";
  }
}
