const carousel = document.getElementById("carousel");
const imageContainer = document.getElementById('carousel-image-container');
const prevButton = document.getElementById('carousel-previous-btn');
const nextButton = document.getElementById('carousel-next-btn');

let images = [
  'images/roadbook/roadbook_login.jpg',
  'images/roadbook/roadbook_register.jpg',
  'images/roadbook/roadbook_home.jpg',
  'images/roadbook/roadbook_drive_stop.jpg',
  'images/roadbook/roadbook_history.jpg',
  'images/roadbook/roadbook_history_details.jpg',
  'images/roadbook/roadbook_acquisition.jpg',
  'images/roadbook/roadbook_profile.jpg',
];
let currentImageIndex = 3;

const imageIntervalHandler = setInterval(() => {
  nextIndex();
  updateImage();
}, 4000);

prevButton.addEventListener('click', () => {
  clearInterval(imageIntervalHandler);
  prevIndex();
  updateImage();
});

nextButton.addEventListener('click', () => {
  clearInterval(imageIntervalHandler);
  nextIndex();
  updateImage();
});

function nextIndex() {
  currentImageIndex = currentImageIndex >= images.length - 1 ? 0 : currentImageIndex + 1;
}

function prevIndex() {
  currentImageIndex = currentImageIndex <= 0 ? images.length - 1 : currentImageIndex - 1;
}

function updateImage() {
  imageContainer.style.opacity = 0.5;
  setTimeout(() => {
    imageContainer.style.opacity = 1;
    imageContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
  }, 200);
}