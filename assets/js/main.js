/* ============================================================
   MAIN.JS – Mauricio Valdez Portfolio
   ============================================================ */

/* ---------- Project Data ---------- */
const PROJECTS = [
  {
    id: 'uav-thesis',
    title: 'UAV Power Consumption Modeling',
    subtitle: 'M.Sc. Thesis — Brubotics, VUB · Brussels',
    category: 'Research',
    categoryColor: 'blue',
    tech: ['Python', 'ML', 'ROS', 'UAV Systems'],
    shortDesc: 'Real-world UAV flight experiments paired with ML models — regression and neural networks — for energy-aware path planning.',
    fullDesc: `<p>This M.Sc. thesis, conducted at the Brubotics robotics lab at Vrije Universiteit Brussel, investigates the power consumption behavior of multirotor UAVs under varied flight conditions and payload configurations.</p>
      <p>A systematic experimental campaign was designed and executed, collecting telemetry and power data across multiple flight profiles. The dataset was then used to train and compare regression models and neural network architectures capable of predicting energy consumption for arbitrary flight trajectories.</p>
      <p>The models directly support energy-aware path planning — enabling UAVs to select routes that minimize battery usage, extend mission range, and improve operational safety. A conference paper summarizing the methodology and results is currently in preparation.</p>`,
    tags: ['Energy Modeling', 'Neural Networks', 'Regression', 'Flight Experiments', 'Path Planning'],
    cardImage: 'assets/projects/UAV-2.jpg',
    gallery: [
      { src: 'assets/projects/UAV-2.jpg', alt: 'UAV flight experiment setup' },
      { src: 'assets/projects/UAV-3.jpg', alt: 'UAV power consumption data collection' },
    ],
    animatedGif: {
      src: 'assets/projects/UAV-1.gif',
      caption: 'UAV flight experiment — real-world data collection for power consumption modeling',
    },
    galleryCount: 0,
    videoUrl: null,
  },
  {
    id: 'soft-robotics-heater',
    title: 'Flexible Heater with Self-Sensing',
    subtitle: 'Soft Robotics — Brubotics / Prof. Vanderborght · VUB',
    category: 'Research',
    categoryColor: 'teal',
    tech: ['Soft Robotics', 'Embedded Sensing', 'C/C++', 'Fabrication'],
    shortDesc: 'Flexible heating element with integrated temperature and deformation sensing for soft robotic grippers and actuators.',
    fullDesc: `<p>Developed as part of the Soft Robotics group at Brubotics (under Prof. Bram Vanderborght), this project explores the design and fabrication of a compliant heating element that simultaneously acts as a sensor.</p>
      <p>The device integrates self-sensing capabilities — measuring both its own temperature and the deformation it undergoes — without requiring additional sensor elements. This dual functionality is particularly valuable for soft robotic applications where space and weight are constrained and intrinsic feedback is needed for safe human-robot interaction.</p>
      <p>The work involved materials selection, electrical characterization, and embedded firmware development for real-time data acquisition and control.</p>`,
    tags: ['Soft Actuation', 'Self-Sensing', 'Fabrication', 'Embedded Systems'],
    imgComment: 'Soft Robotics Heater',
    /* Real assets */
    cardImage: 'assets/projects/soft-robotics-heater-circuit.png',
    gallery: [
      { src: 'assets/projects/soft-robotics-heater-circuit.png', alt: 'Sensing circuit diagram — Arduino UNO + MCP9600 thermocouple + soft heater' },
      { src: 'assets/projects/soft-robotics-heater-rvst.jpg',    alt: 'Resistance vs Temperature — 4 repeated tests at 31V, 44V and 62V' },
      { src: 'assets/projects/soft-robotics-ForceREsponse.png', alt: 'Resistance response to applied force' },
      
    ],
    animatedGif: {
      src: 'assets/projects/soft-robotics-heater-demo.gif',
      caption: 'Live demo — flexible heater self-sensing in action',
    },
    galleryCount: 0,
    videoUrl: null,
  },
  {
    id: 'industrial-automation',
    title: 'Industrial Automation Systems',
    subtitle: 'Ideas Automation · Bolivia',
    category: 'Engineering',
    categoryColor: 'blue',
    tech: ['PLC/PAC', 'SCADA', 'Modbus', 'Profinet', 'Low-Voltage Panels'],
    shortDesc: 'Commissioned SCADA platforms, PAC/PLC controllers, low-voltage switchgear, and ATS for industrial plants and public infrastructure.',
    fullDesc: `<p>During more than a year as a Project Engineer at Ideas Automation, I led end-to-end delivery of industrial automation projects for clients in Bolivia's manufacturing, utilities, and public infrastructure sectors.</p>
      <p>Key deliverables included: design and commissioning of SCADA platforms (AVEVA), programming of PAC/PLC controllers (Siemens, Schneider) in Structured Text and Ladder, specification and installation of low-voltage panels, and deployment of Automatic Transfer Switch (ATS) systems to ensure continuous power supply for critical facilities.</p>
      <p>Projects spanned water treatment plants, commercial buildings, and industrial production lines, requiring close coordination with civil, electrical, and process engineering teams.</p>`,
    tags: ['AVEVA SCADA', 'Siemens', 'Schneider', 'Structured Text', 'ATS', 'Fieldbus'],
    imgComment: 'Industrial Automation',
    /* Real assets — ia-8 is the card hero (engineer at control panel) */
    cardImage: 'assets/projects/ia-8.jpg',
    gallery: [
      { src: 'assets/projects/ia-8.jpg',  alt: 'Engineer commissioning industrial control panel on-site' },
      { src: 'assets/projects/ia-9.jpg',  alt: 'Schneider M340 PLC rack with fieldbus wiring' },
      { src: 'assets/projects/ia-7.jpg',  alt: 'Low-voltage panel — wiring and breakers' },
      { src: 'assets/projects/ia-6.jpg',  alt: 'Control cabinet interior detail' },
      { src: 'assets/projects/ia-1.jpg',  alt: 'Industrial plant site — Bolivia' },
      { src: 'assets/projects/ia-2.jpg',  alt: 'Field installation work' },
      { src: 'assets/projects/ia-3.jpg',  alt: 'On-site commissioning' },
      { src: 'assets/projects/ia-4.jpg',  alt: 'Process plant — GoPro site documentation' },
      { src: 'assets/projects/ia-5.jpg',  alt: 'Industrial facility overview — GoPro' },
      { src: 'assets/projects/ia-10.jpg',  alt: 'La Purita PLC replacement ' },
    ],
    galleryCount: 0,
    videoUrl: null,
  },
  {
    id: 'rpa-workflows',
    title: 'RPA Digital Workflows',
    subtitle: 'Integraphics / Jysk Fynske Medier · Bolivia / Denmark',
    category: 'Software',
    categoryColor: 'teal',
    tech: ['Power Automate', 'RPA', 'SharePoint', 'REST APIs'],
    shortDesc: 'Microsoft Power Automate solutions that automated multi-department workflows for a major Danish media company, cutting manual processing time significantly.',
    fullDesc: `<p>Contracted through Integraphics to deliver Robotic Process Automation solutions for Jysk Fynske Medier, one of Denmark's largest regional media groups, this engagement required designing and deploying workflow automations across multiple business units.</p>
      <p>Using Microsoft Power Automate (cloud flows and desktop flows), I analyzed existing manual processes — from editorial approvals to finance reconciliations — and rebuilt them as automated, exception-handled pipelines integrated with SharePoint, Outlook, and internal REST APIs.</p>
      <p>The solutions delivered measurable reductions in manual processing time, improved data consistency, and freed staff to focus on higher-value tasks. The role was executed fully remotely, in close collaboration with Danish stakeholders.</p>`,
    tags: ['Power Automate', 'Cloud Flows', 'Desktop Flows', 'SharePoint', 'API Integration'],
    imgComment: 'RPA Workflows',
    galleryCount: 2,
    videoUrl: null,
  },
  {
    id: 'plc-training',
    title: 'PLC Industrial Automation Training',
    subtitle: 'Ideas Capacitación · Bolivia',
    category: 'Education',
    categoryColor: 'blue',
    tech: ['PLC', 'HMI', 'SCADA', 'Structured Text', 'Ladder Logic'],
    shortDesc: 'Designed and delivered hands-on PLC/HMI/SCADA workshops for 120+ engineers and technicians in Bolivia\'s manufacturing and energy sectors.',
    fullDesc: `<p>As a trainer at Ideas Capacitación, I developed the curriculum and delivered practical workshops on industrial automation for working engineers, technicians, and recent graduates across Bolivia.</p>
      <p>Course content covered PLC programming in Structured Text and Ladder Logic (Siemens S7, Schneider M340), HMI design and commissioning, SCADA architecture, and fieldbus communications (Modbus, Profinet). Training included both theoretical sessions and hands-on lab exercises using real industrial hardware.</p>
      <p>Over the course of the program, more than 120 students from the manufacturing, mining, oil & gas, and public utility sectors completed the training, with strong satisfaction ratings and documented post-training career advancement among participants.</p>`,
    tags: ['Curriculum Design', 'PLC Programming', 'HMI', 'SCADA', 'Industry Training'],
    imgComment: 'PLC Training',
    galleryCount: 2,
    videoUrl: null,
  },
  {
    id: 'casi-ingeniero',
    title: 'Casi Ingeniero – YouTube Channel',
    subtitle: 'Personal Project · Bolivia',
    category: 'Outreach',
    categoryColor: 'teal',
    tech: ['Video Production', 'Engineering Education', 'Content Creation'],
    shortDesc: 'Educational engineering YouTube channel serving Bolivia\'s engineering community with practical tutorials, career guidance, and technology breakdowns.',
    fullDesc: `<p><em>Casi Ingeniero</em> ("Almost an Engineer") is a YouTube channel I founded to make quality engineering education more accessible to Spanish-speaking students and professionals in Bolivia and across Latin America.</p>
      <p>Content ranges from practical tutorials on PLC programming and automation tools, to career advice for engineering students, to breakdowns of emerging technologies in robotics and embedded systems. The channel reflects my conviction that knowledge-sharing and community building are essential to advancing Bolivia's technical talent base.</p>
      <p>Visit the channel at <a href="https://youtube.com/channel/UCzw7nzqiQbc5VNh08WrIpDw" target="_blank" rel="noopener noreferrer" style="color:var(--accent-blue)">youtube.com/channel/UCzw7nzqiQbc5VNh08WrIpDw</a></p>`,
    tags: ['YouTube', 'Engineering Education', 'Spanish Content', 'Bolivia', 'Outreach'],
    cardImage: 'assets/projects/YT-1.jpg',
    gallery: [
      { src: 'assets/projects/YT-1.jpg', alt: 'Casi Ingeniero YouTube channel' },
      { src: 'assets/projects/YT-2.jpg', alt: 'Casi Ingeniero YouTube content' },
    ],
    galleryCount: 0,
    videoUrl: 'https://www.youtube.com/embed/_7ZWYkjeq-0?autoplay=1&mute=1&start=257',
  },
];

