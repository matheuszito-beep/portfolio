// ===== DEFAULT CONFIG =====
const DEFAULT_CONFIG = {
  heroVideoId: 'oHrfwTFqsTg',
  heroOpacity: 0.36,

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
    photoUrl: 'assets/IMG_4592.JPG',
  },

  contact: {
    heading:   'Vamos trabalhar juntos?',
    subtitle:  'Aberto para projetos freelance, parcerias e colaborações criativas.',
    email:     'kenni.fer@hotmail.com',
    whatsapp:  '5511921962624',
    instagram: 'https://www.instagram.com/thebackstage.on/',
  },

  footer: {
    logo: 'MZ',
    text: '© 2026 Matheus Zito. Todos os direitos reservados.',
  },

  // Sections: first entry (id:'carousel') is the top featured carousel.
  // The rest are portrait-card mini-carousels.
  sections: [
    { id: 'carousel',   title: 'Vídeos em Destaque' },
    { id: 'anuncios',   title: 'Anúncios' },
    { id: 'eventos',    title: 'Eventos' },
    { id: 'casamentos', title: 'Casamentos' },
  ],

  recap: {
    enabled: true,
    year:    '2025',
    title:   'Recap Project',
    badge:   'No AI',
  },

  // Flat video pool — each video has a 'section' field that matches a section id.
  videoPool: [
    { id: 'ch1', ytId: '194T0HeO7VM', section: 'carousel',   inRecap: true,  title: 'Indústria Fox — 15 Anos',     desc: 'Cobertura cinematográfica do 15º aniversário da Indústria Fox, com narrativa emocional e produção de alto nível.', badge: 'Evento',        match: '98%', year: '2025' },
    { id: 'ch2', ytId: 'oHrfwTFqsTg', section: 'carousel',   inRecap: true,  title: 'WCEF 2025',                    desc: 'Cobertura completa do World Commerce & Contracting Event Forum 2025.',                                           badge: 'Evento',        match: '96%', year: '2025' },
    { id: 'ch3', ytId: '5ifoydf1FRM', section: 'carousel',   inRecap: true,  title: 'Casamento',                    desc: 'Cobertura cinematográfica de casamento.',                                                                        badge: 'Casamento',     match: '97%', year: '2025' },
    { id: 'ch4', ytId: 'iX6ks9MoClw', section: 'carousel',   inRecap: true,  title: 'Evento Corporativo',           desc: 'Cobertura audiovisual de evento corporativo.',                                                                   badge: 'Evento',        match: '95%', year: '2025' },
    { id: 'ch5', ytId: '5j5CPwguo6E', section: 'carousel',   inRecap: true,  title: 'Evento Corporativo 2',         desc: 'Cobertura audiovisual de evento corporativo.',                                                                   badge: 'Evento',        match: '95%', year: '2025' },
    { id: 'v1',  ytId: 'vhwK4yhPBzA', section: 'anuncios',   inRecap: true,  title: 'Parceria Fox & TudoBônus',     desc: 'Anúncio de parceria estratégica com identidade visual sofisticada.',                                             badge: 'Anúncio',       match: '98%', year: '2025', tags: ['Parceria', 'Motion'] },
    { id: 'v2',  ytId: 'KiRR4Upsbrg', section: 'anuncios',   inRecap: true,  title: 'Atendimento TudoBônus',       desc: 'Vídeo de atendimento ao cliente com narrativa envolvente.',                                                      badge: 'Institucional', match: '97%', year: '2025', tags: ['Institucional', 'Edição'] },
    { id: 'v3',  ytId: 'txQJrrwfVHk', section: 'anuncios',   inRecap: true,  title: 'Entrega & Garantia',           desc: 'Comunicação visual sobre política de entrega e garantia da marca.',                                             badge: 'Campanha',      match: '95%', year: '2025', tags: ['Campanha', 'Motion'] },
    { id: 'v4',  ytId: 'TJBivra1fAg', section: 'anuncios',   inRecap: true,  title: 'Trade in TudoBônus',           desc: 'Campanha de Trade-in com call-to-action direto e produção ágil.',                                               badge: 'Campanha',      match: '96%', year: '2025', tags: ['Campanha', 'Edição'] },
    { id: 'v5',  ytId: 'x1yuS8IHdYc', section: 'anuncios',   inRecap: true,  title: 'Trade in TudoBonus 2',         desc: 'Segunda versão da campanha com nova abordagem criativa.',                                                       badge: 'Campanha',      match: '93%', year: '2025', tags: ['Campanha', 'Social'] },
    { id: 'v6',  ytId: '15z7iaeOTRY', section: 'eventos',    inRecap: true,  title: 'Evento Amcham Campinas',       desc: 'Cobertura da Amcham Campinas.',                                                                                 badge: 'Evento',        match: '94%', year: '2025', tags: ['Evento', 'Cobertura'] },
    { id: 'c1',  ytId: 'hhFOKayrlTs', section: 'casamentos', inRecap: true,  title: 'Casamento Monica & Hugo pt 1', desc: 'Cobertura casamento.',                                                                                           badge: 'Casamento',     match: '97%', year: '2025', tags: ['Casamento', 'Cobertura'] },
    { id: 'c2',  ytId: 'MyqpfW8QYnw', section: 'casamentos', inRecap: true,  title: 'Casamento Monica & Hugo pt 2', desc: 'Cobertura casamento.',                                                                                           badge: 'Casamento',     match: '97%', year: '2025', tags: ['Casamento', 'Cobertura'] },
    { id: 'c3',  ytId: 'SOcI2Oru3pQ', section: 'casamentos', inRecap: true,  title: 'Casamento Monica & Hugo pt 3', desc: 'Cobertura casamento.',                                                                                           badge: 'Casamento',     match: '97%', year: '2025', tags: ['Casamento', 'Cobertura'] },
    { id: 'c4',  ytId: 'J1J7x8-rmxY', section: 'casamentos', inRecap: true,  title: 'Casamento Monica & Hugo pt 4', desc: 'Cobertura casamento.',                                                                                           badge: 'Casamento',     match: '97%', year: '2025', tags: ['Casamento', 'Cobertura'] },
    { id: 'c5',  ytId: '4JyzwhOfmwA', section: 'casamentos', inRecap: true,  title: 'Casamento Monica & Hugo pt 5', desc: 'Cobertura casamento.',                                                                                           badge: 'Casamento',     match: '97%', year: '2025', tags: ['Casamento', 'Cobertura'] },
  ],
};

