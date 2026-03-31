// ===== DATA =====
const VIEWS = [
  {
    id: 'original', label: 'Original',
    image: 'images/view-front.jpg', fallback: 'bg-original',
    hotspots: [
      { num: 1, x: 50, y: 79, room: 'entrance' },
      { num: 2, x: 27, y: 63, room: 'garden' },
      { num: 3, x: 21, y: 52, room: 'hall' },
      { num: 4, x: 69, y: 51, room: 'rightroom' },
    ],
  },
  {
    id: 'left', label: 'Left',
    image: 'images/view-left.jpg', fallback: 'bg-left',
    hotspots: [
      { num: 1, x: 24, y: 62, room: 'entrance' },
      { num: 2, x: 37, y: 70, room: 'garden' },
      { num: 3, x: 29, y: 54, room: 'hall' },
      { num: 4, x: 72, y: 37, room: 'rightroom' },
    ],
  },
  {
    id: 'behind', label: 'Behind',
    image: 'images/view-behind.jpg', fallback: 'bg-behind',
    hotspots: [
      { num: 1, x: 66, y: 36, room: 'entrance' },
      { num: 4, x: 29, y: 46, room: 'rightroom' },
    ],
  },
  {
    id: 'right', label: 'Right',
    image: 'images/view-right.jpg', fallback: 'bg-right',
    hotspots: [
      { num: 3, x: 26, y: 47, room: 'hall' },
    ],
  },
];

const ROOMS = {
  entrance: {
    label: '현관 · Entrance',
    image: 'images/room-entrance.jpg', fallback: 'bg-room-entrance',
    items: [
      {
        x: 36, y: 62,
        title: '대문 · Gate',
        tag: 'ENTRANCE · 입구',
        body: `<p>집으로 들어서는 첫 번째 관문입니다. 이 대문을 통해 방한민 선생님은 매일 새로운 결의를 다지며 세상으로 나아가셨습니다.</p><div class="pdiv"></div><p>대문 기둥에는 선생님이 직접 새긴 글귀가 있었다고 전해집니다. 나라를 향한 변치 않는 마음의 표현이었습니다.</p>`,
      },
      {
        x: 62, y: 48,
        title: '마당 · Courtyard',
        tag: 'COURTYARD · 마당',
        body: `<p>대문 안으로 들어서면 펼쳐지는 마당입니다. 이 공간에서 가족과 동지들이 모여 서로를 격려하고 독립의 꿈을 나누었습니다.</p><div class="pdiv"></div><p>마당은 단순한 비어있는 공간이 아니라, 사람들의 연대와 희망이 살아 숨쉬던 장소였습니다.</p>`,
      },
    ],
  },
  garden: {
    label: '정원 · Garden',
    image: 'images/room-garden.jpg', fallback: 'bg-room-garden',
    items: [
      {
        x: 18, y: 53,
        title: '밭 · Field',
        tag: 'GARDEN · 정원',
        body: `<p>선생님이 직접 가꾸시던 텃밭입니다. 혹독한 시대에도 씨앗을 심고 수확을 기다리는 일상은 계속되었습니다.</p><div class="pdiv"></div><p>밭을 일구는 행위는 선생님에게 독립에 대한 인내와 희망의 상징이었습니다. 심은 씨앗은 반드시 싹을 틔운다는 믿음처럼.</p>`,
      },
      {
        x: 56, y: 53,
        title: '대나무 · Bamboo',
        tag: 'TOOLS · 도구',
        body: `<p>대나무로 만든 농기구들입니다. 튼튼하고 유연한 대나무는 한국 전통 생활에서 없어서는 안 될 소재였습니다.</p><div class="pdiv"></div><p>굽히지 않는 대나무처럼 선생님의 독립 의지도 어떤 상황에서도 꺾이지 않았습니다.</p>`,
      },
      {
        x: 88, y: 53,
        title: '화분 · Flower Pot',
        tag: 'GARDEN · 정원',
        body: `<p>정원 한켠의 꽃화분입니다. 선생님의 가족은 어려운 시절에도 집안에 꽃을 키우며 아름다움을 잃지 않으려 했습니다.</p><div class="pdiv"></div><p>꽃을 피우는 것은 삶에 대한 긍정이자, 언젠가 올 광복의 날에 대한 기대였습니다.</p>`,
      },
    ],
  },
  hall: {
    label: '안채 · Main Hall',
    image: 'images/room-hall.jpg', fallback: 'bg-room-hall',
    items: [
      {
        x: 35, y: 55,
        title: '대청마루 · Hall Floor',
        tag: 'MAIN HALL · 안채',
        body: `<p>안채의 대청마루입니다. 선생님은 이 공간에서 가족과 시간을 보내시고, 때로는 동지들과 비밀 모임을 가지셨습니다.</p><div class="pdiv"></div><p>대청마루는 한옥의 심장부로, 모든 것이 이곳에서 이루어졌습니다. 밥상을 차리고, 이야기를 나누고, 결의를 다지던 공간입니다.</p>`,
      },
      {
        x: 65, y: 45,
        title: '방 · Room',
        tag: 'INTERIOR · 내부',
        body: `<p>안채의 방입니다. 선생님은 이곳에서 글을 쓰시고 사색하셨습니다. 벽에는 선생님이 손수 쓴 붓글씨가 걸려 있었다고 합니다.</p><div class="pdiv"></div><p>작은 방 하나에 담긴 수많은 이야기들. 이 공간은 선생님의 내면 세계가 투영된 곳입니다.</p>`,
      },
    ],
  },
  rightroom: {
    label: '사랑채 · Guest Room',
    image: 'images/room-rightroom.jpg', fallback: 'bg-room-right',
    items: [
      {
        x: 40, y: 50,
        title: '사랑채 · Guest Hall',
        tag: 'GUEST ROOM · 사랑채',
        body: `<p>손님을 맞이하던 사랑채입니다. 독립운동의 동지들이 이 공간에서 모여 서로의 안부를 묻고 앞으로의 계획을 나누었습니다.</p><div class="pdiv"></div><p>사랑채의 문은 항상 열려 있었습니다. 그것은 선생님의 마음이 항상 사람들을 향해 열려 있었음을 뜻합니다.</p>`,
      },
      {
        x: 68, y: 58,
        title: '서가 · Bookshelf',
        tag: 'STUDY · 서재',
        body: `<p>선생님의 서가입니다. 역사서, 사상서, 그리고 독립운동 관련 자료들이 빼곡히 꽂혀 있었습니다.</p><div class="pdiv"></div><p>책은 선생님의 무기였습니다. 지식과 사상으로 무장한 독립운동가는 총칼보다 강한 힘을 가졌습니다.</p>`,
      },
    ],
  },
};

