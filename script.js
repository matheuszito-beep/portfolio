// ===== DEFAULT CONFIG =====
const DEFAULT_CONFIG = {
  heroVideoId: 'oHrfwTFqsTg',
  heroOpacity: 0.3,

  theme: {
    accentColor:    '#990008',
    bgColor:        '#000000',
    titleColor:     '#ffffff',
    mutedColor:     '#b3b3b3',
    btnPrimaryBg:   '#ffffff',
    btnPrimaryText: '#000000',
    btnRedBg:       '#990008',
    btnGreenBg:     '#25D366',
  },

  seo: {
    title:       'Matheus Zito — Portfólio',
    description: 'Motion Designer & Editor de Vídeo. Portfólio de Matheus Zito.',
  },

  navbar: { logo: 'MZ' },

  hero: {
    badge:    'Disponível para projetos',
    title1:   'Matheus',
    title2:   'Zito',
    subtitle: 'Motion Designer & Editor de Vídeo',
    desc:     'Transformo ideias em experiências visuais memoráveis. Especializado em motion graphics, edição cinematográfica e conteúdo digital.',
    btn1Text: '▶ Ver Projetos',
    btn2Text: '+ Sobre mim',
  },

  about: {
    tag:      'Sobre mim',
    heading:  'Por trás das câmeras',
    bio1:     'Sou editor de vídeo e motion designer especializado em conteúdo para redes sociais, campanhas publicitárias e vídeos institucionais. Já trabalhei com marcas, criadores e agências de todo o Brasil.',
    bio2:     'Minha especialidade está em unir técnica e criatividade — seja num hook que prende em 3 segundos ou numa campanha que fortalece uma marca.',
    stats: [
      { num: '150+', label: 'Projetos entregues' },
      { num: '30+',  label: 'Clientes satisfeitos' },
      { num: '3+',   label: 'Anos de experiência' },
    ],
    skills:   ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'Motion Graphics', 'Color Grading', 'Sound Design'],
    photoUrl: 'assets/foto.jpg',
  },

  contact: {
    heading:   'Vamos trabalhar juntos?',
    subtitle:  'Aberto para projetos freelance, parcerias e colaborações criativas.',
    email:     'seu@email.com',
    whatsapp:  '5511921962624',
    instagram: 'https://www.instagram.com/thebackstage.on/',
  },

  footer: {
    logo: 'MZ',
    text: '© 2026 Matheus Zito. Todos os direitos reservados.',
  },

  carousel: {
    title: 'Vídeos em Destaque',
    videos: [
      { id: 'ch1', ytId: '194T0HeO7VM', title: 'Indústria Fox — 15 Anos',   desc: 'Cobertura cinematográfica do 15º aniversário da Indústria Fox, com narrativa emocional e produção de alto nível.', badge: 'Evento',    match: '98%', year: '2025' },
      { id: 'ch2', ytId: 'oHrfwTFqsTg', title: 'WCEF 2025',                  desc: 'Cobertura completa do World Commerce & Contracting Event Forum 2025.', badge: 'Evento',    match: '96%', year: '2025' },
      { id: 'ch3', ytId: '5ifoydf1FRM', title: 'Casamento',                  desc: 'Cobertura cinematográfica de casamento.', badge: 'Casamento', match: '97%', year: '2025' },
      { id: 'ch4', ytId: 'iX6ks9MoClw', title: 'Evento Corporativo',         desc: 'Cobertura audiovisual de evento corporativo.', badge: 'Evento',    match: '95%', year: '2025' },
      { id: 'ch5', ytId: '5j5CPwguo6E', title: 'Evento Corporativo 2',       desc: 'Cobertura audiovisual de evento corporativo.', badge: 'Evento',    match: '95%', year: '2025' },
    ]
  },

  sections: [
    {
      id: 'anuncios', title: 'Anúncios',
      videos: [
        { id: 'v1', ytId: 'vhwK4yhPBzA', title: 'Parceria Fox & TudoBônus', desc: 'Anúncio de parceria estratégica com identidade visual sofisticada.',    badge: 'Anúncio',      match: '98%', year: '2025', tags: ['Parceria', 'Motion'] },
        { id: 'v2', ytId: 'KiRR4Upsbrg', title: 'Atendimento TudoBônus',   desc: 'Vídeo de atendimento ao cliente com narrativa envolvente.',             badge: 'Institucional', match: '97%', year: '2025', tags: ['Institucional', 'Edição'] },
        { id: 'v3', ytId: 'txQJrrwfVHk', title: 'Entrega & Garantia',       desc: 'Comunicação visual sobre política de entrega e garantia da marca.',     badge: 'Campanha',     match: '95%', year: '2025', tags: ['Campanha', 'Motion'] },
        { id: 'v4', ytId: 'TJBivra1fAg', title: 'Trade in TudoBônus',       desc: 'Campanha de Trade-in com call-to-action direto e produção ágil.',       badge: 'Campanha',     match: '96%', year: '2025', tags: ['Campanha', 'Edição'] },
        { id: 'v5', ytId: 'x1yuS8IHdYc', title: 'Trade in TudoBonus 2',     desc: 'Segunda versão da campanha com nova abordagem criativa.',               badge: 'Campanha',     match: '93%', year: '2025', tags: ['Campanha', 'Social'] },
      ]
    },
    {
      id: 'eventos', title: 'Eventos',
      videos: [
        { id: 'v6', ytId: '15z7iaeOTRY', title: 'Evento Amcham Campinas', desc: 'Cobertura da Amcham Campinas.', badge: 'Evento', match: '94%', year: '2025', tags: ['Evento', 'Cobertura'] },
      ]
    },
    {
      id: 'casamentos', title: 'Casamentos',
      videos: []
    }
  ]
};

