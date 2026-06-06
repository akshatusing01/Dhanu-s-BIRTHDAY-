document.addEventListener("DOMContentLoaded", function() {

    // 1. Starfield Particle Background Simulation Engine
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

    // 2. Countdown Engine Setup Target (August 13, 2026)
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

    // 3. Central Routing Interface Layout Handler
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

    // 4. Button Event Interceptors
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

    document.getElementById('proceed-to-reasons').onclick = () => {
        switchScreen('#screen-4', '#screen-reasons');
    };

    document.getElementById('proceed-to-game').onclick = () => {
        switchScreen('#screen-reasons', '#screen-5', spawnHearts);
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

    // 5. Puvui AI Memory Matching Core Engine
    const searchBtn = document.getElementById('gpt-search-btn');
    const queryInput = document.getElementById('gpt-query');
    const resultsBox = document.getElementById('gpt-results-box');

    const puvuiSpecialMemories = {
        "pookie": "25th Feb 2026 ko tune bola tha na 'Rabbit hu mai 👻... Piggy layout dropped permanently!'. Baaki pookie behavior to tera peak pr rhta h jb tu gussa hoti h. Pr reality yehi h, pure system ki main anchor tu hi h.",
        "rabbit": "25th Feb 2026 ko tune bola tha na 'Rabbit hu mai 👻... Piggy layout dropped permanently!'. Baaki pookie behavior to tera peak pr rhta h jb tu gussa hoti h. Pr reality yehi h, pure system ki main anchor tu hi h.",
        "piggy": "25th Feb 2026 ko tune bola tha na 'Rabbit hu mai 👻... Piggy layout dropped permanently!'. Baaki pookie behavior to tera peak pr rhta h jb tu gussa hoti h. Pr reality yehi h, pure system ki main anchor tu hi h.",
        "8 november": "8th November! Annual Day logistics, house captain duties, uniform me idhr udhr bhagna, aur schedules check krna. Vhi s chizen coordination s un-breakable bond m bdlna shuru hui thi.",
        "annual day": "8th November! Annual Day logistics, house captain duties, uniform me idhr udhr bhagna, aur schedules check krna. Vhi s chizen coordination s un-breakable bond m bdlna shuru hui thi.",
        "15 august 2025": "15 August 2025. Red House Captain 🔴 aur Yellow House Vice Captain 🟡 standing tall. Parade manage krna, badges fix krna, aur house duties ka pressure ek sath handle krna like real captains.",
        "26 january 2026": "26th Jan 2026. The permanent log entry: 'sif tera Na 🙏... booked forever'. Isme koi aur code update nahi ho skta ab.",
        "april 2026": "April 2026. No screens, no long-distance chat delays. Jb tu ghr aayi aur poori timeline ekdum real lgne lgi. Core memory forever archived.",
        "came home": "April 2026. No screens, no long-distance chat delays. Jb tu ghr aayi aur poori timeline ekdum real lgne lgi. Core memory forever archived."
    };

    if(searchBtn) {
        searchBtn.onclick = () => {
            const val = queryInput.value.trim().toLowerCase();
            if(!val) return;
            
            resultsBox.innerHTML = "";
            resultsBox.classList.remove('hidden');
            
            let matchedText = "";
            for (let key in puvuiSpecialMemories) {
                if (val.includes(key)) {
                    matchedText = puvuiSpecialMemories[key];
                    break;
                }
            }
            
            if(matchedText) {
                const b = document.createElement('div');
                b.className = `chat-bubble right-bubble`;
                b.innerHTML = `<p class=\"sender-name\">Puvui Engine</p><p class=\"message-text\">${matchedText}</p>`;
                resultsBox.appendChild(b);
            } else {
                resultsBox.innerHTML = `<p class=\"no-results-msg\">Type something like her nicknames or our special dates to unseal records.</p>`;
            }
        };
    }

    // 6. Soundboard Mechanics Configuration
    let activeVoice = null;
    function mixVoice(id) {
        if(activeVoice) { activeVoice.pause(); activeVoice.currentTime = 0; }
        const track = document.getElementById(id);
        if(track) { track.play().catch(()=>{}); activeVoice = track; }
    }
    document.getElementById('sb-card-1').onclick = () => mixVoice('audio1');
    document.getElementById('sb-card-2').onclick = () => mixVoice('audio2');

    // 7. Background Tracks Setup
    const testMusicTracks = {
        tayHai: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        thodiDer: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        perfect: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    };
    let activeBackgroundTrack = null;
    function playDynamicSong(key) {
        if(activeBackgroundTrack) activeBackgroundTrack.pause();
        const masterBgMusic = document.getElementById('bg-music');
        if(masterBgMusic) masterBgMusic.pause();

        activeBackgroundTrack = new Audio(testMusicTracks[key]);
        activeBackgroundTrack.loop = true;
        activeBackgroundTrack.play().catch(()=>{});
        document.getElementById('track-status').innerText = `Playing Selected Track...`;
    }
    document.getElementById('track-btn-tay').onclick = () => playDynamicSong('tayHai');
    document.getElementById('track-btn-thodi').onclick = () => playDynamicSong('thodiDer');
    document.getElementById('track-btn-perfect').onclick = () => playDynamicSong('perfect');

    // 8. Photo Popup Engine Data Map
    const expandedMemories = {
        pookie: { title: "Pookie Deployment 🎀", desc: "The sudden shift from a responsible house captain to your absolute peak childish pookie behavior." },
        piggy: { title: "The Piggy Debate 🐷", desc: "Your hilarious defense protocols during our great animal totem debates!" },
        "first-day": { title: "The School Anchor 🔴🟡", desc: "How a standard work schedule evolved straight into a permanent unsealed conversation link." }
    };
    function revealMemory(key) {
        document.getElementById('popup-title').innerText = expandedMemories[key].title;
        document.getElementById('popup-desc').innerText = expandedMemories[key].desc;
        document.getElementById('memory-popup').classList.add('active');
    }
    document.getElementById('photo-pookie').onclick = () => revealMemory('pookie');
    document.getElementById('photo-piggy').onclick = () => revealMemory('piggy');
    document.getElementById('photo-first-day').onclick = () => revealMemory('first-day');
    document.getElementById('close-popup-btn').onclick = () => {
        document.getElementById('memory-popup').classList.remove('active');
    };

    // 9. 100 Reasons Exhaustion Tracking Pool Logic (Zero Repeat Glitches)
    const hundredReasonsList = [
        "The incredible way your emotional intelligence holds everything together even when the routine gets heavy.",
        "Your flawless positive attitude that completely resets my worst moods with just a single text.",
        "The sudden shift from a responsible house captain to your absolute peak childish pookie behavior.",
        "Your rock-solid principles and the deep gratitude you show for the smallest things in life.",
        "The way you handle everything jab school ya house duties ka load ek sath aa jata hai.",
        "Tera voh sudden chota bacha ban jana jb mood thik hota hai.",
        "Voh late night 3 AM tak khinchne wali chats jisme hum faltu logistics s shuru hoke deep chale jaate hain.",
        "Tera rock-solid attitude jb tu kisi cheez par stand leti hai.",
        "How fiercely dedicated you are when managing your house captain responsibilities. 🔴🟡",
        "The simple reality that you make an unbreakable bond feel completely natural and secure. 🩵",
        "Your weird habits that you think are annoying, but are actually my absolute favorite parts of your personality."
    ];
    
    let depletionTrackerPool = [...hundredReasonsList];

    document.getElementById('next-reason-btn').onclick = () => {
        if (depletionTrackerPool.length === 0) {
            depletionTrackerPool = [...hundredReasonsList]; // Reset array entirely once fully exhausted
        }
        
        let randIndex = Math.floor(Math.random() * depletionTrackerPool.length);
        let selectedReasonText = depletionTrackerPool.splice(randIndex, 1)[0];
        let originalReasonIndex = hundredReasonsList.indexOf(selectedReasonText) + 1;

        gsap.to("#reason-text-output", { opacity: 0, scale: 0.9, duration: 0.15, onComplete: () => {
            document.getElementById('reason-text-output').innerText = `"${selectedReasonText}"`;
            document.getElementById('card-index-num').innerText = originalReasonIndex;
            gsap.to("#reason-text-output", { opacity: 1, scale: 1, duration: 0.2 });
        }});
    };

    // 10. Heart Collector Engine
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

    // 11. Birthday Cake Click Mechanics
    document.getElementById('birthday-cake').onclick = function() {
        document.getElementById('flame').style.display = 'none';
        initConfetti();
        document.getElementById('proceed-to-promises').classList.remove('hidden-btn');
    };

    // 12. Security Verification Access Pass
    document.getElementById('unlock-vault-btn').onclick = () => {
        const p = document.getElementById('vault-password').value.trim().toLowerCase();
        if(p === "piggy") {
            switchScreen('#screen-8', '#screen-9');
        } else {
            document.getElementById('vault-error').classList.remove('hidden-btn');
        }
    };

    // 13. Particle Canvas Confetti System
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
