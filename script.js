// ===== STATE =====
const state = {
  currentView: 0,
  introComplete: false,
  transitioning: false,
  touchStartX: 0,
  touchStartY: 0,
};

const TOTAL_VIEWS = 4;

// ===== INFO DATA =====
const viewInfo = {
  0: {
    title: '정면 · Front View',
    tag: 'EXTERIOR · 외관',
    body: `
      <p>집의 정면 모습입니다. 이 집은 방한민 선생님이 살았던 공간으로, 한국 전통 건축 양식과 근대적 요소가 어우러진 구조입니다.</p>
      <div class="popup-divider"></div>
      <p>현관 앞 마당은 선생님이 즐겨 거닐던 공간으로, 독립운동 동지들과 비밀 모임을 가졌던 역사적인 장소이기도 합니다.</p>
    `,
  },
  1: {
    title: '좌측 · Left Side',
    tag: 'EXTERIOR · 외관',
    body: `
      <p>집의 좌측 면을 바라본 모습입니다. 이 방향에는 작은 정원이 있어 계절마다 다양한 꽃과 나무가 피어났습니다.</p>
      <div class="popup-divider"></div>
      <p>선생님은 이 정원에서 명상과 사색을 즐기셨으며, 자연 속에서 독립의 의지를 다지셨다고 전해집니다.</p>
    `,
  },
  2: {
    title: '후면 · Behind',
    tag: 'EXTERIOR · 외관',
    body: `
      <p>집의 뒷면입니다. 전통적인 한옥 구조를 보여주는 이 공간에는 부엌과 침실이 자리하고 있습니다.</p>
      <div class="popup-divider"></div>
      <p>후문은 선생님이 비밀 활동 시 주로 이용하던 출입구였으며, 그 역사적 의미를 간직하고 있습니다.</p>
    `,
  },
  3: {
    title: '우측 · Right Side',
    tag: 'EXTERIOR · 외관',
    body: `
      <p>집의 우측 면을 바라본 모습입니다. 창고(광)와 연결된 이 공간은 일상의 살림이 이루어지던 실용적인 영역입니다.</p>
      <div class="popup-divider"></div>
      <p>이 방향의 지붕 처마 아래에서 선생님은 비 오는 날 책을 읽으셨다는 이야기가 가족 사이에 전해집니다.</p>
    `,
  },
};

