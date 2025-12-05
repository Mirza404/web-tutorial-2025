const toggleBtn = document.getElementById("toggleBtn");
const dynamicPara = document.getElementById("dynamicText");

let isDark = false;

function applyState() {
  if (isDark) {
    dynamicPara.innerHTML = "Light mode is ON. Click the button to change";
    dynamicPara.style.color = "black";
    dynamicPara.style.backgroundColor = "white";
    toggleBtn.innerHTML = "Switch to dark Mode!";
    toggleBtn.classList.remove("bg-gray-800", "text-white");
    toggleBtn.classList.add("bg-yellow-400", "text-slate-900");
    isDark = false;
  } else {
    dynamicPara.innerHTML = "Dark mode is ON. Click the button to change";
    dynamicPara.style.color = "white";
    dynamicPara.style.backgroundColor = "black";
    toggleBtn.innerHTML = "Switch to Light Mode!";
    toggleBtn.classList.remove("bg-yellow-400", "text-slate-900");
    toggleBtn.classList.add("bg-gray-800", "text-white");
    isDark = true;
  }
}

toggleBtn.addEventListener("click", () => {
  applyState();
});