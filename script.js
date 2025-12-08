// ===========================
// ARCHBELL FALCONS - SCRIPT.JS
// ===========================

// ---------- PLAYER DATA ----------
const players = [
  {
    id:1,
    name:"Shahadat Jamil Shishir",
    role:"Captain",
    kd:2.1,
    rating:9.2,
    goals:35,
    assists:12,
    matches:78,
    bio:"Strategic captain known for clutch goals and calm leadership.",
    mvp:true
  },
  // ...other players
];

// ---------- MATCH DATA ----------
const matches = [
  { date:'2025-12-20', opponent:'Red Comets', type:'Tournament', time:'20:00', timezone:'BDT' },
  // ...other matches
];

const trophyData = { won:4, runnerUps:2, top8:9 };

// ===========================
// HELPER FUNCTIONS
// ===========================
function initials(name){
  const parts = name.trim().split(/\s+/);
  return parts.length===1 ? parts[0].slice(0,2).toUpperCase() : (parts[0][0] + parts[parts.length-1][0]).toUpperCase();
}

// ===========================
// RENDER PLAYERS
// ===========================
const grid = document.getElementById('playerGrid');

function renderPlayers(list){
  grid.innerHTML = '';
  list.forEach(p=>{
    const card = document.createElement('button');
    card.className = 'player-card' + (p.mvp ? ' mvp' : '');
    card.setAttribute('data-id', p.id);
    card.setAttribute('aria-haspopup','dialog');
    card.innerHTML = `
      <div class="avatar">${initials(p.name)}</div>
      <div class="player-info">
        <h3>${p.name}</h3>
        <p>${p.role}</p>
      </div>
      <div class="badge">${p.kd.toFixed(2)}</div>
    `;
    card.addEventListener('click', ()=> openPlayerModal(p.id));
    grid.appendChild(card);
  });
}
renderPlayers(players);

// ===========================
// FILTERS & SEARCH
// ===========================
document.querySelectorAll('[data-filter]').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const f = btn.getAttribute('data-filter');
    let out = players;
    if(f === 'captain') out = players.filter(p=>/captain/i.test(p.role));
    else if(f === 'vice') out = players.filter(p=>/vice/i.test(p.role));
    else if(f === 'player') out = players.filter(p=>/player/i.test(p.role.toLowerCase()));
    else if(f === 'mvp') out = players.filter(p=>p.mvp);
    renderPlayers(out);
  });
});

document.getElementById('playerSearch').addEventListener('input', (e)=>{
  const q = e.target.value.toLowerCase().trim();
  renderPlayers(players.filter(p => p.name.toLowerCase().includes(q)));
});

// ===========================
// MODAL FUNCTIONS
// ===========================
const modalBackdrop = document.getElementById('modalBackdrop');
// ... (keep all modal functions like openPlayerModal, close events)

// ===========================
// VIDEO HIGHLIGHT FUNCTIONS
// ===========================
const thumbs = document.querySelectorAll('.thumb');
// ... (keep video modal functions)

// ===========================
// TOURNAMENT COUNTERS
// ===========================
document.getElementById('tournamentsWon').textContent = trophyData.won;
document.getElementById('runnerUps').textContent = trophyData.runnerUps;
document.getElementById('top8').textContent = trophyData.top8;

// ===========================
// SUBSCRIBE FORM HANDLER
// ===========================
const subscribeForm = document.getElementById('subscribeForm');
const subMsg = document.getElementById('subMsg');

subscribeForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('subEmail').value.trim();
  if(!email){ subMsg.textContent = 'Please enter a valid email.'; return; }
  subMsg.textContent = 'Thanks! You are subscribed (demo).';
  subscribeForm.reset();
});

// ===========================
// ANIMATE COUNTERS
// ===========================
function animateValue(el, start, end, duration=800){
  let startTime = performance.now();
  function step(now){
    const progress = Math.min(1,(now-startTime)/duration);
    el.textContent = Math.floor(start + (end-start)*progress);
    if(progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

animateValue(document.getElementById('tournamentsWon'),0,trophyData.won);
animateValue(document.getElementById('runnerUps'),0,trophyData.runnerUps);
animateValue(document.getElementById('top8'),0,trophyData.top8);