const roomInfo = {
  entrance: {
    title: '현관 · Entrance',
    tag: 'INTERIOR · 내부',
    body: `
      <p>집의 첫 관문인 현관입니다. 방한민 선생님은 이 문을 통해 매일 아침 새로운 결의를 다지며 세상으로 나아가셨습니다.</p>
      <div class="popup-divider"></div>
      <p>현관 벽면에는 선생님이 직접 쓴 붓글씨 액자가 걸려 있었다고 합니다. "盡忠報國(진충보국) — 충성을 다해 나라에 보답한다"는 내용이었습니다.</p>
    `,
  },
  study: {
    title: '서재 · Study',
    tag: 'INTERIOR · 내부',
    body: `
      <p>방한민 선생님의 서재입니다. 이 공간에서 선생님은 독립운동 관련 문서를 작성하고, 동지들과 전략을 논의하셨습니다.</p>
      <div class="popup-divider"></div>
      <p>책장에는 역사서, 사상서, 그리고 당대의 독립운동 자료들이 빼곡히 꽂혀 있었습니다. 선생님의 사상과 실천이 이 공간에서 비롯되었습니다.</p>
    `,
  },
  living: {
    title: '거실 · Living Room',
    tag: 'INTERIOR · 내부',
    body: `
      <p>온 가족이 모이던 따뜻한 거실입니다. 선생님은 이 공간에서 자녀들에게 독립 정신과 민족의 자긍심을 가르치셨습니다.</p>
      <div class="popup-divider"></div>
      <p>일제 감시가 심했던 시절에도 이 거실은 항상 사람들의 온기로 가득했으며, 서로를 격려하는 공간이었습니다.</p>
    `,
  },
  garden: {
    title: '정원 · Garden',
    tag: 'EXTERIOR · 외관',
    body: `
      <p>사계절 생명이 피어나던 정원입니다. 매화, 국화, 소나무가 어우러진 이 정원은 선생님의 고결한 정신을 상징합니다.</p>
      <div class="popup-divider"></div>
      <p>매화는 추운 겨울에도 꽃을 피우는 꿋꿋함을, 소나무는 절개를 상징합니다. 선생님은 이 식물들에서 독립운동의 의지를 발견하셨다고 합니다.</p>
    `,
  },
  kitchen: {
    title: '부엌 · Kitchen',
    tag: 'INTERIOR · 내부',
    body: `
      <p>전통 방식의 부엌입니다. 가마솥과 아궁이가 있는 이 공간에서 선생님의 가족은 소박하지만 따뜻한 식사를 준비했습니다.</p>
      <div class="popup-divider"></div>
      <p>동지들이 방문하면 이 부엌에서 밥과 국을 함께 나누며 독립의 꿈을 이야기했습니다. 음식을 나누는 것이 연대의 시작이었습니다.</p>
    `,
  },
  bedroom: {
    title: '침실 · Bedroom',
    tag: 'INTERIOR · 내부',
    body: `
      <p>선생님의 침실입니다. 단아하고 소박한 이 공간은 하루의 고단함을 내려놓고 내일의 투쟁을 준비하는 곳이었습니다.</p>
      <div class="popup-divider"></div>
      <p>선생님은 잠들기 전 늘 일기를 쓰셨다고 합니다. 그 일기에는 조국의 독립을 간절히 염원하는 마음이 담겨 있었습니다.</p>
    `,
  },
  storage: {
    title: '광 · Storage',
    tag: 'INTERIOR · 내부',
    body: `
      <p>집안의 살림살이를 보관하던 창고(광)입니다. 이 공간에는 단순한 물건만이 아닌, 가족의 역사가 켜켜이 쌓여 있었습니다.</p>
      <div class="popup-divider"></div>
      <p>독립운동 관련 비밀 문서와 자료들이 이 광 안에 숨겨져 보관되기도 했습니다. 평범한 창고가 역사의 보관소 역할을 했던 것입니다.</p>
    `,
  },
};

// ===== DOM REFS =====
const intro = document.getElementById('intro');
const introBg = document.getElementById('intro-bg');
const introContent = document.getElementById('intro-content');
const introSub = document.getElementById('intro-sub');
const scrollHint = document.getElementById('scroll-hint');
const museum = document.getElementById('museum');
const views = document.querySelectorAll('.view');
const indicators = document.querySelectorAll('.ind');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const roomOverlay = document.getElementById('room-overlay');
const infoPopup = document.getElementById('info-popup');
const popupContent = document.getElementById('popup-content');
const aboutModal = document.getElementById('about-modal');

// ===== INTRO SEQUENCE =====
function startMuseum() {
  if (state.introComplete) return;
  state.introComplete = true;

  // Fade in background
  introBg.classList.add('loaded');
  introSub.style.opacity = '0';

  setTimeout(() => {
    intro.classList.add('fade-out');
    setTimeout(() => {
      intro.style.display = 'none';
      museum.classList.remove('hidden');
      requestAnimationFrame(() => {
        museum.classList.add('visible');
      });
    }, 800);
  }, 1200);
}

// Trigger intro on any interaction
window.addEventListener('keydown', startMuseum, { once: true });
window.addEventListener('wheel', startMuseum, { once: true });
document.addEventListener('touchstart', (e) => {
  state.touchStartX = e.touches[0].clientX;
  state.touchStartY = e.touches[0].clientY;
  startMuseum();
}, { once: true });
document.addEventListener('click', startMuseum, { once: true });

// ===== VIEW NAVIGATION =====
function goToView(index) {
  if (state.transitioning) return;
  state.transitioning = true;

  const prev = state.currentView;
  state.currentView = ((index % TOTAL_VIEWS) + TOTAL_VIEWS) % TOTAL_VIEWS;

  views[prev].classList.remove('active');
  views[state.currentView].classList.add('active');

  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === state.currentView);
  });

  setTimeout(() => { state.transitioning = false; }, 650);
}

