// Starfield Background
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();
for(let i=0; i<60; i++) { stars.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, r: Math.random()*1.5, d: Math.random()*0.02+0.01 }); }
function drawStars() {
    ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle = "white";
    stars.forEach(s => { ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill(); s.y -= s.d; if(s.y < 0) s.y = canvas.height; });
    requestAnimationFrame(drawStars);
}
drawStars();

// Countdown setup
const target = new Date('August 13, 2026 00:00:00').getTime();
function runCountdown() {
    const delta = target - new Date().getTime();
    const d = Math.floor(delta / (1000*60*60*24));
    const h = Math.floor((delta % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((delta % (1000*60*60)) / (1000*60));
    const s = Math.floor((delta % (1000*60)) / 1000);
    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}
setInterval(runCountdown, 1000); runCountdown();

// Screen Routing Engine (Fades previous screens completely)
function switchScreen(currentId, nextId, callback) {
    gsap.to(currentId, { opacity: 0, duration: 0.4, onComplete: () => {
        const curr = document.querySelector(currentId);
        curr.classList.add('hidden');
        curr.classList.remove('active');
        
        const next = document.querySelector(nextId);
        next.classList.remove('hidden');
        next.classList.add('active');
        gsap.fromTo(nextId, { opacity: 0 }, { opacity: 1, duration: 0.5, onComplete: callback });
    }});
}

// Navigation Events
document.getElementById('open-gift-btn').onclick = () => {
    document.getElementById('bg-music').play().catch(()=>{});
    switchScreen('#screen-1', '#screen-2');
};

document.getElementById('interactive-envelope').onclick = function() {
    this.classList.add('open');
};

document.getElementById('proceed-to-timeline').onclick = (e) => {
    e.stopPropagation();
    switchScreen('#screen-2', '#screen-3');
};

document.getElementById('proceed-to-vault').onclick = () => {
    switchScreen('#screen-3', '#screen-4');
};

const memoryDatabase = {
    pookie: { title: "Pookie Moment", desc: "21/01/2026 at 03:15: 'pookie pookie' term deployment." },
    piggy: { title: "Piggy Debates", desc: "25/02/2026 at 19:13: The absolute definitive animal code integration." }
};
function revealMemory(key) {
    document.getElementById('popup-title').innerText = memoryDatabase[key].title;
    document.getElementById('popup-desc').innerText = memoryDatabase[key].desc;
    document.getElementById('memory-popup').classList.add('active');
}
function closeMemory() { document.getElementById('memory-popup').classList.remove('active'); }

document.getElementById('proceed-to-game').onclick = () => {
    switchScreen('#screen-4', '#screen-6', spawnHearts);
};

// Game Logic
let score = 0;
function spawnHearts() {
    const b = document.getElementById('game-boundary'); b.innerHTML = "";
    for(let i=0; i<5; i++) {
        const h = document.createElement('div'); h.className='target-heart'; h.innerHTML='❤️';
        h.style.left = Math.random()*(b.offsetWidth-30)+'px'; h.style.top = Math.random()*(b.offsetHeight-30)+'px';
        h.onclick = function() {
            this.remove(); score++; document.getElementById('score-counter').innerText = score;
            if(score === 5) { 
                const btn = document.getElementById('proceed-to-cake'); btn.classList.remove('hidden-btn');
            }
        };
        b.appendChild(h);
    }
}

document.getElementById('proceed-to-cake').onclick = () => {
    switchScreen('#screen-6', '#screen-7');
};

// Cake blowout
document.getElementById('birthday-cake').onclick = function() {
    document.getElementById('flame').style.display = 'none';
    initConfetti();
    document.getElementById('proceed-to-promises').classList.remove('hidden-btn');
};

document.getElementById('proceed-to-promises').onclick = () => {
    switchScreen('#screen-7', '#screen-8');
};

document.getElementById('proceed-to-vault-screen').onclick = () => {
    switchScreen('#screen-8', '#screen-9');
};

// Vault validation
document.getElementById('unlock-vault-btn').onclick = () => {
    const pass = document.getElementById('vault-password').value.trim().toLowerCase();
    if(pass === "piggy") {
        switchScreen('#screen-9', '#screen-10');
    } else {
        document.getElementById('vault-error').classList.remove('hidden-btn');
    }
};

// Confetti Setup
function initConfetti() {
    const c = document.getElementById('confetti-canvas'); const cc = c.getContext('2d');
    c.width = window.innerWidth; c.height = window.innerHeight;
    let p = []; for(let i=0; i<100; i++) p.push({x:Math.random()*c.width, y:Math.random()*c.height-c.height, r:Math.random()*5+3, d:Math.random()*3+2});
    function draw() {
        cc.clearRect(0,0,c.width,c.height); cc.fillStyle="pink";
        let active = false;
        p.forEach(part => { if(part.y < c.height) { active=true; part.y+=part.d; cc.beginPath(); cc.arc(part.x, part.y, part.r, 0, Math.PI*2); cc.fill(); } });
        if(active) requestAnimationFrame(draw);
    }
    draw();
}
// Replace your old proceed-to-vault click routing logic near the middle with this:
document.getElementById('proceed-to-vault').onclick = () => {
    switchScreen('#screen-3', '#screen-soundboard');
};

document.getElementById('proceed-to-vault-from-sb').onclick = () => {
    switchScreen('#screen-soundboard', '#screen-4');
};

// --- 🤖 HIGH-TECH PURVIGPT SEMANTIC CHAT SEARCH ENGINE ---
// Explicit clean tracking mapping database extracted completely from your chat logs
const chatLogsDatabase = [
    { text: "Kal father s baat krne chlteee hain... Islie isko ksi aur date p rkhwate hain...", date: "30 Jul 2025", sender: "Akshat" },
    { text: "Tere house me na mai captain tko hi maanta hu... Maaaii to hu na!! 🫱🏻‍🫲🏼", date: "30 Jul 2025", sender: "Akshat" },
    { text: "Aree me sab kar sakti hu but I need self respect atleast... Busy itne hu ke depression ka time hee nahi hai", date: "18 Aug 2025", sender: "Poorvi" },
    { text: "To be honest Poori! Tuu naa sbse zyda deserving house Captain hai... sachme Beta", date: "18 Aug 2025", sender: "Akshat" },
    { text: "We guys had unbreakable bond 🩵", date: "25 Dec 2025", sender: "Akshat" },
    { text: "Mko Itna maan lete hain 💔🎀💫pr abb mai 😭sif tera Na 🙏🏻🙏🏻booked forever", date: "26 Jan 2026", sender: "Akshat" },
    { text: "Yayyyyyyyyyyy..... Dinasourrrrrrrrrr Rex 🦖👻👻", date: "26 Jan 2026", sender: "Poorvi" },
    { text: "Nahhh... Rabbit hu mai 👻... Piggo layout dropped permanently!", date: "25 Feb 2026", sender: "Poorvi" }
];

const searchBtn = document.getElementById('gpt-search-btn');
const queryInput = document.getElementById('gpt-query');
const resultsBox = document.getElementById('gpt-results-box');

searchBtn.addEventListener('click', runChatSearch);
queryInput.addEventListener('keypress', function(e) { if(e.key === 'Enter') runChatSearch(); });

function runChatSearch() {
    const rawQuery = queryInput.value.trim().toLowerCase();
    if(!rawQuery) return;

    // Filter array algorithm parsing string match rules
    const matches = chatLogsDatabase.filter(log => log.text.toLowerCase().includes(rawQuery));
    
    resultsBox.innerHTML = ""; // Empty output viewport
    resultsBox.classList.remove('hidden');

    if(matches.length === 0) {
        resultsBox.innerHTML = `<p class="no-results-msg">"PurviGPT couldn't find any direct match for '${rawQuery}'. Try keywords like bond, booked, or house!"</p>`;
        return;
    }

    // Render formatted output bubbles into target element wrapper
    matches.forEach(log => {
        const bubbleWrap = document.createElement('div');
        const isAkshat = log.sender === "Akshat";
        bubbleWrap.className = `chat-bubble ${isAkshat ? 'left-bubble' : 'right-bubble'}`;
        bubbleWrap.style.maxWidth = "100%";
        
        bubbleWrap.innerHTML = `
            <p class="sender-name" style="font-size:0.55rem;">${log.sender} | ${log.date}</p>
            <p class="message-text">${log.text}</p>
        `;
        resultsBox.appendChild(bubbleWrap);
    });
}

// --- 🎵 MULTI-TRACK SOUNDBOARD MIXER FUNCTION ---
let currentPlayingAudio = null;

function playVoice(id) {
    // Stop currently running tracks to prevent audio stacking mesh
    if(currentPlayingAudio) {
        currentPlayingAudio.pause();
        currentPlayingAudio.currentTime = 0;
    }
    
    const targetAudio = document.getElementById(id);
    if(targetAudio) {
        targetAudio.play().catch(e => console.log("Audio file initialization missing: ", e));
        currentPlayingAudio = targetAudio;
    }
}
