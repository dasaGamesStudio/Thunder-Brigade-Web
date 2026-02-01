// Premium Effects for Thunder Brigade Website

// Sticky Navbar Scroll Effect
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll(
    '.project-card, .member-card, .stat-card, .section-header, .about-text, .contact-info, .contact-form'
  );
  
  animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
});

// Add CSS class for visible state
const style = document.createElement('style');
style.textContent = `
  .fade-in-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  /* Cursor Trail Effect Enhancement */
  @media (pointer: fine) {
    * {
      cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" fill="%23c558cf" opacity="0.6"/></svg>') 12 12, auto;
    }
    
    a, button, .project-card, .member-card {
      cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="6" fill="%23de9f52" opacity="0.8"/></svg>') 12 12, pointer;
    }
  }
  
  /* Parallax Effect for Hero Section */
  #hero {
    perspective: 1000px;
  }
  
  /* Improve scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(1, 15, 26, 0.5);
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #c558cf, #8d58d1);
    border-radius: 6px;
    border: 2px solid rgba(1, 15, 26, 0.5);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #de9f52, #c558cf);
  }
`;
document.head.appendChild(style);

// Add subtle parallax to hero section
let heroSection = document.querySelector('#hero');
if (heroSection) {
  window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    let parallax = heroSection.querySelector('.header-text');
    if (parallax && scrolled < window.innerHeight) {
      parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
}

// Add loading animation
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Enhanced Hover Effects for Cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.project-card, .member-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});

console.log('Thunder Brigade Premium Effects Loaded ✨');
