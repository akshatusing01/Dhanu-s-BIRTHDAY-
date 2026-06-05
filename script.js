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
// --- 1. The Dynamic Nickname Memory Mapping Data ---
const memoryDatabase = {
    poori: {
        title: "The Poori Misra Legacy 🫓",
        desc: "First deployed by Akshat on 08/08/2025 at 19:57 right after an intensive school project block. A playful, definitive spin on your official name that set the foundation for dropping formal prefixes entirely."
    },
    pookie: {
        title: "The Midnight 3AM Outpouring 🎀🐥",
        desc: "Unsealed on 21/01/2026 at 03:15 AM. Following a highly stressful school cycle, formal filters melted away completely to reveal total, unconditional appreciation: 'itta pyaar aara mko... pookie pookie'."
    },
    piggy: {
        title: "The Great Rabbit Rejection 🐷",
        desc: "Codified on 25/02/2026 at 19:13. Akshat dropped the definitive animal tags 'Piggo' and 'Piggy'. You immediately tried to claim defensive alternative totems ('Nahhh... Rabbit hu mai 👻'), but the pig layout won permanently!"
    },
    dino: {
        title: "The Morning Routine Dinosaur Roar Rex 🦖",
        desc: "Claimed with massive morning energy on 30/01/2026 at 08:47. You blew up the log feed with extended roaring text markers because Akshat managed to beat his standard routine timings and get ready early."
    }
};

function revealMemory(key) {
    const data = memoryDatabase[key];
    document.getElementById('popup-title').innerText = data.title;
    document.getElementById('popup-desc').innerText = data.desc;
    document.getElementById('memory-popup').classList.add('active');
}

function closeMemory() {
    document.getElementById('memory-popup').classList.remove('active');
}

// --- 2. Screen 5: Custom Dynamic Reasons Engine ---
const personalizedReasons = [
    "The complete sincerity and dedication you bring to your work as house captain.",
    "The fact that no matter how stressful things get, you find time to balance it out.",
    "Your classic defense phrase 'Bikul dafa ho jao... Nazar mtt aana' when handling deep affection.",
    "How you consistently choose to stay up or balance your schedule just to maintain synchronization.",
    "The rare clarity you have when giving deep life advice during late-night discussion windows."
];
let currentReasonIndex = 0;

document.getElementById('next-reason-btn').addEventListener('click', () => {
    currentReasonIndex = (currentReasonIndex + 1) % personalizedReasons.length;
    document.getElementById('current-reason').style.opacity = 0;
    
    setTimeout(() => {
        document.getElementById('current-reason').innerText = `"${personalizedReasons[currentReasonIndex]}"`;
        document.getElementById('current-reason').style.opacity = 1;
    }, 200);
});

// --- 3. Screen Navigation Routing Connectors ---
document.getElementById('proceed-to-vault').onclick = () => {
    gsap.to("#screen-3", { opacity: 0, y: -30, duration: 0.5, onComplete: () => {
        document.getElementById('screen-3').classList.add('hidden');
        document.getElementById('screen-4').classList.remove('hidden');
        gsap.fromTo("#screen-4", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
    }});
};

document.getElementById('proceed-to-game').onclick = () => {
    gsap.to("#screen-4", { opacity: 0, y: -30, duration: 0.5, onComplete: () => {
        document.getElementById('screen-4').classList.add('hidden');
        document.getElementById('screen-6').classList.remove('hidden');
        gsap.fromTo("#screen-6", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, onComplete: spawnHearts });
    }});
};

// --- 4. Screen 6: Interactive Heart Target Generation Loop ---
let collectedHeartsCount = 0;
const totalTargetHearts = 5;

function spawnHearts() {
    const boundary = document.getElementById('game-boundary');
    boundary.innerHTML = ""; // Clear pool safety checks
    
    for (let i = 0; i < totalTargetHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'target-heart';
        heart.innerHTML = '❤️';
        
        // Randomly scatter elements safely within the grid container boundaries
        const xPos = Math.random() * (boundary.offsetWidth - 40);
        const yPos = Math.random() * (boundary.offsetHeight - 40);
        
        heart.style.left = `${xPos}px`;
        heart.style.top = `${yPos}px`;
        
        // Add random staggered delay rates to float configurations
        heart.style.animationDelay = `${Math.random() * 2}s`;
        
        // Interaction tap registration hook
        heart.addEventListener('click', function() {
            if (!this.classList.contains('clicked')) {
                this.classList.add('clicked');
                collectedHeartsCount++;
                document.getElementById('score-counter').innerText = collectedHeartsCount;
                
                // Pop animation effect via GSAP
                gsap.to(this, { scale: 0, opacity: 0, duration: 0.3, onComplete: () => this.remove() });
                
                if (collectedHeartsCount === totalTargetHearts) {
                    document.getElementById('proceed-to-cake').classList.remove('hidden-btn');
                    gsap.fromTo("#proceed-to-cake", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 });
                }
            }
        });
        boundary.appendChild(heart);
    }
}

