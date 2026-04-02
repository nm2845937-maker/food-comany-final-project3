// BACK TO TOP
let backToTop = document.getElementById("backToTop");
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  console.log("clicked")
}

if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }


window.onload = function () {
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
  }
};



const toggleBtn = document.getElementById("darkModeToggle");
const sections = document.querySelectorAll("section");


function applyDarkMode(isDark) {
  sections.forEach(section => {
    if(isDark) section.classList.add("dark-mode");
    else section.classList.remove("dark-mode");
  });
}


toggleBtn.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode-active");
  document.body.classList.toggle("dark-mode-active", isDark);
  applyDarkMode(isDark);
  localStorage.setItem("darkMode", isDark); 
});

window.addEventListener("DOMContentLoaded", () => {
  const darkModeStored = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark-mode-active", darkModeStored);
  applyDarkMode(darkModeStored);
});

const navbar = document.querySelector("nav"); 
const section = document.querySelectorAll("section");


function applyDarkMode(isDark) {
  sections.forEach(sec => sec.classList.toggle("dark-mode", isDark));
  navbar.classList.toggle("dark-mode", isDark); 
}