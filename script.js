// ===== DEFAULT CONFIG =====
const DEFAULT_CONFIG = {
  heroVideoId: 'oHrfwTFqsTg',
  heroOpacity: 0.36,

  heroLayout: {
    video: { x: 0, y: 0, width: 100, height: 100, objectFit: 'cover', opacity: 0.36 },
    text:  { x: 2, y: 13, maxWidth: 61, align: 'left' },
  },

  theme: {
    accentColor:    '#b81818',
    bgColor:        '#000000',
    titleColor:     '#ffffff',
    mutedColor:     '#bababa',
    btnPrimaryBg:   '#b81818',
    btnPrimaryText: '#ffffff',
    btnRedBg:       '#b81818',
    btnGreenBg:     '#25D366',
  },

  seo: {
    title:       'Matheus Zito — Portfólio',
    description: 'Motion Designer & Editor de Vídeo. Portfólio de Matheus Zito.',
  },

  navbar: { logo: 'MZ' },

  hero: {
    badge:    'IDEIAS GANHAM VIDA',
    title1:   'MOVIMENTO',
    title2:   'EM IMAGENS',
    subtitle: 'Motion Designer & Editor de Vídeo',
    desc:     'Motion Designer & Editor de Vídeo especializado em conteúdo para empresas e marcas que converte audiência em resultado.',
    btn1Text: 'CONHEÇA MEU TRABALHO →',
    btn2Text: '',
  },

  about: {
    tag:      'Sobre mim',
    heading:  'Por trás das câmeras',
    bio1:     'Sou editor de vídeo e motion designer especializado em conteúdo para redes sociais, campanhas publicitárias e vídeos institucionais. Já trabalhei com marcas, criadores e agências de todo o Brasil.',
    bio2:     'Minha especialidade está em unir técnica e criatividade — seja num hook que prende em 3 segundos ou numa campanha que fortalece uma marca.',
    stats: [
      { num: '+150', label: 'Projetos entregues' },
      { num: '+30',  label: 'Clientes satisfeitos' },
      { num: '+3',   label: 'Anos de experiência' },
    ],
    skills:   ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'Motion Graphics', 'Color Grading', 'Sound Design'],
    photoUrl: 'assets/IMG_4592.JPG',
  },

  contact: {
    heading:   'Vamos trabalhar juntos?',
    subtitle:  'Aberto para projetos freelance, parcerias e colaborações criativas.',
    email:     'contato@matheuszito.com.br',
    whatsapp:  '5511921962624',
    instagram: 'https://www.instagram.com/thebackstage.on/',
  },

  footer: {
    logo: 'MZ',
    text: '© 2026 Matheus Zito. Todos os direitos reservados.',
  },

  services: [
    { title: 'Filmes & Vídeos',      desc: 'Produção e edição de vídeos institucionais, publicitários e documentais com direção de arte consistente.' },
    { title: 'Conteúdo para Redes',  desc: 'Reels, Shorts e stories que retêm atenção nos primeiros 3 segundos e engajam do início ao fim.' },
    { title: 'Identidade Visual',     desc: 'Animações, títulos e elementos visuais que elevam a percepção de marca e profissionalizam seu conteúdo.' },
    { title: 'Sites e Sistemas',     desc: 'Desenvolvimento web moderno, responsivo e focado em performance para negócios digitais.' },
    { title: 'Automações Digitais',  desc: 'Fluxos automatizados que economizam tempo e escalam sua operação sem aumentar a equipe.' },
  ],

  ensaios: [], // álbuns fotográficos — gerenciados pelo admin

  produtos: [
    {
      id: 'teleprompter-remoto',
      title: 'Teleprompter Remoto',
      category: 'FERRAMENTA',
      desc: 'Leia seu roteiro olhando para a lente. Controle com a mão livre usando outro celular como controle remoto.',
      price: 'R$ 11,90',
      coverUrl: 'assets/teleprompter-remoto.webp',
      link: 'https://pay.hotmart.com/V108368987Q',
    },
  ], // produtos / links externos — gerenciados pelo admin

  // Sections: first entry (id:'carousel') is the top featured carousel.
  // The rest are portrait-card mini-carousels.
  sections: [
    { id: 'carousel',   title: 'Projetos em Destaque' },
    { id: 'anuncios',   title: 'Anúncios' },
    { id: 'eventos',    title: 'Eventos' },
    { id: 'casamentos', title: 'Casamentos' },
  ],

  // Flat video pool — each video has a 'section' field that matches a section id.
  videoPool: [
    { id: 'ch1', ytId: '194T0HeO7VM', section: 'carousel',   title: 'Indústria Fox — 15 Anos',   desc: 'Cobertura cinematográfica do 15º aniversário da Indústria Fox, com narrativa emocional e produção de alto nível.', badge: 'Evento',    match: '98%', year: '2025' },
    { id: 'ch2', ytId: 'oHrfwTFqsTg', section: 'carousel',   title: 'WCEF 2025',                  desc: 'Cobertura completa do World Commerce & Contracting Event Forum 2025.', badge: 'Evento',    match: '96%', year: '2025' },
    { id: 'ch3', ytId: '5ifoydf1FRM', section: 'carousel',   title: 'Casamento',                  desc: 'Cobertura cinematográfica de casamento.', badge: 'Casamento', match: '97%', year: '2025' },
    { id: 'ch4', ytId: 'iX6ks9MoClw', section: 'carousel',   title: 'Evento Corporativo',         desc: 'Cobertura audiovisual de evento corporativo.', badge: 'Evento',    match: '95%', year: '2025' },
    { id: 'ch5', ytId: '5j5CPwguo6E', section: 'carousel',   title: 'Evento Corporativo 2',       desc: 'Cobertura audiovisual de evento corporativo.', badge: 'Evento',    match: '95%', year: '2025' },
    { id: 'ch6', ytId: '0ZbTC1q7FCk', section: 'carousel',   title: 'Novo Vídeo',                 desc: '', badge: 'Evento',    match: '95%', year: '2025' },
    { id: 'v1',  ytId: 'vhwK4yhPBzA', section: 'anuncios',   title: 'Parceria Fox & TudoBônus',   desc: 'Anúncio de parceria estratégica com identidade visual sofisticada.', badge: 'Anúncio',      match: '98%', year: '2025', vertical: true, tags: ['Parceria', 'Motion'] },
    { id: 'v2',  ytId: 'KiRR4Upsbrg', section: 'anuncios',   title: 'Atendimento TudoBônus',     desc: 'Vídeo de atendimento ao cliente com narrativa envolvente.', badge: 'Institucional', match: '97%', year: '2025', vertical: true, tags: ['Institucional', 'Edição'] },
    { id: 'v3',  ytId: 'txQJrrwfVHk', section: 'anuncios',   title: 'Entrega & Garantia',         desc: 'Comunicação visual sobre política de entrega e garantia da marca.', badge: 'Campanha',     match: '95%', year: '2025', vertical: true, tags: ['Campanha', 'Motion'] },
    { id: 'v4',  ytId: 'TJBivra1fAg', section: 'anuncios',   title: 'Trade in TudoBônus',         desc: 'Campanha de Trade-in com call-to-action direto e produção ágil.', badge: 'Campanha',     match: '96%', year: '2025', vertical: true, tags: ['Campanha', 'Edição'] },
    { id: 'v5',  ytId: 'x1yuS8IHdYc', section: 'anuncios',   title: 'Trade in TudoBonus 2',       desc: 'Segunda versão da campanha com nova abordagem criativa.', badge: 'Campanha',     match: '93%', year: '2025', vertical: true, tags: ['Campanha', 'Social'] },
    { id: 'v6',  ytId: '15z7iaeOTRY', section: 'eventos',    title: 'Evento Amcham Campinas',     desc: 'Cobertura da Amcham Campinas.', badge: 'Evento',        match: '94%', year: '2025', tags: ['Evento', 'Cobertura'] },
    { id: 'v7',  ytId: 'dr7vNgiEbiE', section: 'eventos',    title: 'Novo Evento',                desc: '', badge: 'Evento',        match: '94%', year: '2025', tags: ['Evento', 'Cobertura'] },
    { id: 'v8',  ytId: 'ehcIkxzkTd8', section: 'eventos',    title: 'Novo Evento 2',              desc: '', badge: 'Evento',        match: '94%', year: '2025', tags: ['Evento', 'Cobertura'] },
    { id: 'c1',  ytId: 'hhFOKayrlTs', section: 'casamentos', title: 'Casamento Monica & Hugo pt 1', desc: 'Cobertura casamento.', badge: 'Casamento', match: '97%', year: '2025', vertical: true, tags: ['Casamento', 'Cobertura'] },
    { id: 'c2',  ytId: 'MyqpfW8QYnw', section: 'casamentos', title: 'Casamento Monica & Hugo pt 2', desc: 'Cobertura casamento.', badge: 'Casamento', match: '97%', year: '2025', vertical: true, tags: ['Casamento', 'Cobertura'] },
    { id: 'c3',  ytId: 'SOcI2Oru3pQ', section: 'casamentos', title: 'Casamento Monica & Hugo pt 3', desc: 'Cobertura casamento.', badge: 'Casamento', match: '97%', year: '2025', vertical: true, tags: ['Casamento', 'Cobertura'] },
    { id: 'c4',  ytId: 'J1J7x8-rmxY', section: 'casamentos', title: 'Casamento Monica & Hugo pt 4', desc: 'Cobertura casamento.', badge: 'Casamento', match: '97%', year: '2025', vertical: true, tags: ['Casamento', 'Cobertura'] },
    { id: 'c5',  ytId: '4JyzwhOfmwA', section: 'casamentos', title: 'Casamento Monica & Hugo pt 5', desc: 'Cobertura casamento.', badge: 'Casamento', match: '97%', year: '2025', vertical: true, tags: ['Casamento', 'Cobertura'] },
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
  // nothing dynamic needed for the horizontal navbar
}

