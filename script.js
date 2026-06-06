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
/* --- Upgraded Polaroid Grid Styles --- */
.polaroid-grid-expanded {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    width: 100%;
    max-width: 400px;
    margin: 1.5rem auto;
}
.polaroid-card-new {
    background: white;
    padding: 0.5rem;
    padding-bottom: 1rem;
    color: black;
    border-radius: 4px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.4);
    transform: rotate(calc(Math.random() * 6deg - 3deg));
    transition: transform 0.2s ease;
    cursor: pointer;
}
.polaroid-card-new:active { transform: scale(0.95) rotate(0deg); }
.polaroid-card-new img {
    width: 100%;
    height: 110px;
    object-fit: cover;
    border-radius: 2px;
    background: #222;
}

/* Music Control Elements */
.song-selector-box { margin-top: 2rem; padding: 1.2rem !important; }
.song-selector-box h4 { margin-bottom: 0.8rem; font-size: 0.95rem; color: var(--gold); }
.music-button-row { display: flex; gap: 0.5rem; justify-content: center; width: 100%; }
.track-btn {
    flex: 1; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
    color: white; padding: 0.6rem 0.3rem; border-radius: 8px; font-size: 0.72rem; font-weight: 600; cursor: pointer;
}
.track-btn:active { background: var(--romantic-pink); }
.audio-status-text { font-size: 0.65rem; color: #a49fbf; margin-top: 0.6rem; font-style: italic; }

/* --- 100 Reasons Interface Layout --- */
.reasons-container { max-width: 380px !important; text-align: center; position: relative; }
.reasons-counter-badge {
    background: rgba(255, 117, 143, 0.15); color: var(--romantic-pink);
    padding: 0.3rem 0.8rem; font-size: 0.7rem; font-weight: bold; border-radius: 30px;
}
.reason-card-display {
    background: rgba(0, 0, 0, 0.4); border: 1px dashed rgba(255,255,255,0.15);
    border-radius: 15px; padding: 2rem 1.5rem; margin: 2rem 0; min-height: 130px;
    display: flex; align-items: center; justify-content: center;
}
#reason-text-output { font-size: 0.92rem; line-height: 1.5; color: #fffbf2; font-style: italic; }
.inline-btn-pink {
    background: var(--romantic-pink); border: none; color: white;
    padding: 0.8rem 1.5rem; font-size: 0.85rem; font-weight: bold; border-radius: 8px; cursor: pointer; width: 100%;
}
.inline-btn-pink:active { transform: scale(0.98); }
.total-stats-hint { font-size: 0.65rem; color: #a49fbf; margin-top: 0.5rem; }
