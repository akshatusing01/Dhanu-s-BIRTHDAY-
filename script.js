// Ensure standard execution context
document.addEventListener("DOMContentLoaded", function() {

    // 1. Starfield Background Logic
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let stars = [];
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize); resize();
    for(let i=0; i<45; i++) { stars.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, r: Math.random()*1.2, d: Math.random()*0.02+0.01 }); }
    function drawStars() {
        ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle = "white";
        stars.forEach(s => { ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill(); s.y -= s.d; if(s.y < 0) s.y = canvas.height; });
        requestAnimationFrame(drawStars);
    }
    drawStars();

    // 2. Countdown Engine Fix (Targeting August 13)
    const target = new Date('August 13, 2026 00:00:00').getTime();
    function runCountdown() {
        const now = new Date().getTime();
        const delta = target - now;
        
        const d = Math.max(0, Math.floor(delta / (1000*60*60*24)));
        const h = Math.max(0, Math.floor((delta % (1000*60*60*24)) / (1000*60*60)));
        const m = Math.max(0, Math.floor((delta % (1000*60*60)) / (1000*60)));
        const s = Math.max(0, Math.floor((delta % (1000*60)) / 1000));
        
        document.getElementById('days').innerText = d < 10 ? '0'+d : d;
        document.getElementById('hours').innerText = h < 10 ? '0'+h : h;
        document.getElementById('minutes').innerText = m < 10 ? '0'+m : m;
        document.getElementById('seconds').innerText = s < 10 ? '0'+s : s;
    }
    setInterval(runCountdown, 1000); runCountdown();

    // 3. Robust View Transition Routing Engine
    function switchScreen(currentSelector, nextSelector, callback) {
        gsap.to(currentSelector, { opacity: 0, duration: 0.2, onComplete: () => {
            const curr = document.querySelector(currentSelector);
            if(curr) { curr.classList.add('hidden'); curr.classList.remove('active'); }
            
            const next = document.querySelector(nextSelector);
            if(next) {
                next.classList.remove('hidden');
                next.classList.add('active');
                gsap.fromTo(nextSelector, { opacity: 0 }, { opacity: 1, duration: 0.3, onComplete: callback });
            }
        }});
    }

    // 4. Stable Button Event Binding Operations
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

    document.getElementById('proceed-to-soundboard').onclick = () => {
        switchScreen('#screen-3', '#screen-soundboard');
    };

    document.getElementById('proceed-to-vault').onclick = () => {
        switchScreen('#screen-soundboard', '#screen-4');
    };

    document.getElementById('proceed-to-game').onclick = () => {
        switchScreen('#screen-4', '#screen-5', spawnHearts);
    };

    document.getElementById('proceed-to-cake').onclick = () => {
        switchScreen('#screen-5', '#screen-6');
    };

    document.getElementById('proceed-to-promises').onclick = () => {
        switchScreen('#screen-6', '#screen-7');
    };

    document.getElementById('proceed-to-vault-screen').onclick = () => {
        switchScreen('#screen-7', '#screen-8');
    };

    // 5. PurviGPT Database Engine Mapping Array
    const chatLogsDatabase = [
        { text: "Kal father s baat krne chlteee hain... Islie isko ksi aur date p rkhwate hain...", date: "30 Jul 2025", sender: "Akshat" },
        { text: "Tere house me na mai captain tko hi maanta hu... Maaaii to hu na!! 🫱🏻‍🫲🏼", date: "30 Jul 2025", sender: "Akshat" },
        { text: "Busy itne hu ke depression ka time hee nahi hai", date: "18 Aug 2025", sender: "Poorvi" },
        { text: "To be honest Poori! Tuu naa sbse zyda deserving house Captain hai...", date: "18 Aug 2025", sender: "Akshat" },
        { text: "We guys had unbreakable bond 🩵", date: "25 Dec 2025", sender: "Akshat" },
        { text: "sif tera Na 🙏🏻... booked forever", date: "26 Jan 2026", sender: "Akshat" },
        { text: "Rabbit hu mai 👻... Piggy layout dropped permanently!", date: "25 Feb 2026", sender: "Poorvi" }
    ];

    const searchBtn = document.getElementById('gpt-search-btn');
    const queryInput = document.getElementById('gpt-query');
    const resultsBox = document.getElementById('gpt-results-box');

    if(searchBtn) {
        searchBtn.onclick = () => {
            const val = queryInput.value.trim().toLowerCase();
            if(!val) return;
            const matches = chatLogsDatabase.filter(l => l.text.toLowerCase().includes(val));
            resultsBox.innerHTML = "";
            resultsBox.classList.remove('hidden');
            if(matches.length === 0) {
                resultsBox.innerHTML = `<p class="no-results-msg">No entries found for "${val}".</p>`;
                return;
            }
            matches.forEach(m => {
                const b = document.createElement('div');
                b.className = `chat-bubble ${m.sender === 'Akshat' ? 'left-bubble' : 'right-bubble'}`;
                b.innerHTML = `<p class="sender-name">${m.sender} | ${m.date}</p><p class="message-text">${m.text}</p>`;
                resultsBox.appendChild(b);
            });
        };
    }

    // 6. Soundboard Event Listeners
    let activeVoice = null;
    function mixVoice(id) {
        if(activeVoice) { activeVoice.pause(); activeVoice.currentTime = 0; }
        const track = document.getElementById(id);
        if(track) { track.play().catch(()=>{}); activeVoice = track; }
    }
    document.getElementById('sb-card-1').onclick = () => mixVoice('audio1');
    document.getElementById('sb-card-2').onclick = () => mixVoice('audio2');

    // 7. Nickname Polaroid Popup Bindings
    const memoryData = {
        pookie: { title: "Pookie Deployment 🎀", desc: "Official code registration logged at midnight." },
        piggy: { title: "The Piggy Debate 🐷", desc: "Long-standing historical animal totem argument logs." }
    };
    document.getElementById('polaroid-pookie').onclick = () => {
        document.getElementById('popup-title').innerText = memoryData.pookie.title;
        document.getElementById('popup-desc').innerText = memoryData.pookie.desc;
        document.getElementById('memory-popup').classList.add('active');
    };
    document.getElementById('polaroid-piggy').onclick = () => {
        document.getElementById('popup-title').innerText = memoryData.piggy.title;
        document.getElementById('popup-desc').innerText = memoryData.piggy.desc;
        document.getElementById('memory-popup').classList.add('active');
    };
    document.getElementById('close-popup-btn').onclick = () => {
        document.getElementById('memory-popup').classList.remove('active');
    };

    // 8. Minigame Mechanics
    let gameScore = 0;
    function spawnHearts() {
        const boundary = document.getElementById('game-boundary');
        boundary.innerHTML = ""; gameScore = 0;
        document.getElementById('score-counter').innerText = 0;
        for(let i=0; i<5; i++) {
            const h = document.createElement('div'); h.className = 'target-heart'; h.innerHTML = '❤️';
            h.style.left = Math.random() * (boundary.offsetWidth - 35) + 'px';
            h.style.top = Math.random() * (boundary.offsetHeight - 35) + 'px';
            h.onclick = function() {
                this.remove(); gameScore++;
                document.getElementById('score-counter').innerText = gameScore;
                if(gameScore === 5) { document.getElementById('proceed-to-cake').classList.remove('hidden-btn'); }
            };
            boundary.appendChild(h);
        }
    }

    // 9. Cake Blowing Interaction System
    document.getElementById('birthday-cake').onclick = function() {
        document.getElementById('flame').style.display = 'none';
        initConfetti();
        document.getElementById('proceed-to-promises').classList.remove('hidden-btn');
    };

    // 10. Vault Authentication Code Validations
    document.getElementById('unlock-vault-btn').onclick = () => {
        const p = document.getElementById('vault-password').value.trim().toLowerCase();
        if(p === "piggy") {
            switchScreen('#screen-8', '#screen-9');
        } else {
            document.getElementById('vault-error').classList.remove('hidden-btn');
        }
    };

    // 11. Confetti Effects Canvas Render
    function initConfetti() {
        const c = document.getElementById('confetti-canvas'); const cc = c.getContext('2d');
        c.width = window.innerWidth; c.height = window.innerHeight;
        let p = []; for(let i=0; i<60; i++) p.push({x:Math.random()*c.width, y:Math.random()*c.height-c.height, r:Math.random()*4+2, d:Math.random()*2+2});
        function draw() {
            cc.clearRect(0,0,c.width,c.height); cc.fillStyle="#ff758f"; let alive = false;
            p.forEach(part => { if(part.y < c.height) { alive=true; part.y+=part.d; cc.beginPath(); cc.arc(part.x, part.y, part.r, 0, Math.PI*2); cc.fill(); } });
            if(alive) requestAnimationFrame(draw);
        }
        draw();
    }
});
// Paste these new logic sets directly inside your DOMContentLoaded block in script.js