// Connector hook for upcoming finale phase sequence
document.getElementById('proceed-to-cake').onclick = () => {
    alert("🎂 Minigame Concluded! Let's enter Phase 4 next to unseal the Virtual Cake and Deploy Live to GitHub Pages!");
};
// Replace your old proceed-to-cake listener at the bottom with this:
document.getElementById('proceed-to-cake').onclick = () => {
    gsap.to("#screen-6", { opacity: 0, y: -30, duration: 0.5, onComplete: () => {
        document.getElementById('screen-6').classList.add('hidden');
        document.getElementById('screen-7').classList.remove('hidden');
        gsap.fromTo("#screen-7", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
    }});
};

// --- 1. Screen 7: Interactive Blow Out Candle Flame Event ---
const cake = document.getElementById('birthday-cake');
cake.addEventListener('click', () => {
    const flame = document.getElementById('flame');
    if (flame.style.display !== 'none') {
        flame.style.display = 'none'; // Snuff flame graphics
        
        // Trigger Full Screen Canvas Confetti Engine
        initConfetti();
        
        // Show navigation button to advance screens
        const nextBtn = document.getElementById('proceed-to-promises');
        nextBtn.classList.remove('hidden-btn');
        gsap.fromTo("#proceed-to-promises", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 });
    }
});

// --- 2. Screen 7 & 8 Router Links ---
document.getElementById('proceed-to-promises').onclick = () => {
    gsap.to("#screen-7", { opacity: 0, y: -30, duration: 0.5, onComplete: () => {
        document.getElementById('screen-7').classList.add('hidden');
        document.getElementById('screen-8').classList.remove('hidden');
        gsap.fromTo("#screen-8", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
    }});
};

document.getElementById('proceed-to-vault-screen').onclick = () => {
    gsap.to("#screen-8", { opacity: 0, y: -30, duration: 0.5, onComplete: () => {
        document.getElementById('screen-8').classList.add('hidden');
        document.getElementById('screen-9').classList.remove('hidden');
        gsap.fromTo("#screen-9", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
    }});
};

// --- 3. Screen 9: Custom Vault Validation Engine ---
document.getElementById('unlock-vault-btn').onclick = () => {
    const inputVal = document.getElementById('vault-password').value.trim().toLowerCase();
    
    // The Password answer is piggy matching the definitive 25/02 inside joke threshold
    if(inputVal === "piggy" || inputVal === "piggo") {
        document.getElementById('vault-error').classList.add('hidden-btn');
        gsap.to("#screen-9", { opacity: 0, scale: 0.9, duration: 0.5, onComplete: () => {
            document.getElementById('screen-9').classList.add('hidden');
            document.getElementById('screen-10').classList.remove('hidden');
            gsap.fromTo("#screen-10", { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.2 });
        }});
    } else {
        document.getElementById('vault-error').classList.remove('hidden-btn');
    }
};

// --- 4. Canvas Confetti Particle Engine ---
const cCanvas = document.getElementById('confetti-canvas');
const cCtx = cCanvas.getContext('2d');
let confettiPieces = [];

function initConfetti() {
    cCanvas.width = window.innerWidth;
    cCanvas.height = window.innerHeight;
    
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * cCanvas.width,
            y: Math.random() * cCanvas.height - cCanvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * cCanvas.height * 0.015 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 65%)`,
            tilt: Math.random() * 10 - 5
        });
    }
    animateConfetti();
}

function animateConfetti() {
    cCtx.clearRect(0, 0, cCanvas.width, cCanvas.height);
    let activeParticles = false;
    
    confettiPieces.forEach(p => {
        if (p.y < cCanvas.height) {
            activeParticles = true;
            p.y += p.d;
            p.x += p.tilt;
            
            cCtx.beginPath();
            cCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            cCtx.fillStyle = p.color;
            cCtx.fill();
        }
    });
    
    if (activeParticles) {
        requestAnimationFrame(animateConfetti);
    } else {
        cCtx.clearRect(0, 0, cCanvas.width, cCanvas.height); // Post-render clean up canvas buffer bounds
    }
}