/* ============================================================
   HERO CANVAS — Animated grid + particle network
   ============================================================ */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles, animFrame;

  const config = {
    particleCount: 55,
    connectionDist: 140,
    particleColor: 'rgba(0,168,255,',
    lineColor:     'rgba(0,168,255,',
    gridColor:     'rgba(0,168,255,0.035)',
    gridSize:      60,
    speed: 0.3,
  };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    particles = Array.from({ length: config.particleCount }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
      r:  Math.random() * 1.5 + 0.5,
    }));
  }

  function drawGrid() {
    ctx.strokeStyle = config.gridColor;
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += config.gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += config.gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();

    // Update + draw particles
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = config.particleColor + '0.7)';
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < config.connectionDist) {
          const alpha = (1 - dist / config.connectionDist) * 0.35;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = config.lineColor + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animFrame = requestAnimationFrame(draw);
  }

  const ro = new ResizeObserver(() => { resize(); createParticles(); });
  ro.observe(canvas);
  resize();
  createParticles();
  draw();
}

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveLink();
  }, { passive: true });

  // Hamburger
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  let current = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.id;
    }
  });

  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

/* ============================================================
   SCROLL FADE-IN — Intersection Observer
   ============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ============================================================
   MODALS
   ============================================================ */
function buildModal(proj) {
  // Gallery — use real images if provided, otherwise fall back to placeholders
  // Gallery block — adapts columns to image count, wraps itself
  let galleryBlock = '';
  if (proj.gallery && proj.gallery.length > 0) {
    const cols = proj.gallery.length >= 6 ? 3 : 2;
    const items = proj.gallery.map(img => `
      <div style="border-radius:8px;overflow:hidden;background:#0d1117;aspect-ratio:4/3;">
        <img src="${img.src}" alt="${img.alt}"
          style="width:100%;height:100%;object-fit:cover;display:block;"
          loading="lazy" />
      </div>`).join('');
    galleryBlock = `<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:10px;margin-bottom:24px;">${items}</div>`;
  } else if (proj.galleryCount > 0) {
    const items = Array.from({ length: proj.galleryCount }, (_, i) => `
      <div class="img-placeholder" style="border-radius:8px">
        ${imageSVG()}
        <span style="color:var(--text-muted);font-size:0.68rem;font-family:var(--font-mono)"><!-- REPLACE: /assets/projects/${proj.id}-${i+1}.jpg --></span>
      </div>`).join('');
    galleryBlock = `<div class="modal-gallery">${items}</div>`;
  }

  // Animated GIF demo block
  const gifHTML = proj.animatedGif ? `
    <div style="margin-bottom:24px;">
      <div style="border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--border-glass);background:#000;text-align:center;">
        <img src="${proj.animatedGif.src}" alt="${proj.animatedGif.caption}"
          style="max-width:100%;height:auto;display:block;margin:0 auto;" loading="lazy" />
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);font-family:var(--font-mono);text-align:center;margin-top:8px;">${proj.animatedGif.caption}</p>
    </div>
  ` : '';

  // YouTube / iframe embed
  const videoHTML = proj.videoUrl ? `
    <div class="modal-video-wrap">
      <iframe src="${proj.videoUrl}" title="${proj.title} video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen loading="lazy"></iframe>
    </div>
  ` : '';

  const tagsHTML = proj.tags.map(t => `<span class="tag ${proj.categoryColor}">${t}</span>`).join('');

  return `
    <div class="modal-header">
      <button class="modal-close" aria-label="Close modal">✕</button>
      <div class="modal-tag">
        <span class="tag ${proj.categoryColor}">${proj.category}</span>
      </div>
      <h2 class="modal-title">${proj.title}</h2>
      <p class="modal-subtitle">${proj.subtitle}</p>
    </div>
    <div class="modal-body">
      ${galleryBlock}
      ${gifHTML}
      ${videoHTML}
      <div class="modal-description">${proj.fullDesc}</div>
      <div class="modal-tags">${tagsHTML}</div>
    </div>
  `;
}

