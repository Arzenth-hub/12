document.addEventListener('DOMContentLoaded', () => {

  // 1. SCROLL REVEAL ANIMATION
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => observer.observe(el));

  // 2. GALERİ RESİMLERİNİ YÜKLE (15 adet dikey 4:5 fotoğraf)
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    const images = [
      { src: 'foto/kirpilmis/01_kadin_ceket.jpg', title: 'Kadın Ceket & Mont' },
      { src: 'foto/kirpilmis/02_magaza_ici.jpg', title: 'Lüks Mağaza Koleksiyonu' },
      { src: 'foto/kirpilmis/03_vitrin_giris.jpg', title: 'X Class Vitrin' },
      { src: 'foto/kirpilmis/04_ceket_askisi.jpg', title: 'Erkek Ceket & Montlar' },
      { src: 'foto/kirpilmis/05_raf_tshirtler.jpg', title: 'Katlı Polo & Tişörtler' },
      { src: 'foto/kirpilmis/06_askida_ustler.jpg', title: 'Kadın Üst Giyim' },
      { src: 'foto/kirpilmis/07_kazaklar_raf.jpg', title: 'Triko & Kazaklar' },
      { src: 'foto/kirpilmis/08_merdiven_magaza.jpg', title: 'Mağaza İçi Tasarım' },
      { src: 'foto/kirpilmis/09_gomlek_halka.jpg', title: 'Polo & Gömlek Çeşitleri' },
      { src: 'foto/kirpilmis/10_montlar_aski.jpg', title: 'Premium Dış Giyim' },
      { src: 'foto/kirpilmis/11_esofman_takim.jpg', title: 'Lüks Eşofman Takımları' },
      { src: 'foto/kirpilmis/12_pantolon_desenli.jpg', title: 'Desenli Özel Takımlar' },
      { src: 'foto/kirpilmis/13_gri_gomlek.jpg', title: 'Klasik & Slim Gömlek' },
      { src: 'foto/kirpilmis/14_polo_tisortler.jpg', title: 'Stil Polo Yaka' },
      { src: 'foto/kirpilmis/15_beyaz_polo_detay.jpg', title: 'Moncler Stil Polo' }
    ];

    images.forEach(imgData => {
      const item = document.createElement('div');
      item.className = 'gallery-item reveal';
      item.innerHTML = `
        <img src="${imgData.src}" alt="${imgData.title}" loading="lazy">
        <div class="gallery-overlay">
          <span>${imgData.title}</span>
        </div>
      `;
      galleryGrid.appendChild(item);
      observer.observe(item);
    });
  }

  // 3. DİL ÇEVİRİ DESTEĞİ (TR / EN)
  const langBtns = document.querySelectorAll('.lang-btn');
  const translatableElements = document.querySelectorAll('[data-tr]');

  const setLanguage = (lang) => {
    document.documentElement.lang = lang;
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    translatableElements.forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) {
        if (el.children.length === 0 || el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'LI' || el.tagName === 'DIV') {
          // Eğer içinde icon vesaire yoksa doğrudan metni değiştir
          if (el.querySelector('svg') === null) {
            el.textContent = text;
          } else {
            // SVG iconu koru
            const svg = el.querySelector('svg').outerHTML;
            el.innerHTML = `${svg} <span>${text}</span>`;
          }
        }
      }
    });
  };

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // 4. HERO EFFECT ON LOAD
  const hero = document.querySelector('.hero');
  if (hero) {
    setTimeout(() => {
      hero.classList.add('hero-loaded');
    }, 200);
  }

  // 5. SMOOTH SCROLL FOR LINKS
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
