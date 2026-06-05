// --- Particle Drift Engine ---
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

for(let i=0; i<100; i++) {
    stars.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*1.2 + 0.3,
        d: Math.random()*0.04 + 0.01
    });
}

function drawStars() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fill();
        s.y -= s.d;
        if(s.y < 0) s.y = canvas.height;
    });
    requestAnimationFrame(drawStars);
}
drawStars();

// --- Live Birthday Countdown ---
const target = new Date('August 13, 2026 00:00:00').getTime();

function runCountdown() {
    const delta = target - new Date().getTime();
    const d = Math.floor(delta / (1000*60*60*24));
    const h = Math.floor((delta % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((delta % (1000*60*60)) / (1000*60));
    const s = Math.floor((delta % (1000*60)) / 1000);

    document.getElementById('days').innerText = d < 10 ? '0'+d : d;
    document.getElementById('hours').innerText = h < 10 ? '0'+h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0'+m : m;
    document.getElementById('seconds').innerText = s < 10 ? '0'+s : s;
}
setInterval(runCountdown, 1000);
runCountdown();

// --- Navigation & Interactive Animations Core ---
const openGiftBtn = document.getElementById('open-gift-btn');
const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const audioTrack = document.getElementById('bg-music');
const envelope = document.getElementById('interactive-envelope');
const proceedBtn = document.getElementById('proceed-to-timeline');

// Transition: Screen 1 to Screen 2 via GSAP
openGiftBtn.addEventListener('click', () => {
    // Audio playback activation
    audioTrack.play().catch(() => console.log("Audio file initialization pending. Ensure music.mp3 exists."));

    // Smoothly fade screen 1 using GSAP animation engine
    gsap.to("#screen-1", {
        opacity: 0,
        y: -30,
        duration: 0.6,
        onComplete: () => {
            screen1.classList.add('hidden');
            screen2.classList.remove('hidden');
            // Fade Screen 2 into visibility smoothly
            gsap.fromTo("#screen-2", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 });
        }
    });
});

// Trigger Flap Opening & Unfolding Card Layout
envelope.addEventListener('click', function() {
    if (!this.classList.contains('open')) {
        this.classList.add('open');
        // Hide tap instructions smoothly
        gsap.to(".tap-instruction", { opacity: 0, duration: 0.3 });
    }
});

// Move into the upcoming chapters layout
proceedBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Block envelope overlay reset
    alert("✉️ Letter read successfully! Let's build Screen 3 next to reveal the Timeline Track!");
});
