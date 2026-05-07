const images = [
  'img/smm-6.png',
  'img/smm3.png',
  'img/smm2.png',
  'img/smm5.png',
  'img/smm-4.png',
  'img/smm-7.png',
  'img/smm-1.jpg.jpeg'
];

const track = document.getElementById('track');
const intro = document.getElementById('intro');

function createSliderImages() {
  track.innerHTML = '';

  // Birinci set
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Poster ${index + 1}`;
    track.appendChild(img);
  });

  // Loop-un kəsilməməsi üçün eyni seti təkrar əlavə edirik
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Poster duplicate ${index + 1}`;
    track.appendChild(img);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  createSliderImages();

  setTimeout(() => {
    intro.classList.add('hidden');
  }, 1000);
});