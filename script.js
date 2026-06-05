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
/* ================= SCREEN 3: TIMELINE ARCHITECTURE ================= */
.site-screen.scrollable {
    overflow-y: auto;
    display: block; /* Allows natural layout flow for scrolling */
    height: 100%;
}

/* Custom scrollbar to keep things stylish */
.site-screen.scrollable::-webkit-scrollbar {
    width: 6px;
}
.site-screen.scrollable::-webkit-scrollbar-thumb {
    background: var(--romantic-pink);
    border-radius: 10px;
}

.timeline-container {
    max-width: 850px;
    margin: 0 auto;
    padding: 4rem 1rem;
    position: relative;
}

.timeline-header {
    text-align: center;
    margin-bottom: 4rem;
}

.timeline-icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 0.5rem;
}

.timeline-header h2 {
    font-family: 'Dancing Script', cursive;
    font-size: 3.5rem;
    color: #fff;
}

.timeline-header p {
    color: #a49fbf;
    font-size: 0.95rem;
}

/* The Core Vertical Spine */
.timeline-line {
    position: absolute;
    left: 50%;
    top: 180px;
    bottom: 120px;
    width: 2px;
    background: linear-gradient(to bottom, transparent, var(--romantic-pink), var(--gold), transparent);
    transform: translateX(-50%);
}

/* Individual Timeline Rows */
.timeline-item {
    position: relative;
    width: 50%;
    margin-bottom: 3.5rem;
    display: flex;
}

.timeline-item.left {
    left: 0;
    padding-right: 3rem;
    justify-content: flex-end;
}

.timeline-item.right {
    left: 50%;
    padding-left: 3rem;
    justify-content: flex-start;
}

/* Center Nodes */
.timeline-dot {
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: var(--bg-midnight);
    border: 3px solid var(--gold);
    border-radius: 50%;
    top: 25px;
    z-index: 4;
}

.timeline-item.left .timeline-dot { right: -7px; }
.timeline-item.right .timeline-dot { left: -7px; }

/* Memory Display Cards */
.glass-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1.8rem;
    border-radius: 20px;
    width: 100%;
    max-width: 380px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}

.item-date {
    font-size: 0.75rem;
    color: var(--romantic-pink);
    font-weight: 600;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 0.4rem;
}

.glass-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    color: #fff;
}

.context-text {
    font-size: 0.8rem;
    color: #b3aed2;
    line-height: 1.5;
    margin-bottom: 1.2rem;
}

/* WhatsApp-Style Conversational Interface */
.chat-bubble {
    padding: 0.75rem 1rem;
    border-radius: 14px;
    margin-bottom: 0.6rem;
    max-width: 90%;
    font-size: 0.82rem;
    line-height: 1.4;
    box-shadow: 0 3px 10px rgba(0,0,0,0.15);
}

.left-bubble {
    background-color: #26163a;
    border-left: 3px solid var(--romantic-pink);
    margin-right: auto;
}

.right-bubble {
    background-color: #17263c;
    border-left: 3px solid #3a86ff;
    margin-left: auto;
}

.sender-name {
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.15rem;
    color: var(--gold);
}

.inside-joke-badge {
    display: inline-block;
    font-size: 0.7rem;
    background: rgba(255, 215, 0, 0.1);
    color: var(--gold);
    padding: 0.25rem 0.6rem;
    border-radius: 6px;
    margin-top: 0.5rem;
    font-weight: 500;
}

.timeline-footer {
    text-align: center;
    margin-top: 4rem;
    width: 100%;
}

/* Mobile Responsiveness for Scrolling Components */
@media (max-width: 768px) {
    .timeline-line { left: 20px; }
    .timeline-item { width: 100%; left: 0 !important; padding-left: 2.5rem !important; padding-right: 0 !important; }
    .timeline-dot { left: 14px !important; }
    .glass-card { max-width: 100%; }
}
