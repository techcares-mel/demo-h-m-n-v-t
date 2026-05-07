/* ============================================================
   HẺM ĂN VẶT — script.js
   Vietnamese street food restaurant — Sunshine North, Melbourne
   ============================================================ */

'use strict';

/* ---- DOM REFERENCES ---- */
const navbar        = document.getElementById('navbar');
const scrollBar     = document.getElementById('scroll-progress');
const backToTop     = document.getElementById('back-to-top');
const hamburger     = document.getElementById('hamburger');
const mobileMenu    = document.getElementById('mobile-menu');
const mobileClose   = document.getElementById('mobile-close');
const mobileLinks   = document.querySelectorAll('.mobile-link');
const contactForm   = document.getElementById('contact-form');
const thankYou      = document.getElementById('thank-you');
const hero          = document.querySelector('.hero');
const navLinks      = document.querySelectorAll('.nav-link');

/* ============================================================
   NAV — scroll behaviour
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
  const scrollTop    = window.scrollY;
  const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
  const progress     = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollBar.style.width = progress + '%';
}

/* ============================================================
   BACK-TO-TOP BUTTON
   ============================================================ */
function handleBackToTop() {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   ACTIVE NAV LINK (highlight on scroll)
   ============================================================ */
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!link) return;
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

/* ============================================================
   SCROLL EVENT — combined for performance
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
// Run once on load to set initial state
handleNavScroll();
updateScrollProgress();
handleBackToTop();

/* ============================================================
   HERO — slow pan Ken Burns on load
   ============================================================ */
window.addEventListener('load', () => {
  if (hero) hero.classList.add('loaded');
});

/* ============================================================
   MOBILE MENU
   ============================================================ */
function openMobileMenu() {
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  mobileClose.focus();
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  hamburger.focus();
}

hamburger.addEventListener('click', openMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    closeMobileMenu();
  }
});

/* ============================================================
   SCROLL REVEAL — IntersectionObserver
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

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/* ============================================================
   SMOOTH SCROLL for anchor links
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
   CONTACT FORM — submit handler
   ============================================================ */
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    // Basic validation
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      // Shake the submit button
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.style.animation = 'none';
      btn.offsetHeight; // reflow
      btn.style.background = '#7f1d1d';
      setTimeout(() => { btn.style.background = ''; }, 800);
      return;
    }

    // Hide form, show thank you
    contactForm.style.transition = 'opacity 0.4s ease';
    contactForm.style.opacity = '0';
    setTimeout(() => {
      contactForm.hidden = true;
      if (thankYou) {
        thankYou.hidden = false;
        thankYou.style.opacity = '0';
        thankYou.style.transition = 'opacity 0.5s ease';
        requestAnimationFrame(() => {
          thankYou.style.opacity = '1';
        });
      }
    }, 400);
  });
}

/* ============================================================
   GALLERY — keyboard accessibility
   ============================================================ */
document.querySelectorAll('.gallery-item').forEach(item => {
  item.setAttribute('tabindex', '0');
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const overlay = item.querySelector('.gallery-overlay');
      if (overlay) {
        const isVisible = overlay.style.opacity === '1';
        overlay.style.opacity = isVisible ? '0' : '1';
      }
    }
  });
});

/* ============================================================
   LANTERN GLOW on nav logo — subtle pulse
   ============================================================ */
const lanterns = document.querySelectorAll('.logo-lantern');
lanterns.forEach((el, i) => {
  // Stagger slightly
  el.style.animationDelay = (i * 0.3) + 's';
});

// Inject keyframe for lantern glow via JS (avoids external CSS dependency)
const style = document.createElement('style');
style.textContent = `
  @keyframes lanternPulse {
    0%, 100% { filter: drop-shadow(0 0 6px rgba(200, 57, 43, 0.5)); }
    50%       { filter: drop-shadow(0 0 14px rgba(212, 168, 71, 0.8)); }
  }
  .logo-lantern {
    animation: lanternPulse 3s ease-in-out infinite;
    display: inline-block;
  }
`;
document.head.appendChild(style);

/* ============================================================
   PERFORMANCE — lazy images via native loading="lazy"
   (all images already have loading="lazy" in HTML)
   ============================================================ */

/* ============================================================
   INIT — run immediately
   ============================================================ */
(function init() {
  // Ensure all already-in-view reveals fire on slow networks
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('visible');
      }
    });
  }, 300);
})();
