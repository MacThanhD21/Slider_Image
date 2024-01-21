// Get DOM elements for the image carousel

const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

// 
let imageIndex = 1,
  intervalId;

// Define function to start automatic image slider

const autoSlide = () => {
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
}

// Call autoSlide function to start automatic image slider
autoSlide();
// A function that updates the carousel display to show the specified image
const slideImage = () => {
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1: imageIndex;
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
}

// A function that updates carousel display to show the next or prev image
const updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);
  // Calculate the updated image index based on the button clicked
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  // Restart the automatic slideshow
  autoSlide();
}
// Add event listeners for navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover event listeners to wrapper element to stop auto sliding
wrapper.addEventListener('mouseover', () => clearInterval(intervalId));

// Add mouseover event listeners to wrapper element to start auto sliding again
wrapper.addEventListener('mouseleave', autoSlide);