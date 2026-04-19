const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu.querySelectorAll("a");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  const clickedOutsideMenu = !navMenu.contains(e.target);
  const clickedOutsideButton = !menuToggle.contains(e.target);

  if (navMenu.classList.contains("active") && clickedOutsideMenu && clickedOutsideButton) {
    navMenu.classList.remove("active");
  }
});

// HERO PHONE CAROUSEL
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next >= slides.length) next = 0;
  showSlide(next);
}

function prevSlide() {
  let prev = currentSlide - 1;
  if (prev < 0) prev = slides.length - 1;
  showSlide(prev);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoSlide();
  });
});

function startAutoSlide() {
  autoSlide = setInterval(() => {
    nextSlide();
  }, 3000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

if (slides.length > 0 && dots.length > 0) {
  showSlide(0);
  startAutoSlide();
}