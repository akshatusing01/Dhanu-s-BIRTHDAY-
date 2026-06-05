// --- 1. Interactive Starfield Canvas Engine ---
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 120;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Initializing star coordinates & speed metrics
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        velocity: Math.random() * 0.05 + 0.02,
        alpha: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < numStars; i++) {
        let s = stars[i];
        
        // Twinkle factor update
        s.alpha += s.twinkleSpeed;
        if (s.alpha > 1 || s.alpha < 0.1) {
            s.twinkleSpeed = -s.twinkleSpeed;
        }
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.random() * Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fill();
        
        // Soft drifting upward movement
        s.y -= s.velocity;
        if (s.y < 0) {
            s.y = canvas.height;
            s.x = Math.random() * canvas.width;
        }
    }
    requestAnimationFrame(animateStars);
}
animateStars();


// --- 2. Live Precision Countdown Engine ---
// Target Milestone: Poorvi's Birthday - August 13, 2026
const targetDate = new Date('August 13, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Injecting values with zero-padded string safety
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

    // Handle countdown completion edge case
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-headline').innerText = "The Wait Is Over! ✨";
        document.getElementById('countdown').innerHTML = "<div class='time-box'><span style='font-size:2rem; width:100%; font-family:var(--font-romantic)'>Happy Birthday Poorvi! ❤️</span></div>";
    }
}
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


// --- 3. Interactive Audio & Transition Initialization ---
const openBtn = document.getElementById('open-gift-btn');
const audio = document.getElementById('bg-music');

openBtn.addEventListener('click', () => {
    // Attempting to trigger background music to bypass standard browser auto-play blockers
    audio.play().then(() => {
        console.log("Audio pipeline initialized successfully.");
    }).catch(error => {
        console.log("Audio playback blocked or file missing: ", error);
    });

    // Alert transition feedback hook
    alert("✨ Phase 1 Successful! The musical timeline is connected. Let's start coding Phase 2 to reveal your WhatsApp Story Timeline!");
});
// Locate your existing proceedBtn event block at the bottom and replace it with this:
proceedBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Stops the envelope overlay from resetting unexpectedly
    
    // Transition Screen 2 to Screen 3 smoothly using GSAP
    gsap.to("#screen-2", {
        opacity: 0,
        y: -30,
        duration: 0.5,
        onComplete: () => {
            screen2.classList.add('hidden');
            
            const screen3 = document.getElementById('screen-3');
            screen3.classList.remove('hidden');
            
            // Bring the timeline screen into view gently
            gsap.fromTo("#screen-3", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
        }
    });
});

// Listener placeholder for our upcoming features step
document.getElementById('proceed-to-vault').addEventListener('click', () => {
    alert("🎉 Phase 2 Complete! The timeline is locked in. Let's design Phase 3 next to unlock the Nickname Scrapbook & Game Center!");
});
// Locate your existing proceedBtn event block at the bottom and replace it with this:
proceedBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Stops the envelope overlay from resetting unexpectedly
    
    // Transition Screen 2 to Screen 3 smoothly using GSAP
    gsap.to("#screen-2", {
        opacity: 0,
        y: -30,
        duration: 0.5,
        onComplete: () => {
            screen2.classList.add('hidden');
            
            const screen3 = document.getElementById('screen-3');
            screen3.classList.remove('hidden');
            
            // Bring the timeline screen into view gently
            gsap.fromTo("#screen-3", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
        }
    });
});

// Listener placeholder for our upcoming features step
document.getElementById('proceed-to-vault').addEventListener('click', () => {
    alert("🎉 Phase 2 Complete! The timeline is locked in. Let's design Phase 3 next to unlock the Nickname Scrapbook & Game Center!");
});
