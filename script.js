// ===== DEFAULT CONFIG =====
// Edit via /admin.html — changes saved in localStorage
const DEFAULT_CONFIG = {
  heroVideoId: 'oHrfwTFqsTg',
  carousel: {
    title: 'Vídeos em Destaque',
    videos: [
      {
        id: 'ch1', ytId: '194T0HeO7VM',
        title: 'Indústria Fox — 15 Anos',
        desc: 'Cobertura cinematográfica do 15º aniversário da Indústria Fox, com narrativa emocional e produção de alto nível.',
        badge: 'Evento', match: '98%', year: '2025'
      },
      {
        id: 'ch2', ytId: 'oHrfwTFqsTg',
        title: 'WCEF 2025',
        desc: 'Cobertura completa do World Commerce & Contracting Event Forum 2025.',
        badge: 'Evento', match: '96%', year: '2025'
      },
      {
        id: 'ch3', ytId: '5ifoydf1FRM',
        title: 'Casamento',
        desc: 'Cobertura cinematográfica de casamento.',
        badge: 'Casamento', match: '97%', year: '2025'
      },
      {
        id: 'ch4', ytId: 'iX6ks9MoClw',
        title: 'Evento Corporativo',
        desc: 'Cobertura audiovisual de evento corporativo.',
        badge: 'Evento', match: '95%', year: '2025'
      },
      {
        id: 'ch5', ytId: '5j5CPwguo6E',
        title: 'Evento Corporativo 2',
        desc: 'Cobertura audiovisual de evento corporativo.',
        badge: 'Evento', match: '95%', year: '2025'
      },
    ]
  },
  sections: [
    {
      id: 'anuncios', title: 'Anúncios',
      videos: [
        { id: 'v1', ytId: 'vhwK4yhPBzA', title: 'Parceria Fox & TudoBônus', desc: 'Anúncio de parceria estratégica com identidade visual sofisticada.', badge: 'Anúncio', match: '98%', year: '2025', tags: ['Parceria', 'Motion'] },
        { id: 'v2', ytId: 'KiRR4Upsbrg', title: 'Atendimento TudoBônus', desc: 'Vídeo de atendimento ao cliente com narrativa envolvente.', badge: 'Institucional', match: '97%', year: '2025', tags: ['Institucional', 'Edição'] },
        { id: 'v3', ytId: 'txQJrrwfVHk', title: 'Entrega & Garantia', desc: 'Comunicação visual sobre política de entrega e garantia da marca.', badge: 'Campanha', match: '95%', year: '2025', tags: ['Campanha', 'Motion'] },
        { id: 'v4', ytId: 'TJBivra1fAg', title: 'Trade in TudoBônus', desc: 'Campanha de Trade-in com call-to-action direto e produção ágil.', badge: 'Campanha', match: '96%', year: '2025', tags: ['Campanha', 'Edição'] },
        { id: 'v5', ytId: 'x1yuS8IHdYc', title: 'Trade in TudoBonus 2', desc: 'Segunda versão da campanha com nova abordagem criativa.', badge: 'Campanha', match: '93%', year: '2025', tags: ['Campanha', 'Social'] },
      ]
    },
    {
      id: 'eventos', title: 'Eventos',
      videos: [
        { id: 'v6', ytId: '15z7iaeOTRY', title: 'Evento Amcham Campinas', desc: 'Cobertura de evento da Câmara Americana de Comércio em Campinas.', badge: 'Evento', match: '94%', year: '2025', tags: ['Evento', 'Cobertura'] },
        { id: 'v7', ytId: '5j5CPwguo6E', title: 'Evento Corporativo', desc: 'Cobertura audiovisual de evento corporativo.', badge: 'Evento', match: '95%', year: '2025', tags: ['Evento'] },
        { id: 'v8', ytId: 'iX6ks9MoClw', title: 'Evento Corporativo 2', desc: 'Cobertura audiovisual de evento corporativo.', badge: 'Evento', match: '95%', year: '2025', tags: ['Evento'] },
      ]
    },
    {
      id: 'casamentos', title: 'Casamentos',
      videos: [
        { id: 'v9', ytId: '5ifoydf1FRM', title: 'Casamento', desc: 'Cobertura cinematográfica de casamento.', badge: 'Casamento', match: '97%', year: '2025', tags: ['Casamento'] },
      ]
    }
  ]
};

