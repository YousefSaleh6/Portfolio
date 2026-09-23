/* ================================
   DARK / LIGHT MODE TOGGLE
================================ */
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlElement.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  
  if (currentTheme === "dark") {
    htmlElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

/* ================================
   MOBILE MENU TOGGLE
================================ */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("active");
  menuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

// إغلاق المنيو عند الضغط على أي لينك داخله
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// إغلاق المنيو عند الضغط في أي مكان خارجها على الشاشة
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  }
});

/* ================================
   CURRENT YEAR
================================ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ================================
   ACTIVE NAVIGATION ON SCROLL
================================ */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});