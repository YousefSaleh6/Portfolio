/* ================================
   DARK / LIGHT MODE TOGGLE
================================ */

const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// التحقق من الوضع المحفوظ مسبقاً في الـ localStorage
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
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


/* ================================
   CURRENT YEAR
================================ */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* ================================
   SCROLL REVEAL
================================ */

const animatedElements = document.querySelectorAll(
  ".section, .hero-text, .hero-card"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  },
  {
    threshold: 0.12
  }
);

animatedElements.forEach(element => {
  observer.observe(element);
});


/* ================================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.style.color = "";

    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "var(--accent)";
    }

  });

});