const STORAGE_KEY = 'mz-portfolio-config';

function loadConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
  } catch { return DEFAULT_CONFIG; }
}

const CONFIG = loadConfig();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== HERO VIDEO =====
const heroIframe = document.getElementById('hero-yt-iframe');
if (heroIframe && CONFIG.heroVideoId) {
  const id = CONFIG.heroVideoId;
  heroIframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&controls=0&playlist=${id}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`;
}

// ===== RENDER CAROUSEL =====
function renderCarousel() {
  const track = document.getElementById('carousel-track');
  const titleEl = document.getElementById('carousel-title');
  if (!track) return;
  if (titleEl) titleEl.textContent = CONFIG.carousel.title;

  CONFIG.carousel.videos.forEach(v => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide carousel-yt';
    slide.onclick = () => openModal('modal-' + v.id);
    slide.innerHTML = `
      <img class="carousel-thumb"
           src="https://i.ytimg.com/vi/${v.ytId}/maxresdefault.jpg"
           alt="${v.title}"
           onerror="this.src='https://i.ytimg.com/vi/${v.ytId}/hqdefault.jpg'" />
      <div class="carousel-yt-play">▶</div>
      <div class="carousel-info">
        <span class="carousel-badge">${v.badge}</span>
        <h3>${v.title}</h3>
        <p>${v.desc}</p>
      </div>`;
    track.appendChild(slide);
  });
}

// ===== RENDER SECTION ROWS =====
function renderSections() {
  const container = document.getElementById('rows-container');
  if (!container) return;
  container.innerHTML = '';

  CONFIG.sections.forEach(section => {
    if (!section.videos || section.videos.length === 0) return;

    const sec = document.createElement('section');
    sec.className = 'row';

    const trackId = 'track-' + section.id;
    sec.innerHTML = `<h2 class="row-title">${section.title}</h2><div class="row-track" id="${trackId}"></div>`;
    container.appendChild(sec);

    const track = sec.querySelector('.row-track');
    section.videos.forEach(v => {
      const thumb = `https://i.ytimg.com/vi/${v.ytId}/hqdefault.jpg`;
      const tagsHtml = (v.tags || []).map(t => `<span>${t}</span>`).join('');
      const descHtml = v.desc ? `<p>${v.desc}</p>` : '';

      const card = document.createElement('div');
      card.className = 'card-story';
      card.onclick = () => openModal('modal-' + v.id);
      card.innerHTML = `
        <div class="card-story-thumb-wrap">
          <img src="${thumb}" alt="${v.title}" />
        </div>
        <div class="card-hover">
          <img class="card-portrait-img" src="${thumb}" alt="${v.title}" />
          <div class="card-hover-body">
            <div class="card-hover-top">
              <h3>${v.title}</h3>
              <div class="card-meta">
                <span class="match">${v.match}</span>
                <span class="year">${v.year}</span>
                <span class="duration">9×16</span>
              </div>
            </div>
            ${descHtml}
            ${tagsHtml ? `<div class="card-tags">${tagsHtml}</div>` : ''}
            <div class="card-actions">
              <button class="btn-play" onclick="openModal('modal-${v.id}');event.stopPropagation()">▶</button>
              <button class="btn-like">👍</button>
            </div>
          </div>
        </div>`;
      track.appendChild(card);
    });
  });
}