const STORAGE_KEY = 'mz-portfolio-config';

function loadConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_CONFIG;
    // Deep merge saved over defaults so new fields are always present
    const parsed = JSON.parse(saved);
    return deepMerge(DEFAULT_CONFIG, parsed);
  } catch { return DEFAULT_CONFIG; }
}

function deepMerge(base, override) {
  const result = Object.assign({}, base);
  for (const key of Object.keys(override)) {
    if (override[key] && typeof override[key] === 'object' && !Array.isArray(override[key])) {
      result[key] = deepMerge(base[key] || {}, override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

const CONFIG = loadConfig();

// ===== APPLY THEME (colors) =====
function applyTheme() {
  const t = CONFIG.theme || {};
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --red:       ${t.accentColor    || '#e50914'};
      --red-hover: ${t.accentColor    || '#e50914'};
      --bg:        ${t.bgColor        || '#141414'};
      --text:      ${t.titleColor     || '#ffffff'};
      --text-muted:${t.mutedColor     || '#b3b3b3'};
    }
    .btn-primary { background: ${t.btnPrimaryBg || '#fff'} !important; color: ${t.btnPrimaryText || '#000'} !important; }
    .btn-red, .btn-contact { background: ${t.btnRedBg || '#e50914'} !important; }
    .btn-whatsapp { background: ${t.btnGreenBg || '#25D366'} !important; }
  `;
  document.head.appendChild(style);
}

// ===== APPLY SEO =====
function applySeo() {
  const s = CONFIG.seo || {};
  if (s.title) document.title = s.title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
  if (s.description) meta.content = s.description;
}

// ===== APPLY NAVBAR =====
function applyNavbar() {
  const n = CONFIG.navbar || {};
  const el = document.getElementById('nav-logo');
  if (el && n.logo) el.textContent = n.logo;
}

// ===== APPLY HERO =====
function applyHero() {
  const h = CONFIG.hero || {};
  setText('hero-badge',    h.badge);
  setText('hero-title1',   h.title1);
  setText('hero-title2',   h.title2);
  setText('hero-subtitle', h.subtitle);
  setText('hero-desc',     h.desc);
  setText('hero-btn1',     h.btn1Text);
  setText('hero-btn2',     h.btn2Text);

  const iframe = document.getElementById('hero-yt-iframe');
  if (iframe) {
    iframe.style.opacity = CONFIG.heroOpacity ?? 0.2;
    const id = CONFIG.heroVideoId;
    if (id) {
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&controls=0&playlist=${id}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`;
    }
  }
}

// ===== APPLY ABOUT =====
function applyAbout() {
  const a = CONFIG.about || {};
  setText('about-tag',     a.tag);
  setText('about-heading', a.heading);
  setText('about-bio1',    a.bio1);
  setText('about-bio2',    a.bio2);
  const img = document.getElementById('about-photo-img');
  if (img && a.photoUrl) img.src = a.photoUrl;

  const statsEl = document.getElementById('about-stats');
  if (statsEl && a.stats) {
    statsEl.innerHTML = (a.stats || []).map(s =>
      `<div class="stat"><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></div>`
    ).join('');
  }

  const skillsEl = document.getElementById('about-skills');
  if (skillsEl && a.skills) {
    skillsEl.innerHTML = (a.skills || []).map(s => `<span>${s}</span>`).join('');
  }
}

// ===== APPLY CONTACT =====
function applyContact() {
  const c = CONFIG.contact || {};
  setText('contact-heading',  c.heading);
  setText('contact-subtitle', c.subtitle);

  const emailEl = document.getElementById('contact-email');
  if (emailEl && c.email) { emailEl.href = `mailto:${c.email}`; emailEl.textContent = `✉ ${c.email}`; }

  const waEl = document.getElementById('contact-whatsapp');
  if (waEl && c.whatsapp) waEl.href = `https://wa.me/${c.whatsapp}`;

  const igEl = document.getElementById('contact-instagram');
  if (igEl && c.instagram) igEl.href = c.instagram;
}

// ===== APPLY FOOTER =====
function applyFooter() {
  const f = CONFIG.footer || {};
  setText('footer-logo', f.logo);
  setText('footer-text', f.text);
}

// ===== HELPER =====
function setText(id, value) {
  if (!value) return;
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// ===== RENDER CAROUSEL =====
function renderCarousel() {
  const track = document.getElementById('carousel-track');
  const titleEl = document.getElementById('carousel-title');
  if (!track) return;
  if (titleEl) titleEl.textContent = CONFIG.carousel.title;

  CONFIG.carousel.videos.filter(v => !v.hidden).forEach(v => {
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
    const visibleVideos = (section.videos || []).filter(v => !v.hidden);
    if (!visibleVideos.length) return;

    const sec = document.createElement('section');
    sec.className = 'row';
    sec.innerHTML = `<h2 class="row-title">${section.title}</h2><div class="row-track" id="track-${section.id}"></div>`;
    container.appendChild(sec);

    const track = sec.querySelector('.row-track');
    visibleVideos.forEach(v => {
      const thumb = `https://i.ytimg.com/vi/${v.ytId}/hqdefault.jpg`;
      const tagsHtml = (v.tags || []).map(t => `<span>${t}</span>`).join('');

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
            ${v.desc ? `<p>${v.desc}</p>` : ''}
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
            <div class="modal-meta"><span class="match">${v.match}</span><span class="year">${v.year}</span><span class="duration">9×16</span></div>
            ${v.desc ? `<p class="modal-desc">${v.desc}</p>` : ''}
          </div>
        </div>`;
      container.appendChild(el);
    });
  });
}

// ===== FIND YT ID =====
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

// ===== MODAL =====
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

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
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
  track.addEventListener('transitionend',   () => { prevBtn.disabled = false; nextBtn.disabled = false; });
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
          cards.forEach((card, i) => setTimeout(() => {
            card.style.opacity = '1'; card.style.transform = 'translateY(0)';
          }, i * 60));
          rowObs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    rowObs.observe(row);
  });
}

// ===== INIT =====
applyTheme();
applySeo();
applyNavbar();
applyHero();
applyAbout();
applyContact();
applyFooter();
renderCarousel();
renderSections();
renderModals();
initCarousel();
initScrollReveal();
