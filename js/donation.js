// Step references
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");
const step4 = document.getElementById("step-4");

// Step 1 -> Step 2
document.getElementById("nextBtn1").addEventListener("click", () => {
  step1.classList.remove("active");
  step2.classList.add("active");
});

// Step 2 -> Step 1
document.getElementById("prevBtn2").addEventListener("click", () => {
  step2.classList.remove("active");
  step1.classList.add("active");
});

// Step 2 -> Step 3
document.getElementById("nextBtn2").addEventListener("click", () => {
  step2.classList.remove("active");
  step3.classList.add("active");
});

// Step 3 -> Step 2
document.getElementById("prevBtn3").addEventListener("click", () => {
  step3.classList.remove("active");
  step2.classList.add("active");
});

// Step 3 -> Step 4
document.getElementById("nextBtn3").addEventListener("click", () => {
  step3.classList.remove("active");
  step4.classList.add("active");
});

// Step 4 -> Step 3
document.getElementById("prevBtn4").addEventListener("click", () => {
  step4.classList.remove("active");
  step3.classList.add("active");
});

// On Step 4, the form is submitted via the "Submit" button (type="submit").