// 1. Updated Screen Routing Links for the new Flow Sequence
document.getElementById('proceed-to-reasons').onclick = () => {
    switchScreen('#screen-4', '#screen-reasons');
};

document.getElementById('proceed-to-game').onclick = () => {
    switchScreen('#screen-reasons', '#screen-5', spawnHearts); 
    // Triggers heart game engine exactly on screen entry hook
};

// 2. Testing Music Stream Configuration Database (High-Speed Direct MP3 streams)
const testMusicTracks = {
    tayHai: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    thodiDer: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    perfect: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
};

let activeBackgroundTrack = null;

function playDynamicSong(key) {
    if(activeBackgroundTrack) {
        activeBackgroundTrack.pause();
    }
    
    // Intercept default background loop to clear canvas audio track channels
    const masterBgMusic = document.getElementById('bg-music');
    if(masterBgMusic) masterBgMusic.pause();

    activeBackgroundTrack = new Audio(testMusicTracks[key]);
    activeBackgroundTrack.loop = true;
    activeBackgroundTrack.play().catch(()=>{});

    // Update frontend status labels text stream
    const labels = { tayHai: "Playing: Tay Hai Vibe (Test Stream)", thodiDer: "Playing: Thodi Der Vibe (Test Stream)", perfect: "Playing: Perfect Vibe (Test Stream)" };
    document.getElementById('track-status').innerText = labels[key];
}

