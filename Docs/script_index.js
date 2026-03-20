const heroSlides = document.querySelectorAll(".hero-slide");
const featureSlides = document.querySelectorAll(".feature-slide");
const dots = document.querySelectorAll(".dot");
const featureTitle = document.getElementById("featureTitle");
const featureButton = document.getElementById("featureButton");
const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");
const neonLogo = document.getElementById("neonLogo");

let heroIndex = 0;
let featureIndex = 0;
let heroInterval;
let featureInterval;

function showHeroSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    slide.setAttribute("aria-hidden", i === index ? "false" : "true");
  });
}

function nextHeroSlide() {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  showHeroSlide(heroIndex);
}

function showFeatureSlide(index) {
  featureSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  const activeSlide = featureSlides[index];
  featureTitle.textContent = activeSlide.dataset.title;
  featureButton.href = activeSlide.dataset.link;
}

function nextFeatureSlide() {
  featureIndex = (featureIndex + 1) % featureSlides.length;
  showFeatureSlide(featureIndex);
}

function prevFeatureSlide() {
  featureIndex = (featureIndex - 1 + featureSlides.length) % featureSlides.length;
  showFeatureSlide(featureIndex);
}

function startHeroRotation() {
  heroInterval = setInterval(nextHeroSlide, 8000);
}

function startFeatureRotation() {
  featureInterval = setInterval(nextFeatureSlide, 6000);
}

function resetFeatureRotation() {
  clearInterval(featureInterval);
  startFeatureRotation();
}

nextSlideBtn.addEventListener("click", () => {
  nextFeatureSlide();
  resetFeatureRotation();
});

prevSlideBtn.addEventListener("click", () => {
  prevFeatureSlide();
  resetFeatureRotation();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    featureIndex = Number(dot.dataset.slide);
    showFeatureSlide(featureIndex);
    resetFeatureRotation();
  });
});

window.addEventListener("load", () => {
  neonLogo.classList.add("power-on");
  showHeroSlide(heroIndex);
  showFeatureSlide(featureIndex);
  startHeroRotation();
  startFeatureRotation();
});