// ===== STATE =====
const state = {
  view: 0,
  introComplete: false,
  transitioning: false,
  roomOpen: false,
  touchX: 0, touchY: 0,
  scrollAccum: 0, scrollTimer: null,
};

// ===== BUILD DOM =====
function buildExterior() {
  const wrap = document.getElementById('view-wrap');
  VIEWS.forEach((v, i) => {
    const div = document.createElement('div');
    div.className = 'ext-view' + (i === 0 ? ' active' : '');
    div.id = 'ext-' + i;

    // background
    const bg = document.createElement('div');
    bg.className = 'view-bg ' + v.fallback;
    bg.style.backgroundImage = `url('${v.image}')`;
    div.appendChild(bg);

    // hotspots
    v.hotspots.forEach(hs => {
      const btn = document.createElement('button');
      btn.className = 'hotspot-num';
      btn.textContent = hs.num;
      btn.style.left = hs.x + '%';
      btn.style.top = hs.y + '%';
      btn.addEventListener('click', () => openRoom(hs.room));
      btn.addEventListener('touchstart', () => {
        btn.classList.add('tap-anim');
        btn.addEventListener('animationend', () => btn.classList.remove('tap-anim'), { once: true });
      });
      div.appendChild(btn);
    });

    wrap.appendChild(div);
  });
}

function buildRooms() {
  const wrap = document.getElementById('room-view-wrap');
  Object.entries(ROOMS).forEach(([id, room]) => {
    const div = document.createElement('div');
    div.className = 'room-view hidden';
    div.id = 'room-' + id;

    const bg = document.createElement('div');
    bg.className = 'room-bg ' + room.fallback;
    bg.style.backgroundImage = `url('${room.image}')`;
    div.appendChild(bg);

    room.items.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'hotspot-q';
      btn.textContent = '?';
      btn.style.left = item.x + '%';
      btn.style.top = item.y + '%';
      btn.addEventListener('click', (e) => { e.stopPropagation(); showPopup(item); });
      div.appendChild(btn);
    });

    wrap.appendChild(div);
  });
}

// ===== INTRO =====
function startMuseum() {
  if (state.introComplete) return;
  state.introComplete = true;

  const introBg = document.getElementById('intro-bg');
  introBg.classList.add('loaded');

  setTimeout(() => {
    document.getElementById('intro').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('intro').style.display = 'none';
      const museum = document.getElementById('museum');
      museum.classList.remove('hidden');
      requestAnimationFrame(() => museum.classList.add('visible'));
    }, 900);
  }, 1300);
}

window.addEventListener('keydown', startMuseum, { once: true });
window.addEventListener('wheel', startMuseum, { once: true });
document.addEventListener('touchstart', (e) => {
  state.touchX = e.touches[0].clientX;
  state.touchY = e.touches[0].clientY;
  startMuseum();
}, { once: true });
document.addEventListener('click', startMuseum, { once: true });

