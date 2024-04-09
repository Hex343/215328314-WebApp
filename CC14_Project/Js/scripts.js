// Tribute Page JavaScript

// Example: Changing image source and caption on click
const image = document.getElementById('');
const imgCaption = document.getElementById('img-caption');

image.addEventListener('click', function() {
  if (image.src.includes('image.jpg')) {
    image.src = 'new_image.jpg';
    imgCaption.textContent = 'New Image Caption';
  } else {
    image.src = 'image.jpg';
    imgCaption.textContent = 'Image Caption';
  }
});