const STORAGE_KEY = 'mz-portfolio-config';

// ===== MIGRATION (old format → new flat videoPool) =====
function migrateConfig(cfg) {
  if (cfg.videoPool) return cfg; // already new format

  const videoPool = [];
  const sections  = [];

  if (cfg.carousel) {
    sections.push({ id: 'carousel', title: cfg.carousel.title || 'Vídeos em Destaque' });
    (cfg.carousel.videos || []).forEach(v => videoPool.push({ ...v, section: 'carousel' }));
  }
  (cfg.sections || []).forEach(sec => {
    sections.push({ id: sec.id, title: sec.title });
    (sec.videos || []).forEach(v => videoPool.push({ ...v, section: sec.id }));
  });

  const migrated = { ...cfg, sections, videoPool };
  delete migrated.carousel;
  return migrated;
}

function loadConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_CONFIG;
    const parsed   = JSON.parse(saved);
    const migrated = migrateConfig(parsed);
    return deepMerge(DEFAULT_CONFIG, migrated);
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

  // Floating buttons
  const floatWa = document.getElementById('float-wa');
  if (floatWa && c.whatsapp) floatWa.href = `https://wa.me/${c.whatsapp}`;

  const floatIg = document.getElementById('float-ig');
  if (floatIg && c.instagram) floatIg.href = c.instagram;
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

// ===== RENDER CAROUSEL (top featured — 16:9) =====
function renderCarousel() {
  const track   = document.getElementById('carousel-track');
  const titleEl = document.getElementById('carousel-title');
  if (!track) return;

  const carouselSection = (CONFIG.sections || []).find(s => s.id === 'carousel');
  if (titleEl) titleEl.textContent = carouselSection?.title || 'Vídeos em Destaque';

  const videos = (CONFIG.videoPool || []).filter(v => v.section === 'carousel' && !v.hidden);
  videos.forEach(v => {
    const cleanId = extractYtId(v.ytId);
    const slide = document.createElement('div');
    slide.className = 'carousel-slide carousel-yt';
    slide.onclick = () => openModal('modal-' + v.id);
    slide.innerHTML = `
      <img class="carousel-thumb"
           src="https://i.ytimg.com/vi/${cleanId}/maxresdefault.jpg"
           alt="${v.title}"
           onerror="this.src='https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg'" />
      <div class="carousel-yt-play">▶</div>
      <div class="carousel-info">
        <span class="carousel-badge">${v.badge}</span>
        <h3>${v.title}</h3>
        <p>${v.desc}</p>
      </div>`;
    track.appendChild(slide);
  });
}

