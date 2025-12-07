// הדגשת קישור הניווט לפי כתובת העמוד
(function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";

  const linkMap = {
    "index.html": "nav-home",
    "management.html": "nav-management",
    "renew.html": "nav-renew",
    "agile.html": "nav-agile",
    "apps.html": "nav-apps",
  };

  const id = linkMap[path];
  if (!id) return;
  const link = document.getElementById(id);
  if (link) link.classList.add("active");
})();

// תפריט נייד
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// שנה בפוטר
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ==========================
// Highlight active nav link
// ==========================
(function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";

  const linkMap = {
    "": "nav-home",
    "index.html": "nav-home",
    "management.html": "nav-management",
    "renew.html": "nav-renew",
    "agile.html": "nav-agile",
    "apps.html": "nav-apps",
  };

  const id = linkMap[path] || "nav-home";
  const link = document.getElementById(id);
  if (link) link.classList.add("active");
})();

// ==========================
// Mobile nav toggle
// ==========================

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// ==========================
// Dark / Light theme toggle
// ==========================
(function initTheme() {
  const root = document.documentElement;
  const THEME_KEY = "ridosoft-theme";

  // 1) load from localStorage or fallback to 'dark'
  let saved = localStorage.getItem(THEME_KEY);
  if (saved !== "light" && saved !== "dark") {
    saved = "dark";
  }
  root.setAttribute("data-theme", saved);

  // 2) toggle on click
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
})();
