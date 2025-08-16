// Sticky header shadow & mobile menu toggle
const header = document.querySelector(".header");
const burger = document.getElementById("burger");
const mobile = document.getElementById("mobileMenu");
const menu = document.getElementById("menu");

function onScroll() {
  if (window.scrollY > 6) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", onScroll);
onScroll();

function syncMenu() {
  if (window.innerWidth < 880) {
    burger.style.display = "block";
    menu.style.display = "none";
  } else {
    burger.style.display = "none";
    menu.style.display = "flex";
    mobile.classList.remove("open");
  }
}
window.addEventListener("resize", syncMenu);
syncMenu();
burger.addEventListener("click", () => mobile.classList.toggle("open"));

// Close mobile menu on link click
mobile
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => mobile.classList.remove("open"))
  );

// Year
document.getElementById("year").textContent = new Date().getFullYear();
