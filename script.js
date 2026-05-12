// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// YouTube video IDs mapeados por modal ID
const YT_VIDEOS = {
  'modal-yt1': '194T0HeO7VM',
};

// ===== MODAL =====
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (YT_VIDEOS[id]) {
    const iframe = modal.querySelector('.modal-yt-iframe');
    if (iframe && !iframe.src.includes('youtube')) {
      iframe.src = `https://www.youtube.com/embed/${YT_VIDEOS[id]}?autoplay=1`;
    }
  }
}

function closeModal(event, id) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById(id);
  if (!modal) return;
  const vid = modal.querySelector('.modal-video');
  if (vid) { vid.pause(); vid.currentTime = 0; }
  const iframe = modal.querySelector('.modal-yt-iframe');
  if (iframe) iframe.src = '';
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
    const vid = modal.querySelector('.modal-video');
    if (vid) { vid.pause(); vid.currentTime = 0; }
    const iframe = modal.querySelector('.modal-yt-iframe');
    if (iframe) iframe.src = '';
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== CARROSSEL HORIZONTAL (loop infinito) =====
(() => {
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!track || !prevBtn || !nextBtn) return;

  const originalSlides = Array.from(track.querySelectorAll('.carousel-slide'));
  const total = originalSlides.length;
  if (total === 0) return;

  // Clona slides para o loop: [clones-fim | originais | clones-início]
  function slidesVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  const cloneCount = Math.max(slidesVisible(), 3);

  // Clones no final (para avançar além do último)
  originalSlides.slice(0, cloneCount).forEach(s => {
    track.appendChild(s.cloneNode(true));
  });
  // Clones no início (para voltar antes do primeiro)
  originalSlides.slice(-cloneCount).forEach(s => {
    track.insertBefore(s.cloneNode(true), track.firstChild);
  });

  const allSlides = Array.from(track.querySelectorAll('.carousel-slide'));
  let current = cloneCount; // começa nos slides originais

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

  // Após transição, pula silenciosamente para o equivalente real se estiver num clone
  track.addEventListener('transitionend', () => {
    const visible = slidesVisible();
    const lastReal = cloneCount + total - 1;
    const firstReal = cloneCount;

    if (current < firstReal) {
      goTo(lastReal - (firstReal - current - 1), false);
    } else if (current > lastReal) {
      goTo(firstReal + (current - lastReal - 1), false);
    }
  });

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Desabilita botões durante a transição para evitar cliques rápidos
  track.addEventListener('transitionstart', () => {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  });
  track.addEventListener('transitionend', () => {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  });

  window.addEventListener('resize', () => goTo(current, false));

  goTo(current, false);
})();

// ===== HOVER VIDEO PREVIEW (7 segundos, sem som) =====
const PREVIEW_DURATION = 7000;

document.querySelectorAll('.card').forEach(card => {
  const preview = card.querySelector('.card-preview');
  if (!preview) return;

  let previewTimeout = null;

  card.addEventListener('mouseenter', () => {
    clearTimeout(previewTimeout);
    preview.currentTime = 0;
    preview.muted = true;
    preview.play().catch(() => {});
    previewTimeout = setTimeout(() => {
      preview.pause();
      preview.currentTime = 0;
    }, PREVIEW_DURATION);
  });

  card.addEventListener('mouseleave', () => {
    clearTimeout(previewTimeout);
    preview.pause();
    preview.currentTime = 0;
  });
});

// ===== SCROLL REVEAL =====
const revealStyle = document.createElement('style');
revealStyle.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(revealStyle);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.row, .carousel-section, .about-content, .contact-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

// Stagger cards
document.querySelectorAll('.row').forEach(row => {
  const cards = row.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });

  const rowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, i * 60);
        });
        rowObserver.disconnect();
      }
    });
  }, { threshold: 0.1 });

  rowObserver.observe(row);
});