// ===== HORIZONTAL NAVBAR =====
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('navbar-hamburger');
  const mobileMenu = document.getElementById('navbar-mobile');
  if (!navbar) return;

  // Scroll: add .scrolled
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Active nav link via IntersectionObserver
  const navLinks = document.querySelectorAll('.navbar-links a');
  const sections = Array.from(navLinks)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = (id) => {
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  };

  if (sections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => io.observe(s));
  }

  // Mobile hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('.navbar-mobile-link, .navbar-mobile-cta').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }
}

// ===== APPLY HERO =====
function applyHero() {
  const h = CONFIG.hero || {};
  // new layout IDs
  const eyebrowEl = document.querySelector('.hero-eyebrow');
  if (eyebrowEl && h.badge) eyebrowEl.textContent = h.badge;
  setText('hero-title1', h.title1);
  setText('hero-title2', h.title2);
  setText('hero-desc',   h.desc);
  setText('hero-btn1',   h.btn1Text);

  const iframe = document.getElementById('hero-yt-iframe');
  const ytBg   = document.querySelector('.hero-yt-bg');
  const photoBg = document.getElementById('hero-photo-bg');
  if (iframe) {
    const id = CONFIG.heroVideoId;
    if (id) {
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&controls=0&playlist=${id}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`;
      iframe.style.opacity = CONFIG.heroOpacity ?? 0.3;
      if (ytBg)   ytBg.classList.add('active');
      if (photoBg) photoBg.style.display = 'none';
    }
  }

  // Apply heroLayout: position video layer and text block
  const hl = CONFIG.heroLayout;
  if (hl) {
    const vl = hl.video || {};
    if (ytBg) {
      ytBg.style.left   = (vl.x      ?? 0)    + '%';
      ytBg.style.top    = (vl.y      ?? 0)    + '%';
      ytBg.style.width  = (vl.width  ?? 100)  + '%';
      ytBg.style.height = (vl.height ?? 100)  + '%';
      ytBg.style.backgroundSize = vl.objectFit === 'contain' ? 'contain' : vl.objectFit === 'none' ? 'auto' : 'cover';
    }
    const tl = hl.text || {};
    const heroContent = document.querySelector('.hero-content') || document.querySelector('.hero-body');
    if (heroContent && (tl.x !== undefined || tl.y !== undefined)) {
      heroContent.style.position  = 'absolute';
      heroContent.style.left      = (tl.x      ?? 8)  + '%';
      heroContent.style.top       = (tl.y      ?? 35) + '%';
      heroContent.style.maxWidth  = (tl.maxWidth ?? 55) + '%';
      heroContent.style.textAlign = tl.align  || 'left';
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
  if (emailEl && c.email) emailEl.href = `mailto:${c.email}`;

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
  // footer-text is a <p> in footer-bottom; don't touch footer-logo HTML
  const footerTextEl = document.querySelector('.footer-bottom p');
  if (footerTextEl && f.text) footerTextEl.textContent = f.text;
}

// ===== APPLY SERVICES =====
function applyServices() {
  const services = CONFIG.services || [];
  services.forEach((svc, i) => {
    const titleEl = document.getElementById('svc-title-' + i);
    const descEl  = document.getElementById('svc-desc-' + i);
    if (titleEl && svc.title) titleEl.textContent = svc.title;
    if (descEl  && svc.desc)  descEl.textContent  = svc.desc;
  });
}

// ===== HELPER =====
function setText(id, value) {
  if (!value) return;
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// ===== RENDER FOLDER GRID (top featured — 16:9 folders) =====
function renderCarousel() {
  const grid  = document.getElementById('carousel-track');
  if (!grid) return;

  const videos = (CONFIG.videoPool || []).filter(v => v.section === 'carousel' && !v.hidden);
  videos.forEach(v => {
    const cleanId = extractYtId(v.ytId);
    const card = document.createElement('div');
    card.className  = 'folder-card';
    card.tabIndex   = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', v.title);
    card.onclick    = () => openModal('modal-' + v.id);
    card.onkeydown  = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal('modal-' + v.id); } };
    card.innerHTML  = `
      <div class="folder-tab"></div>
      <div class="folder-body">
        <img class="folder-thumb"
             src="https://i.ytimg.com/vi/${cleanId}/maxresdefault.jpg"
             alt="${v.title}"
             onerror="this.src='https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg'" />
        <div class="folder-play">▶</div>
        <div class="folder-glass">
          <span class="folder-badge">${v.badge || 'Vídeo'}</span>
          <div class="folder-row">
            <h3 class="folder-title">${v.title}</h3>
            <span class="folder-year">${v.year || ''}</span>
          </div>
        </div>
      </div>`;
    grid.appendChild(card);
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

// ===== RENDER ENSAIOS FOTOGRÁFICOS =====
function renderEnsaios() {
  const section = document.getElementById('ensaios');
  if (!section) return;

  const albums = (CONFIG.ensaios || []).filter(a => !a.hidden);
  section.innerHTML = '';

  if (albums.length === 0) {
    section.style.display = 'none';
    return;
  }
  section.style.display = '';

  section.innerHTML = `
    <h2 class="row-title">Ensaios Fotográficos</h2>
    <div class="ensaios-grid"></div>`;

  const grid = section.querySelector('.ensaios-grid');

  albums.forEach(album => {
    const coverUrl = album.cover ? driveImg(album.cover, 600) : '';
    const count    = (album.photos || []).length;

    const card = document.createElement('div');
    card.className = 'ensaio-card';
    card.innerHTML = `
      <div class="ensaio-cover"${coverUrl ? ` style="background-image:url('${coverUrl}')"` : ''}>
        ${!coverUrl ? '<div class="ensaio-cover-ph">📷</div>' : ''}
        <div class="ensaio-cover-overlay">
          <span class="ensaio-count">${count} foto${count !== 1 ? 's' : ''}</span>
        </div>
      </div>
      <div class="ensaio-info">
        <h3>${album.title || 'Sem título'}</h3>
        ${album.date ? `<span class="ensaio-date">${album.date}</span>` : ''}
      </div>`;
    card.addEventListener('click', () => openAlbum(album));
    grid.appendChild(card);
  });
}

// ===== ALBUM LIGHTBOX =====
let _album     = null;
let _viewerIdx = 0;

function openAlbum(album) {
  _album = album;
  const photos = album.photos || [];

  let backdrop = document.getElementById('album-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'album-backdrop';
    backdrop.className = 'album-backdrop';
    document.body.appendChild(backdrop);
  }

  backdrop.innerHTML = `
    <div class="album-modal">
      <div class="album-modal-hdr">
        <div>
          <h2 class="album-modal-title">${album.title || ''}</h2>
          ${album.date ? `<span class="album-modal-date">${album.date}</span>` : ''}
        </div>
        <button class="album-modal-close" onclick="closeAlbum()">✕</button>
      </div>
      <div class="album-photos-grid">
        ${photos.map((p, i) => `
          <div class="album-photo-item" onclick="openViewer(${i})">
            <img src="${driveImg(p.url || p, 800)}" loading="lazy" />
          </div>`).join('')}
      </div>
    </div>
    <div class="photo-viewer" id="photo-viewer" style="display:none">
      <button class="viewer-btn viewer-close-btn" onclick="closeViewer()">✕</button>
      <button class="viewer-btn viewer-prev-btn"  onclick="navViewer(-1)">&#8249;</button>
      <div class="viewer-img-wrap"><img id="viewer-img" src="" /></div>
      <button class="viewer-btn viewer-next-btn"  onclick="navViewer(1)">&#8250;</button>
      <div class="viewer-counter" id="viewer-counter"></div>
    </div>`;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAlbum() {
  const el = document.getElementById('album-backdrop');
  if (el) el.classList.remove('open');
  document.body.style.overflow = '';
}

function openViewer(index) {
  _viewerIdx = index;
  const viewer = document.getElementById('photo-viewer');
  if (viewer) { viewer.style.display = 'flex'; updateViewer(); }
}

function closeViewer() {
  const viewer = document.getElementById('photo-viewer');
  if (viewer) viewer.style.display = 'none';
}

function navViewer(dir) {
  const photos = (_album || {}).photos || [];
  _viewerIdx = (_viewerIdx + dir + photos.length) % photos.length;
  updateViewer();
}

function updateViewer() {
  const photos = (_album || {}).photos || [];
  const p = photos[_viewerIdx];
  if (!p) return;
  const img = document.getElementById('viewer-img');
  const ctr = document.getElementById('viewer-counter');
  if (img) img.src = driveImg(p.url || p, 1600);
  if (ctr) ctr.textContent = `${_viewerIdx + 1} / ${photos.length}`;
}

// ===== RENDER PRODUTOS =====
function renderProdutos() {
  const section = document.getElementById('produtos');
  if (!section) return;

  const produtos = (CONFIG.produtos || []).filter(p => !p.hidden);

  section.style.display = '';

  const grid = document.getElementById('produtos-grid');
  if (!grid) return;
  grid.innerHTML = '';

  if (produtos.length === 0) {
    grid.innerHTML = '<div class="produtos-empty"><p>Em breve — seus produtos aparecerão aqui.</p></div>';
    return;
  }

  produtos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'produto-card';
    card.innerHTML = `
      <div class="produto-cover"${p.coverUrl ? ` style="background-image:url('${p.coverUrl}');background-size:cover"` : ''}>
        ${!p.coverUrl ? '<span>🛒</span>' : ''}
      </div>
      <div class="produto-body">
        ${p.category ? `<span class="produto-badge">${p.category}</span>` : ''}
        <h3>${p.title || 'Produto'}</h3>
        ${p.desc ? `<p>${p.desc}</p>` : '<p></p>'}
        ${p.price ? `<div class="produto-price">${p.price}</div>` : ''}
        ${p.link
          ? `<a class="btn-produto" href="${p.link}" target="_blank" rel="noopener">Ver produto ↗</a>`
          : `<button class="btn-produto" disabled>Em breve</button>`
        }
      </div>`;
    grid.appendChild(card);
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

// ===== GOOGLE DRIVE HELPERS =====
function extractDriveId(input) {
  if (!input) return '';
  const m = input.match(/\/d\/([a-zA-Z0-9_-]{20,})/);
  if (m) return m[1];
  if (/^[a-zA-Z0-9_-]{20,}$/.test(input.trim())) return input.trim();
  return '';
}

function driveImg(idOrUrl, size) {
  const id = extractDriveId(idOrUrl) || idOrUrl;
  if (!id) return '';
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size || 800}`;
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
  // Album / photo viewer keyboard nav
  const albumOpen  = document.getElementById('album-backdrop')?.classList.contains('open');
  const viewerOpen = albumOpen && document.getElementById('photo-viewer')?.style.display !== 'none';

  if (albumOpen) {
    if (e.key === 'Escape') { viewerOpen ? closeViewer() : closeAlbum(); return; }
    if (viewerOpen) {
      if (e.key === 'ArrowLeft')  { navViewer(-1); return; }
      if (e.key === 'ArrowRight') { navViewer(1);  return; }
    }
    return;
  }

  // Video modals ESC
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
    const iframe = modal.querySelector('.modal-yt-iframe');
    if (iframe) iframe.src = '';
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// (navbar scroll is handled inside initNavbar)

// ===== MAIN CAROUSEL (featured 16:9) — now a folder grid, no nav needed =====
function initCarousel() {
  const track   = document.getElementById('carousel-track');
  if (!track) return;
  // folder grid — no prev/next buttons needed
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!prevBtn || !nextBtn) return;

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

// ===== TAB LABELS =====
const TAB_LABELS = {
  carousel:   'DESTAQUES',
  anuncios:   'ANÚNCIOS',
  eventos:    'EVENTOS',
  casamentos: 'CASAMENTOS',
};

// ===== RENDER VIDEO GRID (folder-card style for all sections) =====
function renderVideoGrid(sectionId) {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const videos = (CONFIG.videoPool || []).filter(v => v.section === sectionId && !v.hidden);

  if (videos.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;padding:60px 24px;text-align:center;border:1px dashed var(--line);border-radius:12px;color:var(--text-muted);font-size:14px"><div style="font-size:36px;margin-bottom:12px">🎬</div>Novas produções em breve</div>`;
    return;
  }

  videos.forEach(v => {
    const cleanId = extractYtId(v.ytId);
    const card = document.createElement('div');
    card.className = 'folder-card' + (v.vertical ? ' folder-card--vertical' : '');
    card.tabIndex  = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', v.title);
    card.onclick   = () => openModal('modal-' + v.id);
    card.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal('modal-' + v.id); } };
    card.innerHTML = `
      <div class="folder-tab"></div>
      <div class="folder-body">
        <img class="folder-thumb"
             src="https://i.ytimg.com/vi/${cleanId}/maxresdefault.jpg"
             alt="${v.title}"
             onerror="this.src='https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg'" />
        <div class="folder-play">▶</div>
        <div class="folder-glass">
          <span class="folder-badge">${v.badge || 'Vídeo'}</span>
          <div class="folder-row">
            <h3 class="folder-title">${v.title}</h3>
            <span class="folder-year">${v.year || ''}</span>
          </div>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ===== PORTFOLIO GROUPS + INFINITE CAROUSEL =====
function renderPortfolioGroups() {
  const container = document.getElementById('portfolio-groups');
  if (!container) return;
  container.innerHTML = '';

  const secs = CONFIG.sections || [];
  secs.forEach(sec => {
    const videos = (CONFIG.videoPool || []).filter(v => v.section === sec.id && !v.hidden);
    if (!videos.length) return;

    const cleanId = extractYtId(videos[0].ytId);
    const thumb   = `https://i.ytimg.com/vi/${cleanId}/maxresdefault.jpg`;
    const label   = TAB_LABELS[sec.id] || sec.title.toUpperCase();

    const card = document.createElement('div');
    card.className = 'pgroup-card';
    card.onclick = () => openGroupCarousel(sec.id, label);
    card.innerHTML = `
      <div class="pgroup-bg" style="background-image:url(${thumb})"></div>
      <div class="pgroup-overlay"></div>
      <div class="pgroup-info">
        <span class="pgroup-count">${videos.length} vídeo${videos.length !== 1 ? 's' : ''}</span>
        <span class="pgroup-title">${label}</span>
      </div>`;
    container.appendChild(card);
  });
}

function openGroupCarousel(sectionId, title) {
  const groups = document.getElementById('portfolio-groups');
  const view   = document.getElementById('portfolio-carousel-view');
  if (!groups || !view) return;

  groups.style.display = 'none';
  view.style.display   = 'block';

  const titleEl = document.getElementById('portfolio-carousel-title');
  if (titleEl) titleEl.textContent = title;

  const track = document.getElementById('pcarousel-track');
  if (!track) return;
  track.innerHTML = '';
  track.style.transition = 'none';
  track.style.transform  = 'translateX(0)';

  const videos = (CONFIG.videoPool || []).filter(v => v.section === sectionId && !v.hidden);
  videos.forEach(v => {
    const cleanId = extractYtId(v.ytId);
    const slide = document.createElement('div');
    slide.className = 'pcarousel-slide';
    slide.innerHTML = `
      <div class="folder-card${v.vertical ? ' folder-card--vertical' : ''}"
           tabindex="0" role="button" aria-label="${v.title}"
           onclick="openModal('modal-${v.id}')"
           onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openModal('modal-${v.id}')}">
        <div class="folder-tab"></div>
        <div class="folder-body">
          <img class="folder-thumb"
               src="https://i.ytimg.com/vi/${cleanId}/maxresdefault.jpg"
               alt="${v.title}"
               onerror="this.src='https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg'" />
          <div class="folder-play">▶</div>
          <div class="folder-glass">
            <span class="folder-badge">${v.badge || 'Vídeo'}</span>
            <div class="folder-row">
              <h3 class="folder-title">${v.title}</h3>
              <span class="folder-year">${v.year || ''}</span>
            </div>
          </div>
        </div>
      </div>`;
    track.appendChild(slide);
  });

  requestAnimationFrame(() => initGroupCarousel());
}

function closeGroupCarousel() {
  const groups = document.getElementById('portfolio-groups');
  const view   = document.getElementById('portfolio-carousel-view');
  if (groups) groups.style.display = '';
  if (view)   view.style.display   = 'none';
}

function initGroupCarousel() {
  const track   = document.getElementById('pcarousel-track');
  const prevBtn = document.getElementById('pcarousel-prev');
  const nextBtn = document.getElementById('pcarousel-next');
  if (!track || !prevBtn || !nextBtn) return;

  const realSlides = Array.from(track.children);
  const N = realSlides.length;
  if (!N) return;

  const CLONES = Math.min(3, N);

  // Prepend clones of last CLONES slides
  for (let i = CLONES - 1; i >= 0; i--) {
    const clone = realSlides[N - 1 - (CLONES - 1 - i)].cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.insertBefore(clone, track.firstChild);
  }
  // Append clones of first CLONES slides
  for (let i = 0; i < CLONES; i++) {
    const clone = realSlides[i].cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  }

  let current = CLONES;

  function stepWidth() {
    const allChildren = track.children;
    if (allChildren.length < 2) return allChildren[0]?.offsetWidth || 300;
    return allChildren[1].offsetLeft - allChildren[0].offsetLeft;
  }

  function goTo(idx, animate) {
    track.style.transition = animate
      ? 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
      : 'none';
    track.style.transform = `translateX(${-idx * stepWidth()}px)`;
  }

  goTo(current, false);

  track.addEventListener('transitionend', () => {
    if (current <= CLONES - 1) {
      current = current + N;
      goTo(current, false);
    } else if (current >= CLONES + N) {
      current = current - N;
      goTo(current, false);
    }
  });

  const prev = () => { current--; goTo(current, true); };
  const next = () => { current++; goTo(current, true); };

  prevBtn.onclick = prev;
  nextBtn.onclick = next;

  addDragSwipe(track, prev, next, () => goTo(current, true));
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const style = document.createElement('style');
  style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  document.querySelectorAll('.row, .portfolio-section, .services-section, .about, .contact-cta, .about-content').forEach(el => {
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
applyServices();
applyContact();
applyFooter();
renderPortfolioGroups();
renderEnsaios();
renderProdutos();
renderModals();
initNavbar();
initScrollReveal();