function goNext() { goToView(state.currentView + 1); }
function goPrev() { goToView(state.currentView - 1); }

nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);
document.getElementById('home-btn').addEventListener('click', () => goToView(0));

indicators.forEach(ind => {
  ind.addEventListener('click', () => goToView(parseInt(ind.dataset.i)));
});

// Keyboard
window.addEventListener('keydown', (e) => {
  if (!state.introComplete) return;
  if (isPopupOpen()) return;
  if (e.key === 'ArrowRight') goNext();
  if (e.key === 'ArrowLeft') goPrev();
  if (e.key === 'Escape') closeAll();
});

// Touch swipe
document.addEventListener('touchstart', (e) => {
  state.touchStartX = e.touches[0].clientX;
  state.touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
  if (!state.introComplete) return;
  const dx = e.changedTouches[0].clientX - state.touchStartX;
  const dy = Math.abs(e.changedTouches[0].clientY - state.touchStartY);
  if (Math.abs(dx) > 50 && dy < 60) {
    if (dx < 0) goNext();
    else goPrev();
  }
});

// ===== HOTSPOTS =====
document.querySelectorAll('.hotspot').forEach(hs => {
  hs.addEventListener('click', () => openRoom(hs.dataset.room));
});

function openRoom(roomId) {
  // Hide all room views
  document.querySelectorAll('.room-view').forEach(v => v.classList.add('hidden'));
  const target = document.getElementById('room-' + roomId);
  if (!target) return;
  target.classList.remove('hidden');

  roomOverlay.classList.remove('hidden');
  requestAnimationFrame(() => roomOverlay.classList.add('visible'));
}

document.getElementById('room-close').addEventListener('click', () => {
  roomOverlay.classList.remove('visible');
  setTimeout(() => roomOverlay.classList.add('hidden'), 500);
});

// ===== INFO BUTTONS (views) =====
document.querySelectorAll('.info-btn[data-view]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const viewIdx = parseInt(btn.dataset.view);
    const data = viewInfo[viewIdx];
    if (data) showPopup(data);
  });
});

// Info buttons (rooms)
document.querySelectorAll('.room-info-btn[data-room-info]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const roomId = btn.dataset.roomInfo;
    const data = roomInfo[roomId];
    if (data) showPopup(data);
  });
});

// ===== POPUP =====
function showPopup(data) {
  popupContent.innerHTML = `
    <h3>${data.title}</h3>
    <span class="popup-tag">${data.tag}</span>
    ${data.body}
  `;
  infoPopup.classList.remove('hidden');
  requestAnimationFrame(() => infoPopup.classList.add('visible'));
}

function closePopup() {
  infoPopup.classList.remove('visible');
  setTimeout(() => infoPopup.classList.add('hidden'), 280);
}

document.querySelector('.popup-close').addEventListener('click', closePopup);
infoPopup.addEventListener('click', (e) => {
  if (e.target === infoPopup) closePopup();
});

// ===== ABOUT =====
document.getElementById('about-btn').addEventListener('click', () => {
  aboutModal.classList.remove('hidden');
  requestAnimationFrame(() => aboutModal.classList.add('visible'));
});

document.getElementById('about-close').addEventListener('click', () => {
  aboutModal.classList.remove('visible');
  setTimeout(() => aboutModal.classList.add('hidden'), 500);
});

aboutModal.addEventListener('click', (e) => {
  if (e.target === aboutModal) {
    aboutModal.classList.remove('visible');
    setTimeout(() => aboutModal.classList.add('hidden'), 500);
  }
});

// ===== HELPERS =====
function isPopupOpen() {
  return !infoPopup.classList.contains('hidden') || !aboutModal.classList.contains('hidden');
}

function closeAll() {
  closePopup();
  aboutModal.classList.remove('visible');
  setTimeout(() => aboutModal.classList.add('hidden'), 500);
  roomOverlay.classList.remove('visible');
  setTimeout(() => roomOverlay.classList.add('hidden'), 500);
}

// Portrait image fallback
document.querySelectorAll('.about-portrait img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
  });
});
