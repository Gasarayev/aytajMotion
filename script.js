const images = [
  'img/smm-6.webp',
  'img/smm3.webp',
  'img/smm2.webp',
  'img/smm5.webp',
  'img/smm-4.webp',
  'img/smm-7.jpg.webp',
  'img/smm-1.jpg.webp'
];

const track = document.getElementById('track');
const intro = document.getElementById('intro');

let x = window.innerWidth;
let setWidth = 0;

// Sürət buradan dəyişir
// böyük rəqəm = daha sürətli
let speed = 1.4;

function createImage(src) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  img.draggable = false;

  // Əgər şəkil tapılmasa, "Poster 6" kimi yazı göstərməsin
  img.onerror = () => {
    img.remove();
    console.warn('Image not found:', src);
  };

  return img;
}

function buildTrack() {
  track.innerHTML = '';

  // 3 dəfə təkrar edirik ki, hərəkət kəsilməsin
  for (let repeat = 0; repeat < 3; repeat++) {
    images.forEach((src) => {
      track.appendChild(createImage(src));
    });
  }
}

function calculateSetWidth() {
  const items = track.children;
  const firstDuplicateIndex = images.length;

  if (items.length > firstDuplicateIndex) {
    setWidth = items[firstDuplicateIndex].offsetLeft - items[0].offsetLeft;
  }
}

function animateSlider() {
  if (!setWidth) {
    calculateSetWidth();
  }

  x -= speed;

  // Bir set tam çıxanda yenidən davamlı şəkildə loop edir
  if (setWidth && x <= -setWidth) {
    x += setWidth;
  }

  track.style.transform = `translateX(${x}px)`;

  requestAnimationFrame(animateSlider);
}

window.addEventListener('load', () => {
  buildTrack();

  setTimeout(() => {
    intro.classList.add('hidden');

    // Şəkillər sağdan başlasın deyə
    x = window.innerWidth;

    calculateSetWidth();
    animateSlider();
  }, 1000);
});

window.addEventListener('resize', () => {
  x = window.innerWidth;
  calculateSetWidth();
});