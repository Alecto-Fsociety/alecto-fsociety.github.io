// Matrix rain background animation
const canvas = document.querySelector('.matrix');
const ctx = canvas.getContext('2d');

function resizeMatrixCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeMatrixCanvas();

window.addEventListener('resize', resizeMatrixCanvas);

const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let columns = Math.floor(canvas.width / 20);
let drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ffcc';
    ctx.font = '20px monospace';

    for (let x = 0; x < columns; x++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, x * 20, drops[x] * 20);

        if (drops[x] * 20 > canvas.height && Math.random() > 0.975) {
            drops[x] = 0;
        }
        drops[x]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    columns = Math.floor(canvas.width / 20);
    drops = Array(columns).fill(1);
});

// Language switcher
document.addEventListener('DOMContentLoaded', function () {
    const jaBtn = document.getElementById('ja-btn');
    const enBtn = document.getElementById('en-btn');
    // すべての「lang-content」クラスのうちja/en対象を明示的に取得
    const jaContents = document.querySelectorAll(
      '.lang-content#portfolio-ja, .lang-content#aboutme-ja, .lang-content#about-title-ja'
    );
    const enContents = document.querySelectorAll(
      '.lang-content#portfolio-en, .lang-content#aboutme-en, .lang-content#about-title-en'
    );

    function setLang(lang) {
        if (lang === 'ja') {
            jaContents.forEach(el => el.style.display = '');
            enContents.forEach(el => el.style.display = 'none');
            jaBtn.classList.add('active');
            enBtn.classList.remove('active');
        } else {
            jaContents.forEach(el => el.style.display = 'none');
            enContents.forEach(el => el.style.display = '');
            jaBtn.classList.remove('active');
            enBtn.classList.add('active');
        }
    }

    jaBtn.addEventListener('click', () => setLang('ja'));
    enBtn.addEventListener('click', () => setLang('en'));
});
