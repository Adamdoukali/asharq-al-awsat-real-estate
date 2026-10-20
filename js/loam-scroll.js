/**
 * Loam House Scroll Engine & Controller
 * Integrates Lenis Smooth Scroll, GSAP ScrollTrigger reveals, and interactive project swatches
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 900 || ('ontouchstart' in window && window.innerWidth <= 1024);

    // 1. Initialize Lenis Smooth Scroll (Desktop Only — allow native fluid touch scroll on mobile phones)
    let lenis = null;
    if (typeof Lenis !== 'undefined' && !isMobile) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Connect Lenis to GSAP ScrollTrigger if present
      if (typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }
    }

    // 2. Differential Speed Parallax Scroll Engine (Background vs Foreground at Different Speeds)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // A. Hero Multi-Layer Parallax: Video (Slow), Headline (Medium), Inquiry Card (Fast) - Desktop only
      const heroVideo = document.querySelector('.loam-hero-media video');
      const heroCopy = document.querySelector('.loam-hero-copy');
      const heroCard = document.querySelector('.loam-hero-card');

      if (heroVideo && !isMobile) {
        gsap.fromTo(heroVideo,
          { yPercent: -12 },
          {
            yPercent: 16,
            ease: 'none',
            scrollTrigger: {
              trigger: '.loam-hero',
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2
            }
          }
        );
      }

      if (heroCopy && !isMobile) {
        gsap.to(heroCopy, {
          yPercent: -28,
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: '.loam-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });
      }

      if (heroCard && !isMobile) {
        gsap.to(heroCard, {
          yPercent: -48,
          opacity: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.loam-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });
      }

      // B. Chapters Differential Parallax: Background moves slow, Foreground copy floats fast, Figures float faster
      document.querySelectorAll('.loam-chapter').forEach((chapter) => {
        const bgImg = chapter.querySelector('.loam-chapter-bg img');
        const copy = chapter.querySelector('.loam-chapter-copy');
        const figs = chapter.querySelector('.loam-figs');
        const sectionNum = chapter.querySelector('.section-number');

        // 1. Background Image Parallax (Slow, Panoramic travel from -18% to +18%)
        if (bgImg) {
          gsap.fromTo(bgImg,
            { yPercent: -18, scale: 1.12 },
            {
              yPercent: 18,
              scale: 1.0,
              ease: 'none',
              scrollTrigger: {
                trigger: chapter,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2
              }
            }
          );
        }

        // 2. Foreground Text Copy Parallax (Floats vertically through the section)
        if (copy) {
          // Entrance fade
          gsap.fromTo(copy,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: chapter,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );

          // Differential vertical speed scrub (Desktop only)
          if (!isMobile) {
            gsap.fromTo(copy,
              { yPercent: 24 },
              {
                yPercent: -24,
                ease: 'none',
                scrollTrigger: {
                  trigger: chapter,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.2
                }
              }
            );
          }
        }

        // 3. Figures Bar Independent Parallax (Desktop only — floats faster than the copy for 3D depth separation)
        if (figs && !isMobile) {
          gsap.fromTo(figs,
            { yPercent: 36, opacity: 0.3 },
            {
              yPercent: -36,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: chapter,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2
              }
            }
          );
        }

        // 4. Section Number Subtle Offset
        if (sectionNum) {
          gsap.fromTo(sectionNum,
            { y: 15 },
            {
              y: -15,
              ease: 'none',
              scrollTrigger: {
                trigger: chapter,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
              }
            }
          );
        }
      });

      // C. 3D Plans Explorer Differential Parallax (Desktop only)
      const specCard = document.querySelector('.loam-spec-card');
      const planViewer = document.querySelector('.loam-plan-viewer');

      if (specCard && planViewer && !isMobile) {
        gsap.fromTo(specCard,
          { y: 50 },
          {
            y: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: '#plans3d',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2
            }
          }
        );

        gsap.fromTo(planViewer,
          { y: 90 },
          {
            y: -90,
            ease: 'none',
            scrollTrigger: {
              trigger: '#plans3d',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2
            }
          }
        );
      }
    }

    // 3. Smooth Anchor Links via Lenis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            if (lenis) {
              lenis.scrollTo(targetEl, { offset: -60, duration: 1.2 });
            } else {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      });
    });

    // 4. Header Active Link Sync with Scroll
    const projectSections = [
      { id: 'palmares', link: document.querySelector('.loam-nav-projects a[href="#palmares"]') },
      { id: 'assalam', link: document.querySelector('.loam-nav-projects a[href="#assalam"]') },
      { id: 'villas', link: document.querySelector('.loam-nav-projects a[href="#villas"]') },
      { id: 'plans3d', link: document.querySelector('.loam-nav-projects a[href="#plans3d"]') }
    ];

    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 300;
      projectSections.forEach(({ id, link }) => {
        const el = document.getElementById(id);
        if (el && link) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            projectSections.forEach(p => p.link && p.link.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    }, { passive: true });

    // 5. Interactive Finishes Switcher (Loam House Chapter 04 style)
    document.querySelectorAll('.loam-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.loam-tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const targetImg = btn.getAttribute('data-img');
        const imgEl = document.getElementById('loam-finish-img');
        if (imgEl && targetImg) {
          imgEl.style.transition = 'opacity 0.25s ease, transform 0.4s ease';
          imgEl.style.opacity = '0.3';
          setTimeout(() => {
            imgEl.src = targetImg;
            imgEl.style.opacity = '1';
          }, 220);
        }
      });
    });

    // 6. 3D Plans & Typologies Data & Switcher
    const plansData = {
      'palmares-f3': {
        title: 'Appartement F3 — Résidence Palmares',
        summary: 'Agencement familial optimisé : double salon avec loggia, cuisine américaine équipée, suite parentale avec dressing et salle de bain marbrée.',
        surf: '85 m²',
        orient: 'Sud-Ouest (Ensoleillement Direct)',
        parking: 'Place sous-sol titrée',
        statut: '100% Déclaré',
        img: 'assets/projects/live/palmares/2.png'
      },
      'palmares-f4': {
        title: 'Appartement F4 Prestige — Résidence Palmares',
        summary: 'Volumes de réception exceptionnels : grand séjour traversant, 3 chambres spacieuses, double balcon filant et finitions haut standing.',
        surf: '125 m²',
        orient: 'Est / Ouest (Traversant)',
        parking: '2 Places sous-sol titrées',
        statut: '100% Déclaré',
        img: 'assets/projects/live/palmares/12.png'
      },
      'assalam-f3': {
        title: 'Appartement F3 Vue Mer — Résidence Assalam',
        summary: 'Perspective méditerranéenne : baies vitrées toute hauteur ouvrant sur le bleu marin, climatisation centrale réversible et terrasse panoramique.',
        surf: '105 m²',
        orient: 'Plein Nord / Vue Mer',
        parking: 'Place privée réservée',
        statut: '100% Déclaré',
        img: 'assets/projects/live/assalam/13-1.png'
      },
      'villa-duplex': {
        title: 'Villa 4 Niveaux — Les Villas Assalam (Malabata)',
        summary: 'Propriété confidentielle sur la colline de Malabata : 300 m² de parcelle, 360 m² construits, solarium rooftop, jardin d\'agrément et piscine privée.',
        surf: '360 m² (4 Niveaux)',
        orient: 'Panoramique 360° Baie de Tanger',
        parking: 'Garage privatif 2 véhicules',
        statut: 'Titre Foncier Définitif',
        img: 'assets/projects/live/villas/LETEST-5-1024x724.png'
      }
    };

    document.querySelectorAll('.loam-plan-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.loam-plan-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const planKey = btn.getAttribute('data-plan-type');
        const d = plansData[planKey];
        if (!d) return;

        const titleEl = document.getElementById('plan-spec-title');
        const sumEl = document.getElementById('plan-spec-summary');
        const surfEl = document.getElementById('plan-spec-surf');
        const orientEl = document.getElementById('plan-spec-orient');
        const parkEl = document.getElementById('plan-spec-parking');
        const statEl = document.getElementById('plan-spec-statut');
        const canvasEl = document.getElementById('plan-canvas');

        if (titleEl) titleEl.textContent = d.title;
        if (sumEl) sumEl.textContent = d.summary;
        if (surfEl) surfEl.textContent = d.surf;
        if (orientEl) orientEl.textContent = d.orient;
        if (parkEl) parkEl.textContent = d.parking;
        if (statEl) statEl.textContent = d.statut;
        if (canvasEl) {
          canvasEl.style.opacity = '0.3';
          setTimeout(() => {
            canvasEl.style.backgroundImage = `url('${d.img}')`;
            canvasEl.style.opacity = '1';
          }, 200);
        }
      });
    });

    // 7. Project Inspection Modal Drawer
    const projectDetails = {
      'palmares': {
        location: 'Centre-Ville Tanger • Nouveau Stade',
        title: 'Résidence Palmares',
        logo: 'assets/projects/logo_palmares.png',
        price: 'À partir de 688 000 DH',
        img: 'assets/projects/palmares_hero.jpg',
        desc: 'Un complexe résidentiel avant-gardiste sécurisé 24h/24. Idéalement situé face au grand stade de Tanger, il réunit des appartements hauts de gamme, des équipements scolaires complets, des terrains de sport et des piscines privées.',
        specs: [
          ['Surfaces habitables', '40 à 155 m² (Studios, F3, F4)'],
          ['Étage & Immeubles', 'R+7 avec ascenseurs silencieux'],
          ['Stationnement', 'Sous-sol sécurisé avec places titrées'],
          ['Équipements domaine', 'Complexe scolaire, piscines, omnisports'],
          ['Situation légale', '100% Déclaré • Titres fonciers disponibles']
        ],
        whatsapp: '212600907262',
        phone: '+212 665 276 901'
      },
      'assalam': {
        location: 'Littoral Nord • Vue Mer Panoramique',
        title: 'Résidence Assalam',
        logo: 'assets/projects/logo_assalam.png',
        price: 'Dès 13 800 DH / m²',
        img: 'assets/projects/assalam_hero.jpg',
        desc: 'Érigée face à la mer, la Résidence Assalam offre une expérience résidentielle sereine et prestigieuse. Appartements lumineux équipés de climatisation réversible, terrasses ouvertes sur la mer, piscines paysagées et mosquée intégrée.',
        specs: [
          ['Surfaces habitables', '94 à 115 m² (F3 & F4 familiaux)'],
          ['Vue', 'Panoramique Mer & Cap Spartel'],
          ['Climatisation', 'Centrale réversible intégrée'],
          ['Espaces communs', 'Piscines avec solarium, mosquée privée, jardins'],
          ['Sécurité', 'Gardiennage 24/7 avec vidéosurveillance']
        ],
        whatsapp: '212661103547',
        phone: '+212 661 103 547'
      },
      'villas': {
        location: 'Colline de Malabata • Baie de Tanger',
        title: 'Les Villas Assalam',
        logo: 'assets/projects/logo_villas.png',
        price: '2 500 000 DH',
        img: 'assets/projects/villas_hero.jpg',
        desc: 'Une collection exclusive de villas modernes jumelées situées sur la colline très prisée de Malabata. Chaque villa bénéficie de 300 m² de terrain privatif et 360 m² construits sur 4 niveaux avec solarium privatif, jardin et piscine.',
        specs: [
          ['Surface terrain', '300 m² de parcelle privative'],
          ['Surface construite', '360 m² habitables sur 4 niveaux'],
          ['Configuration', '4 suites parentales, triples salons, rooftop vue baie'],
          ['Extérieurs', 'Jardin d\'agrément arboré & piscine individuelle'],
          ['Localisation', 'Malabata résidentiel haut de gamme']
        ],
        whatsapp: '212600907262',
        phone: '+212 600 907 262'
      }
    };

    const modalDrawer = document.getElementById('project-modal');
    const modalCloseBtn = document.querySelector('.loam-modal-close');

    function openProjectModal(key) {
      const data = projectDetails[key];
      if (!data || !modalDrawer) return;

      document.getElementById('modal-loc').textContent = data.location;
      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-price').textContent = data.price;
      document.getElementById('modal-preview-img').src = data.img;
      document.getElementById('modal-desc').textContent = data.desc;

      const modalLogoImg = document.getElementById('modal-logo-img');
      if (modalLogoImg && data.logo) {
        modalLogoImg.src = data.logo;
      }

      const specsTbody = document.getElementById('modal-specs-body');
      if (specsTbody) {
        specsTbody.innerHTML = '';
        data.specs.forEach(([label, val]) => {
          const row = document.createElement('tr');
          row.innerHTML = `<td>${label}</td><td>${val}</td>`;
          specsTbody.appendChild(row);
        });
      }

      const waBtn = document.getElementById('modal-whatsapp-link');
      if (waBtn) {
        waBtn.href = `https://wa.me/${data.whatsapp}?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20${encodeURIComponent(data.title)}`;
      }

      const callBtn = document.getElementById('modal-call-link');
      if (callBtn) {
        callBtn.href = `tel:${data.phone.replace(/[^0-9+]/g, '')}`;
        callBtn.textContent = `📞 ${data.phone}`;
      }

      modalDrawer.setAttribute('data-project', projectKey);
      modalDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
      if (!modalDrawer) return;
      modalDrawer.classList.remove('active');
      modalDrawer.removeAttribute('data-project');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-inspect]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-inspect');
        openProjectModal(key);
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeProjectModal);
    }
    if (modalDrawer) {
      modalDrawer.addEventListener('click', (e) => {
        if (e.target === modalDrawer) closeProjectModal();
      });
    }

    // 8. Lead Form Submissions
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const origText = btn ? btn.innerHTML : '';
        if (btn) {
          btn.innerHTML = '✓ Demande Enregistrée • Notre conseiller vous contacte';
          btn.style.background = '#C5A059';
          btn.style.color = '#0E100F';
          setTimeout(() => {
            btn.innerHTML = origText;
            btn.style.background = '';
            btn.style.color = '';
            form.reset();
          }, 4000);
        }
      });
    });

    // 9. Hero Video Autoplay Policy Failsafe
    const video = document.querySelector('.loam-hero-media video');
    if (video) {
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    }
  });
})();

