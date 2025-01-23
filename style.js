// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.querySelector('.particles');

    // Fungsi untuk membuat partikel
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Posisi acak untuk partikel
        const x = Math.random() * 100 - 50 + 'vw';
        const y = Math.random() * 100 - 50 + 'vh';
        particle.style.setProperty('--x', x);
        particle.style.setProperty('--y', y);

        particlesContainer.appendChild(particle);

        // Menghapus partikel setelah animasi selesai
        setTimeout(() => {
            particle.remove();
        }, 5000); // Partikel hilang setelah 5 detik
    }

    // Membuat partikel setiap 100ms
    setInterval(createParticle, 100);
});

const canvas = document.getElementById('runnerCanvas');
const ctx = canvas.getContext('2d');

let runnerX = 0;
let frame = 0;

function drawRunner() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ground
    ctx.fillStyle = '#555';
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);

    // Draw runner (simple stick figure)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(runnerX + 10, canvas.height - 40, 10, 0, Math.PI * 2); // Head
    ctx.fill();

    ctx.fillRect(runnerX + 5, canvas.height - 30, 10, 20); // Body

    // Legs animation
    if (frame % 20 < 10) {
        ctx.beginPath();
        ctx.moveTo(runnerX + 10, canvas.height - 10); // Left leg
        ctx.lineTo(runnerX, canvas.height - 30);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(runnerX + 10, canvas.height - 10); // Right leg
        ctx.lineTo(runnerX + 20, canvas.height - 30);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.moveTo(runnerX + 10, canvas.height - 10); // Right leg
        ctx.lineTo(runnerX, canvas.height - 30);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(runnerX + 10, canvas.height - 10); // Left leg
        ctx.lineTo(runnerX + 20, canvas.height - 30);
        ctx.stroke();
    }

    // Arms animation
    ctx.beginPath();
    ctx.moveTo(runnerX + 5, canvas.height - 30); // Left arm
    ctx.lineTo(runnerX - 5, canvas.height - 40);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(runnerX + 15, canvas.height - 30); // Right arm
    ctx.lineTo(runnerX + 25, canvas.height - 40);
    ctx.stroke();

    // Update runner position
    runnerX += 2;
    if (runnerX > canvas.width) runnerX = -20;

    frame++;
    requestAnimationFrame(drawRunner);
}

// Start animation
drawRunner();