// ===== RENDER MODALS =====
function renderModals() {
  const container = document.getElementById('modals-container');
  if (!container) return;
  container.innerHTML = '';

  // Horizontal modals for carousel
  CONFIG.carousel.videos.forEach(v => {
    const id = 'modal-' + v.id;
    const el = document.createElement('div');
    el.className = 'modal-backdrop';
    el.id = id;
    el.onclick = (e) => closeModal(e, id);
    el.innerHTML = `
      <div class="modal modal-wide">
        <button class="modal-close" onclick="closeModal(null,'${id}')">✕</button>
        <div class="modal-yt-container">
          <iframe class="modal-yt-iframe" src="" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="modal-body">
          <div class="modal-header"><h2>${v.title}</h2></div>
          <div class="modal-meta"><span class="match">${v.match} match</span><span class="year">${v.year}</span></div>
          <p class="modal-desc">${v.desc}</p>
        </div>
      </div>`;
    container.appendChild(el);
  });

  // Vertical modals for section rows
  CONFIG.sections.forEach(section => {
    (section.videos || []).forEach(v => {
      const id = 'modal-' + v.id;
      const el = document.createElement('div');
      el.className = 'modal-backdrop';
      el.id = id;
      el.onclick = (e) => closeModal(e, id);
      el.innerHTML = `
        <div class="modal modal-vertical">
          <button class="modal-close" onclick="closeModal(null,'${id}')">✕</button>
          <div class="modal-yt-container modal-yt-vertical">
            <iframe class="modal-yt-iframe" src="" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div class="modal-body">
            <div class="modal-header"><h2>${v.title}</h2></div>
            <div class="modal-meta">
              <span class="match">${v.match}</span>
              <span class="year">${v.year}</span>
              <span class="duration">9×16</span>
            </div>
            ${v.desc ? `<p class="modal-desc">${v.desc}</p>` : ''}
          </div>
        </div>`;
      container.appendChild(el);
    });
  });
}

// ===== FIND YT ID FROM CONFIG =====
function findYtId(modalId) {
  for (const v of CONFIG.carousel.videos) {
    if ('modal-' + v.id === modalId) return v.ytId;
  }
  for (const section of CONFIG.sections) {
    for (const v of (section.videos || [])) {
      if ('modal-' + v.id === modalId) return v.ytId;
    }
  }
  return null;
}

// ===== MODAL OPEN / CLOSE =====
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  const ytId = findYtId(id);
  if (ytId) {
    const iframe = modal.querySelector('.modal-yt-iframe');
    if (iframe && !iframe.src.includes('youtube')) {
      iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1`;
    }
  }
}

function closeModal(event, id) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById(id);
  if (!modal) return;
  const iframe = modal.querySelector('.modal-yt-iframe');
  if (iframe) iframe.src = '';
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
    const iframe = modal.querySelector('.modal-yt-iframe');
    if (iframe) iframe.src = '';
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== CAROUSEL =====
function initCarousel() {
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!track || !prevBtn || !nextBtn) return;

  const originalSlides = Array.from(track.querySelectorAll('.carousel-slide'));
  const total = originalSlides.length;
  if (total === 0) return;

  function slidesVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  const cloneCount = Math.max(slidesVisible(), 3);
  originalSlides.slice(0, cloneCount).forEach(s => track.appendChild(s.cloneNode(true)));
  originalSlides.slice(-cloneCount).forEach(s => track.insertBefore(s.cloneNode(true), track.firstChild));

  const allSlides = Array.from(track.querySelectorAll('.carousel-slide'));
  let current = cloneCount;

  function getSlideWidth() {
    if (!allSlides[0]) return 0;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 12;
    return allSlides[0].getBoundingClientRect().width + gap;
  }

  function goTo(index, animate = true) {
    track.style.transition = animate ? 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none';
    track.style.transform = `translateX(-${index * getSlideWidth()}px)`;
    current = index;
  }

  track.addEventListener('transitionend', () => {
    const lastReal = cloneCount + total - 1;
    const firstReal = cloneCount;
    if (current < firstReal) goTo(lastReal - (firstReal - current - 1), false);
    else if (current > lastReal) goTo(firstReal + (current - lastReal - 1), false);
  });

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  track.addEventListener('transitionstart', () => { prevBtn.disabled = true; nextBtn.disabled = true; });
  track.addEventListener('transitionend', () => { prevBtn.disabled = false; nextBtn.disabled = false; });

  window.addEventListener('resize', () => goTo(current, false));
  goTo(current, false);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const style = document.createElement('style');
  style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  document.querySelectorAll('.row, .carousel-section, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  document.querySelectorAll('.row').forEach(row => {
    const cards = row.querySelectorAll('.card-story');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });

    const rowObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, i * 60);
          });
          rowObs.disconnect();
        }
      });
    }, { threshold: 0.1 });

    rowObs.observe(row);
  });
}

// ===== INIT =====
renderCarousel();
renderSections();
renderModals();
initCarousel();
initScrollReveal();
