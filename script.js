const countNum = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

function update(val = 0) {
  count = val === "reset" ? 0 : count + val;
  countNum.innerHTML = count;
  countNum.style.color = count > 0 ? "green" : count < 0 ? "red" : "gray";
}

increaseBtn.addEventListener("click", () => update(1));
decreaseBtn.addEventListener("click", () => update(-1));
resetBtn.addEventListener("click", () => update("reset"));