function initModals() {
  const overlay = document.getElementById('modal-overlay');
  const modalBox = document.getElementById('modal-box');

  function openModal(projId) {
    const proj = PROJECTS.find(p => p.id === projId);
    if (!proj) return;
    modalBox.innerHTML = buildModal(proj);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Close button inside modal
    modalBox.querySelector('.modal-close').addEventListener('click', closeModal);
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Wire up all project cards
  document.querySelectorAll('[data-project]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.project));
  });
}

/* ============================================================
   PROJECT CARDS — Dynamic render
   ============================================================ */
function imageSVG(size = 40) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
  </svg>`;
}

function renderProjectCards() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((proj, i) => `
    <div class="glass-card project-card fade-in delay-${(i % 3) + 1}" data-project="${proj.id}" style="cursor:pointer" role="button" tabindex="0" aria-label="See details for ${proj.title}">
      <div class="project-card-image">
        ${proj.cardImage
          ? `<img src="${proj.cardImage}" alt="${proj.title}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />`
          : `<div class="img-placeholder">${imageSVG(36)}<!-- REPLACE: /assets/projects/${proj.id}.jpg --></div>`
        }
        <div class="project-card-overlay"></div>
        <div class="project-card-tag"><span class="tag ${proj.categoryColor}">${proj.category}</span></div>
      </div>
      <div class="project-card-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-subtitle">${proj.subtitle}</p>
        <p class="project-desc">${proj.shortDesc}</p>
        <div class="project-card-footer">
          <div class="project-tech-tags">
            ${proj.tech.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <button class="btn-see-details">
            Details
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Keyboard accessibility
  grid.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initNavbar();
  renderProjectCards();
  initModals();
  initScrollAnimations();
});