// ===== RENDER SECTION MINI-CAROUSELS (portrait 9×16) =====
function renderSections() {
  const container = document.getElementById('rows-container');
  if (!container) return;
  container.innerHTML = '';

  // Skip 'carousel' section — it's rendered above separately
  const sectionDefs = (CONFIG.sections || []).filter(s => s.id !== 'carousel');

  sectionDefs.forEach(section => {
    const visibleVideos = (CONFIG.videoPool || []).filter(v => v.section === section.id && !v.hidden);

    const sec = document.createElement('section');
    sec.className = 'row';
    sec.dataset.sectionId = section.id;

    const isEmpty = visibleVideos.length === 0;

    sec.innerHTML = `
      <h2 class="row-title">${section.title}</h2>
      <div class="sec-carousel-wrapper">
        <button class="sec-carousel-btn sec-prev" id="sec-prev-${section.id}" aria-label="Anterior"${isEmpty ? ' style="display:none"' : ''}>&#8249;</button>
        <div class="sec-carousel-viewport">
          <div class="sec-carousel-track" id="sec-track-${section.id}"></div>
        </div>
        <button class="sec-carousel-btn sec-next" id="sec-next-${section.id}" aria-label="Próximo"${isEmpty ? ' style="display:none"' : ''}>&#8250;</button>
      </div>`;
    container.appendChild(sec);

    const track = sec.querySelector('.sec-carousel-track');

    if (isEmpty) {
      // Placeholder card
      const ph = document.createElement('div');
      ph.className = 'sec-empty-card';
      ph.innerHTML = `<div><div style="font-size:32px;margin-bottom:10px">🎬</div><span>Novas produções<br>em breve</span></div>`;
      track.appendChild(ph);
    } else {
      visibleVideos.forEach(v => {
        const cleanId  = extractYtId(v.ytId);
        const thumb    = `https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg`;
        const tagsHtml = (v.tags || []).map(t => `<span>${t}</span>`).join('');

        const card = document.createElement('div');
        card.className    = 'card-portrait';
        card.dataset.ytid  = cleanId;
        card.dataset.modal = 'modal-' + v.id;

        card.innerHTML = `
          <div class="card-portrait-media">
            <img src="${thumb}" alt="${v.title}" loading="lazy" />
            <iframe class="card-preview-iframe" src="" allow="autoplay" frameborder="0" tabindex="-1"></iframe>
          </div>
          <div class="card-portrait-info">
            <h3>${v.title}</h3>
            <div class="card-meta" style="margin-bottom:5px">
              <span class="match">${v.match}</span>
              <span class="year">${v.year}</span>
            </div>
            ${tagsHtml ? `<div class="card-tags" style="margin-bottom:8px">${tagsHtml}</div>` : ''}
            <div class="card-actions">
              <button class="btn-play" onclick="openModal('modal-${v.id}');event.stopPropagation()">▶</button>
            </div>
          </div>`;
        track.appendChild(card);
      });
    }
  });

  // Delegate click on rows-container for card-portrait (works on clones too)
  container.addEventListener('click', (e) => {
    if (e.target.closest('.btn-play')) return; // let btn-play handle itself
    const card = e.target.closest('.card-portrait[data-modal]');
    if (card) openModal(card.dataset.modal);
  });
}