// ===== VIEW NAVIGATION =====
function goToView(i) {
  if (state.transitioning || state.roomOpen) return;
  state.transitioning = true;

  const prev = state.view;
  state.view = ((i % 4) + 4) % 4;

  document.getElementById('ext-' + prev).classList.remove('active');
  document.getElementById('ext-' + state.view).classList.add('active');
  document.getElementById('view-name').textContent = VIEWS[state.view].label;

  setTimeout(() => { state.transitioning = false; }, 650);
}
const goNext = () => goToView(state.view + 1);
const goPrev = () => goToView(state.view - 1);

// keyboard
window.addEventListener('keydown', (e) => {
  if (!state.introComplete) return;
  if (!document.getElementById('info-popup').classList.contains('hidden')) return;
  if (e.key === 'ArrowRight') goNext();
  if (e.key === 'ArrowLeft') goPrev();
  if (e.key === 'Escape') closeAll();
});

// two-finger horizontal scroll (trackpad)
window.addEventListener('wheel', (e) => {
  if (!state.introComplete || state.roomOpen) return;
  if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) * 0.8) return; // mostly vertical → ignore

  state.scrollAccum += e.deltaX;
  clearTimeout(state.scrollTimer);
  state.scrollTimer = setTimeout(() => { state.scrollAccum = 0; }, 300);

  if (Math.abs(state.scrollAccum) > 80) {
    if (state.scrollAccum > 0) goNext(); else goPrev();
    state.scrollAccum = 0;
  }
}, { passive: true });

// touch swipe
document.addEventListener('touchstart', (e) => {
  state.touchX = e.touches[0].clientX;
  state.touchY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  if (!state.introComplete || state.roomOpen) return;
  const dx = e.changedTouches[0].clientX - state.touchX;
  const dy = Math.abs(e.changedTouches[0].clientY - state.touchY);
  if (Math.abs(dx) > 55 && dy < 70) {
    if (dx < 0) goNext(); else goPrev();
  }
}, { passive: true });

// ===== HOME / THOM BUTTONS =====
document.getElementById('thom-btn').addEventListener('click', () => goToView(0));
document.getElementById('home-btn').addEventListener('click', () => goToView(0));
document.getElementById('room-thom-btn').addEventListener('click', () => { closeRoom(); goToView(0); });
document.getElementById('room-home-btn').addEventListener('click', () => { closeRoom(); goToView(0); });

// ===== ABOUT =====
function openAbout() {
  const m = document.getElementById('about-modal');
  m.classList.remove('hidden');
  requestAnimationFrame(() => m.classList.add('visible'));
}
function closeAbout() {
  const m = document.getElementById('about-modal');
  m.classList.remove('visible');
  setTimeout(() => m.classList.add('hidden'), 500);
}
document.getElementById('about-btn').addEventListener('click', openAbout);
document.getElementById('room-about-btn').addEventListener('click', openAbout);
document.getElementById('about-close').addEventListener('click', closeAbout);
document.getElementById('about-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('about-modal')) closeAbout();
});

// ===== ROOM =====
function openRoom(roomId) {
  const room = ROOMS[roomId];
  if (!room) return;

  document.querySelectorAll('.room-view').forEach(v => v.classList.add('hidden'));
  const target = document.getElementById('room-' + roomId);
  if (!target) return;
  target.classList.remove('hidden');

  document.getElementById('room-name').textContent = room.label;

  state.roomOpen = true;
  const overlay = document.getElementById('room-overlay');
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => overlay.classList.add('visible'));
}

function closeRoom() {
  const overlay = document.getElementById('room-overlay');
  overlay.classList.remove('visible');
  setTimeout(() => {
    overlay.classList.add('hidden');
    state.roomOpen = false;
  }, 600);
}

// swipe down to close room
let roomTouchY = 0;
document.getElementById('room-overlay').addEventListener('touchstart', (e) => {
  roomTouchY = e.touches[0].clientY;
}, { passive: true });
document.getElementById('room-overlay').addEventListener('touchend', (e) => {
  const dy = e.changedTouches[0].clientY - roomTouchY;
  if (dy > 80 && !document.getElementById('info-popup').classList.contains('visible')) {
    closeRoom();
  }
}, { passive: true });

// ===== POPUP =====
function showPopup(item) {
  document.getElementById('popup-content').innerHTML = `
    <h3>${item.title}</h3>
    <span class="ptag">${item.tag}</span>
    ${item.body}
  `;
  const popup = document.getElementById('info-popup');
  popup.classList.remove('hidden');
  requestAnimationFrame(() => popup.classList.add('visible'));
}

function closePopup() {
  const popup = document.getElementById('info-popup');
  popup.classList.remove('visible');
  setTimeout(() => popup.classList.add('hidden'), 250);
}

document.querySelector('.popup-close').addEventListener('click', closePopup);
document.getElementById('info-popup').addEventListener('click', (e) => {
  if (e.target === document.getElementById('info-popup')) closePopup();
});

// ===== CLOSE ALL =====
function closeAll() {
  closePopup();
  closeAbout();
  closeRoom();
}

// ===== INIT =====
buildExterior();
buildRooms();
