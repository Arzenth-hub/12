document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Reveal
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));

  // 2. Dil Geçişi
  const langBtns = document.querySelectorAll('.lang-btn');
  const langBtnsArray = Array.from(langBtns);
  const body = document.body;

  const setLanguage = (lang) => {
    document.documentElement.lang = lang;
    // Update button active state
    langBtnsArray.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      // Update text content
      const key = btn.dataset.lang === 'tr' ? 'tr' : 'en';
      const text = btn.textContent;
      if (key === 'tr') {
        btn.textContent = btn.dataset.tr;
      } else {
        btn.textContent = btn.dataset.en;
      }
    });
  };

  langBtnsArray.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      setLanguage(targetLang);
    });
  });

  // 3. Hero Image Fade In (on load)
  const hero = document.querySelector('.hero');
  setTimeout(() => {
    hero.classList.add('hero-loaded');
  }, 500);

  // 4. Butonlar (WhatsApp, Instagram)
  const whatsappLink = document.querySelector('.cta').href;
  // Zaten doğru link

  // 5. Mobil uyumluluk (çift sütun)
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const grid = document.getElementById('gallery');
  const updateGrid = () => {
    if (mediaQuery.matches) {
      grid.style.gridTemplateColumns = '1fr';
    } else {
      grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(220px, 1fr))';
    }
  };
  updateGrid();
  mediaQuery.addEventListener('change', updateGrid);

  // 6. Gallery populasyonu
  const gallery = document.getElementById('gallery');
  const photos = [
    'foto/urun-kare.jpg',
    'foto/urun-kare.jpg'
  ];
  photos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'X Class ürünü';
    img.loading = 'lazy';
    gallery.appendChild(img);
  });

  // 6. Scroll Event (smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});