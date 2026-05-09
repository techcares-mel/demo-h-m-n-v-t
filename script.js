'use strict';

/* ============================================================
   HẺM ĂN VẶT — script.js
   Authentic Vietnamese Street Food · Sunshine North, Melbourne
   English-only rebuild
   ============================================================ */

/* ---- DOM REFERENCES ---- */
const navbar      = document.getElementById('navbar');
const scrollBar   = document.getElementById('scroll-progress');
const backToTop   = document.getElementById('back-to-top');
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const mobileLinks = document.querySelectorAll('.mobile-link');
const navLinks    = document.querySelectorAll('.nav-link');
const sections    = document.querySelectorAll('section[id]');

/* ============================================================
   NAV — transparent → blur + dark on scroll (scrollY > 50)
   ============================================================ */
function handleNavScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress  = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (scrollBar) scrollBar.style.width = progress + '%';
}

/* ============================================================
   BACK-TO-TOP BUTTON — shows when scrollY > 300
   ============================================================ */
function handleBackToTop() {
  if (!backToTop) return;
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   ACTIVE NAV LINK — highlight current section on scroll
   ============================================================ */
function updateActiveNav() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    const id   = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!link) return;
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

/* ============================================================
   SCROLL EVENT — RAF-throttled for performance
   ============================================================ */
let ticking = false;

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      handleNavScroll();
      updateScrollProgress();
      handleBackToTop();
      updateActiveNav();
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });

// Set initial state immediately on load
handleNavScroll();
updateScrollProgress();
handleBackToTop();

/* ============================================================
   MOBILE MENU
   ============================================================ */
function openMobileMenu() {
  if (!mobileMenu || !hamburger) return;
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  if (mobileClose) mobileClose.focus();
}

function closeMobileMenu() {
  if (!mobileMenu || !hamburger) return;
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  hamburger.focus();
}

if (hamburger) hamburger.addEventListener('click', openMobileMenu);
if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);

// Close on nav link click
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
    closeMobileMenu();
  }
});

/* ============================================================
   SCROLL REVEAL — IntersectionObserver (threshold: 0.15)
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   STATS COUNTER — count-up with requestAnimationFrame
   easeOutQuad, 1500ms duration, triggered by IntersectionObserver
   ============================================================ */
function easeOutQuad(t) {
  return t * (2 - t);
}

function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 1500;
  let startTime  = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed  = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = easeOutQuad(progress);
    const current  = Math.floor(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target + suffix;
    }
  }

  requestAnimationFrame(step);
}

// Observe stat number elements — animate when scrolled into view
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat-number[data-target]').forEach(el => {
  statObserver.observe(el);
});

/* ============================================================
   SMOOTH SCROLL — offset for fixed nav height
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const navHeight = navbar ? navbar.offsetHeight : 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ============================================================
   CONTACT FORM — submit handler (no backend, pure JS)
   ============================================================ */
const contactForm   = document.getElementById('contact-form');
const thankYou      = document.getElementById('thank-you');
const formContainer = document.getElementById('form-container');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name    = document.getElementById('f-name') ? document.getElementById('f-name').value.trim() : '';
    const email   = document.getElementById('f-email') ? document.getElementById('f-email').value.trim() : '';
    const message = document.getElementById('f-message') ? document.getElementById('f-message').value.trim() : '';

    // Basic validation — flash the submit button if fields are missing
    if (!name || !email || !message) {
      const btn = contactForm.querySelector('button[type="submit"]');
      if (btn) {
        const orig = btn.style.background;
        btn.style.transition = 'none';
        btn.style.background = '#7a3d0a';
        setTimeout(() => {
          btn.style.transition = '';
          btn.style.background = orig;
        }, 800);
      }
      return;
    }

    // Fade out form, reveal English thank-you message
    if (formContainer) {
      formContainer.style.transition = 'opacity 0.4s ease';
      formContainer.style.opacity    = '0';
      setTimeout(() => {
        formContainer.style.display = 'none';
        if (thankYou) {
          thankYou.hidden           = false;
          thankYou.style.opacity    = '0';
          thankYou.style.transition = 'opacity 0.5s ease';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              thankYou.style.opacity = '1';
            });
          });
        }
      }, 400);
    }
  });
}

/* ============================================================
   INIT — fire reveals for elements already in viewport
   on slow connections / cached pages
   ============================================================ */
(function init() {
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('visible');
      }
    });
  }, 300);
})();
