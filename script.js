function nextSection() {
  document.querySelector("section").style.display = "none";
  document.getElementById("story").classList.remove("hidden");
}

function showQuiz() {
  document.getElementById("story").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
}

function saveAnswer(answer) {
  console.log("Quiz Answer:", answer);
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("emotion").classList.remove("hidden");
}

function showProposal() {
  document.getElementById("emotion").classList.add("hidden");
  document.getElementById("proposal").classList.remove("hidden");
}

function celebrate() {
  document.getElementById("proposal").classList.add("hidden");
  document.getElementById("celebration").classList.remove("hidden");
}

let noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
});