// 3. The Massive 100+ Reasons Data Array Stack Engine
const hundredReasonsList = [
    "The flawless way your smile instantly fully resets my worst days. 🪻",
    "How fiercely dedicated you are when managing your house captain responsibilities. 🔴🟡",
    "Your random late-night text switches that turn into deep logical conversations.",
    "The way you call out my absolute nonsense without hesitation. 🧠",
    "Your voice notes that completely change the dynamic of my entire routine.",
    "The fact that we can talk about completely normal house logistics and somehow still end up chatting daily until 3 AM. 💗",
    "Your hilarious defense protocols during our great animal totem debates! 🐷",
    "The simple reality that you make an unbreakable bond feel completely natural and secure. 🩵",
    "Your weird habits that you think are annoying, but are actually my absolute favorite parts of your personality."
];

let lastReasonIndex = 0;
const nextReasonBtn = document.getElementById('next-reason-btn');

if(nextReasonBtn) {
    nextReasonBtn.onclick = () => {
        // Safe random allocation mechanics preventing double repetition matching
        let randIndex = Math.floor(Math.random() * hundredReasonsList.length);
        while(randIndex === lastReasonIndex) {
            randIndex = Math.floor(Math.random() * hundredReasonsList.length);
        }
        lastReasonIndex = randIndex;

        // Apply GSAP structural transition effects during card value mutations
        gsap.to("#reason-text-output", { opacity: 0, scale: 0.9, duration: 0.15, onComplete: () => {
            document.getElementById('reason-text-output').innerText = `"${hundredReasonsList[randIndex]}"`;
            document.getElementById('card-index-num').innerText = randIndex + 1;
            gsap.to("#reason-text-output", { opacity: 1, scale: 1, duration: 0.2 });
        }});
    };
}

// Memory Database expansion keys
const expandedMemories = {
    pookie: { title: "Pookie Deployment 🎀", desc: "Official code registration logged at midnight when routine logs got overwhelming." },
    piggy: { title: "The Piggy Debate 🐷", desc: "Long-standing historical animal totem argument logs tracking back to February." },
    "first-day": { title: "The School Anchor 🔴🟡", desc: "How a standard work schedule evolved straight into a permanent unsealed conversation link." }
};

// Global reveal wrapper upgrade
function revealMemory(key) {
    document.getElementById('popup-title').innerText = expandedMemories[key].title;
    document.getElementById('popup-desc').innerText = expandedMemories[key].desc;
    document.getElementById('memory-popup').classList.add('active');
}
function closeMemory() {
    document.getElementById('memory-popup').classList.remove('active');
}
