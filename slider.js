const sliderImages = document.querySelectorAll(".slider__img");
const sliderLine = document.querySelector(".slider__line");
const sliderDots = document.querySelectorAll(".slider__dot");
const sliderBtnPrev = document.querySelector(".slider__btn-prev");
const sliderBtnNext = document.querySelector(".slider__btn-next");

let sliderCount = 0;
let sliderWidth;

window.addEventListener("resize", showSlide);

sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", pervSlide);

function showSlide() {
  sliderWidth = document.querySelector(".slider-wrap").offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + "px";
  sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));
  rollSlider();
}
showSlide();

function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;
  rollSlider();
  thisSlider(sliderCount);
}

function pervSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;
  rollSlider();
  thisSlider(sliderCount);
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlider(index) {
  sliderDots.forEach((item) => item.classList.remove("active-dot"));
  sliderDots[index].classList.add("active-dot");
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlider(sliderCount);
  });
});