const footer = document.querySelector(".footer");
const popIp = document.getElementById("pop-ip");
const popupControls = document.querySelector(".popup-controls");

// Initially hide the pop-ip and popup-controls
popIp.classList.add("hidden");
popupControls.classList.add("hidden");

// Add click event listener to the footer
footer.addEventListener("click", () => {
  // Toggle the visibility class
  popIp.classList.toggle("hidden");
  popupControls.classList.toggle("hidden");

  // Add the appropriate transition class
  if (popIp.classList.contains("hidden")) {
    // Closing: Normal speed
    popIp.classList.add("transition-out");
  } else {
    // Opening: Slow speed
    popIp.classList.add("transition-in");
  }
});

// Remove transition class after a short delay
popIp.addEventListener("transitionend", () => {
  popIp.classList.remove("transition-in");
  popIp.classList.remove("transition-out");
});

let currentIndex = 0;
const slides = document.querySelectorAll(".slides");

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}

// Set interval for the slideshow
setInterval(showNextSlide, 5000);
