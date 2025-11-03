import './style.css'

const surpriseBtn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');
const confettiContainer = document.getElementById('confetti');

function createConfetti() {
  const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ee5a6f'];
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 5000);
}

surpriseBtn.addEventListener('click', () => {
  if (surprise.classList.contains('hidden')) {
    surprise.classList.remove('hidden');
    surpriseBtn.textContent = 'Спасибо! ❤️';
    createConfetti();
  } else {
    surprise.classList.add('hidden');
    surpriseBtn.textContent = 'Нажми на сюрприз!';
  }
});

createConfetti();

setInterval(() => {
  createConfetti();
}, 15000);

const galleryImages = document.querySelectorAll('.gallery-cat');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    img.style.animation = 'none';
    setTimeout(() => {
      img.style.animation = 'pulse 0.5s ease';
    }, 10);

    createConfetti();
  });
});
