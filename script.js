const timelineContainers = document.querySelectorAll('.container');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-viewport');
      observer.unobserve(entry.target);
    }
  });
});

timelineContainers.forEach((container) => {
  observer.observe(container);
});

const imageShifter = document.getElementById('imageShifter');
const imageUrls = [
    'https://shorturl.at/estIS',
    'https://shorturl.at/estIS',
    'https://shorturl.at/estIS',
    // Add more image URLs as needed
];

let currentImageIndex = 0;

function shiftImage() {
    imageShifter.style.opacity = 0; // Fade out the current image

    setTimeout(() => {
        imageShifter.src = imageUrls[currentImageIndex]; // Change the image source
        imageShifter.style.opacity = 1; // Fade in the new image
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    }, 500); // Adjust the delay (in milliseconds) as needed
}

// Set the initial image
shiftImage();

// Start the image shifting at a regular interval (e.g., every 5 seconds)
setInterval(shiftImage, 5000); // Change the interval as needed