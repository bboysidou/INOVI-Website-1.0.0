const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
document.onclick = (e) => {
  if (
    e.target.classList.value !== "burger" &&
    e.target.classList.value !== "line2" &&
    e.target.classList.value !== "line1" &&
    e.target.classList.value !== "line3"
  ) {
    nav.classList.remove("nav-active");
  }
};

document.onscroll = (e) => {
  nav.classList.remove("nav-active");
};
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