// ===== HOVER MUTED PREVIEW =====
function initCardHoverPreviews() {
  // data-hover-init prevents double-binding after cloning
  document.querySelectorAll('.card-portrait[data-ytid]:not([data-hover-init])').forEach(card => {
    card.dataset.hoverInit = '1';
    const iframe = card.querySelector('.card-preview-iframe');
    if (!iframe) return;
    const ytId = card.dataset.ytid;
    let timer = null;

    card.addEventListener('mouseenter', () => {
      timer = setTimeout(() => {
        iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&playsinline=1&enablejsapi=0`;
        card.classList.add('preview-active'); // hides info overlay
      }, 700);
    });

    card.addEventListener('mouseleave', () => {
      if (timer) { clearTimeout(timer); timer = null; }
      iframe.src = '';
      card.classList.remove('preview-active');
    });
  });
}

// ===== DRAG / SWIPE SUPPORT =====
function addDragSwipe(trackEl, prevFn, nextFn, reSnapFn) {
  let startX = 0, startY = 0, baseX = 0;
  let active = false, moved = false;

  const getX = () => new DOMMatrix(window.getComputedStyle(trackEl).transform).m41;

  trackEl.addEventListener('pointerdown', e => {
    active = true; moved = false;
    startX = e.clientX; startY = e.clientY;
    baseX = getX();
    trackEl.setPointerCapture(e.pointerId);
  });

  trackEl.addEventListener('pointermove', e => {
    if (!active) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    // If scrolling vertically, abort horizontal drag
    if (!moved && Math.abs(dy) > Math.abs(dx) + 5) { active = false; return; }
    if (Math.abs(dx) > 6) {
      moved = true;
      e.preventDefault();
      trackEl.style.transition = 'none';
      trackEl.style.transform = `translateX(${baseX + dx}px)`;
    }
  }, { passive: false });

  const onEnd = e => {
    if (!active) return;
    active = false;
    if (!moved) return;
    const dx = e.clientX - startX;
    // Block the next click event if the user actually dragged
    trackEl.addEventListener('click', ev => ev.stopPropagation(), { once: true, capture: true });
    if (Math.abs(dx) > 40) { dx < 0 ? nextFn() : prevFn(); }
    else { reSnapFn(); }
  };

  trackEl.addEventListener('pointerup',     onEnd);
  trackEl.addEventListener('pointercancel', onEnd);
}

// ===== SECTION MINI-CAROUSELS (infinite loop) =====
function initSectionCarousels() {
  const sectionDefs = (CONFIG.sections || []).filter(s => s.id !== 'carousel');

  sectionDefs.forEach(section => {
    const trackEl = document.getElementById('sec-track-' + section.id);
    const prevBtn = document.getElementById('sec-prev-' + section.id);
    const nextBtn = document.getElementById('sec-next-' + section.id);
    if (!trackEl || !prevBtn || !nextBtn) return;

    const originalSlides = Array.from(trackEl.querySelectorAll('.card-portrait'));
    const total = originalSlides.length;
    if (total === 0) return;

    // Calculate how many cards are visible in the viewport
    function cardsVisible() {
      const vw  = trackEl.parentElement.getBoundingClientRect().width;
      const gap = parseFloat(window.getComputedStyle(trackEl).gap) || 10;
      const cw  = originalSlides[0] ? originalSlides[0].getBoundingClientRect().width + gap : 165;
      return Math.max(1, Math.ceil(vw / cw));
    }

    const cloneCount = Math.max(cardsVisible(), 3);

    // Clone last N before first, first N after last
    originalSlides.slice(-cloneCount).forEach(s => trackEl.insertBefore(s.cloneNode(true), trackEl.firstChild));
    originalSlides.slice(0, cloneCount).forEach(s => trackEl.appendChild(s.cloneNode(true)));

    const allSlides = Array.from(trackEl.querySelectorAll('.card-portrait'));
    let current    = cloneCount;
    let animating  = false;

    function getCardWidth() {
      const gap = parseFloat(window.getComputedStyle(trackEl).gap) || 10;
      return (allSlides[current] || allSlides[0]).getBoundingClientRect().width + gap;
    }

    function goTo(index, animate = true) {
      if (animate && animating) return;
      trackEl.style.transition = animate
        ? 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)'
        : 'none';
      trackEl.style.transform = `translateX(-${index * getCardWidth()}px)`;
      current = index;
    }

    trackEl.addEventListener('transitionstart', () => {
      animating = true;
      prevBtn.disabled = true;
      nextBtn.disabled = true;
    });

    trackEl.addEventListener('transitionend', () => {
      animating = false;
      prevBtn.disabled = false;
      nextBtn.disabled = false;
      const firstReal = cloneCount;
      const lastReal  = cloneCount + total - 1;
      if (current < firstReal) goTo(lastReal - (firstReal - current - 1), false);
      else if (current > lastReal) goTo(firstReal + (current - lastReal - 1), false);
    });

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
    window.addEventListener('resize', () => goTo(current, false));
    addDragSwipe(trackEl, () => goTo(current - 1), () => goTo(current + 1), () => goTo(current));

    goTo(current, false);
  });

  // Re-run hover-preview binding to cover cloned cards
  initCardHoverPreviews();
}

// ===== RENDER RECAP BENTO GRID =====
function renderRecap() {
  const container = document.getElementById('recap');
  if (!container) return;

  const rc = CONFIG.recap || {};
  if (rc.enabled === false) { container.style.display = 'none'; return; }

  const videos = (CONFIG.videoPool || []).filter(v => v.inRecap && !v.hidden);
  container.innerHTML = '';
  if (videos.length === 0) return;

  const title = rc.title || 'Recap Project';
  const year  = rc.year  || '2025';
  const badge = rc.badge || '';

  container.innerHTML = `
    <div class="recap-header">
      <h2 class="recap-title">
        ${title}
        <span class="recap-year">${year}</span>
        ${badge ? `<span class="recap-badge">${badge}</span>` : ''}
      </h2>
    </div>
    <div class="recap-grid" id="recap-grid"></div>`;

  const grid = document.getElementById('recap-grid');

  videos.forEach((v, i) => {
    const cleanId     = extractYtId(v.ytId);
    const isLandscape = v.section === 'carousel';
    const isFeatured  = i === 0;

    // Span assignment: featured=2×2, landscape=2×1, portrait=1×2
    const colSpan = (isFeatured || isLandscape) ? 2 : 1;
    const rowSpan = (isFeatured || !isLandscape) ? 2 : 1;

    const item = document.createElement('div');
    item.className = 'recap-item' + (isFeatured ? ' recap-featured' : '');
    item.style.gridColumn = `span ${colSpan}`;
    item.style.gridRow    = `span ${rowSpan}`;
    item.dataset.modal    = 'modal-' + v.id;

    item.innerHTML = `
      <img src="https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg"
           alt="${v.title}" loading="lazy"
           onerror="this.src='https://i.ytimg.com/vi/${cleanId}/mqdefault.jpg'" />
      <div class="recap-item-overlay">
        ${v.badge ? `<span class="recap-item-badge">${v.badge}</span>` : ''}
        <h3>${v.title}</h3>
      </div>
      <div class="recap-item-play">▶</div>`;

    item.addEventListener('click', () => openModal('modal-' + v.id));
    grid.appendChild(item);
  });
}

// ===== RENDER MODALS =====
function renderModals() {
  const container = document.getElementById('modals-container');
  if (!container) return;
  container.innerHTML = '';

  (CONFIG.videoPool || []).forEach(v => {
    const id          = 'modal-' + v.id;
    const isCarousel  = v.section === 'carousel';
    const el          = document.createElement('div');
    el.className      = 'modal-backdrop';
    el.id             = id;
    el.onclick        = (e) => closeModal(e, id);

    if (isCarousel) {
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
    } else {
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
    }
    container.appendChild(el);
  });
}

// ===== EXTRACT CLEAN YT ID (handles full URLs stored in localStorage) =====
function extractYtId(raw) {
  if (!raw) return raw;
  // Already a short ID (no slashes or dots)
  if (!/[./]/.test(raw)) return raw;
  // youtube.com/shorts/ID
  let m = raw.match(/shorts\/([A-Za-z0-9_-]{6,20})/);
  if (m) return m[1];
  // youtube.com/watch?v=ID or youtu.be/ID
  m = raw.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,20})/);
  if (m) return m[1];
  return raw;
}

// ===== FIND YT ID =====
function findYtId(modalId) {
  const vid = (CONFIG.videoPool || []).find(v => 'modal-' + v.id === modalId);
  return extractYtId(vid?.ytId) || null;
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

// ===== MAIN CAROUSEL (featured 16:9) =====
function initCarousel() {
  const track   = document.getElementById('carousel-track');
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
    track.style.transform  = `translateX(-${index * getSlideWidth()}px)`;
    current = index;
  }

  track.addEventListener('transitionend', () => {
    const lastReal  = cloneCount + total - 1;
    const firstReal = cloneCount;
    if (current < firstReal) goTo(lastReal - (firstReal - current - 1), false);
    else if (current > lastReal) goTo(firstReal + (current - lastReal - 1), false);
  });

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  track.addEventListener('transitionstart', () => { prevBtn.disabled = true; nextBtn.disabled = true; });
  track.addEventListener('transitionend',   () => { prevBtn.disabled = false; nextBtn.disabled = false; });
  window.addEventListener('resize', () => goTo(current, false));
  addDragSwipe(track, () => goTo(current - 1), () => goTo(current + 1), () => goTo(current));
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
    el.style.opacity   = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
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
renderRecap();
renderModals();
initCarousel();
initSectionCarousels(); // clones cards then re-binds hover previews
initScrollReveal();
