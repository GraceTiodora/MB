// ====== NAVIGATION SYSTEM ======

// Build navbar based on current role
function buildNavbar() {
  const role = getCurrentRole();
  const navbar = document.querySelector('.nav-links');
  const navRight = document.querySelector('.nav-right');
  
  if (!navbar) return;

  let html = '';
  let authHtml = '';

  // Publik Role - Limited menu
  if (role === 'publik') {
    html = `
      <button class="nav-link" onclick="showPage('landing')" id="nav-landing">Beranda</button>
      <button class="nav-link" onclick="showPage('dashboard')" id="nav-dashboard">Dashboard</button>
      <button class="nav-link" onclick="showPage('region')" id="nav-region">Wilayah</button>
      <button class="nav-link" onclick="showPage('tracker')" id="nav-tracker">Distribusi</button>
      <button class="nav-link" onclick="showPage('feed')" id="nav-feed">Laporan Publik</button>
      <button class="nav-link" onclick="showPage('nutrition')" id="nav-nutrition">Nutrisi</button>
    `;
    authHtml = `<button class="btn-role" onclick="showPage('login')" id="btn-login">🔐 Login</button>`;
  }
  
  // Admin Role - Admin-specific menu
  else if (role === 'admin') {
    const user = getCurrentUser();
    html = `
      <button class="nav-link" onclick="showPage('admin')" id="nav-admin">Admin Dashboard</button>
      <button class="nav-link" onclick="showPage('dashboard')" id="nav-dashboard">Laporan</button>
    `;
    authHtml = `
      <span style="color: var(--gray-600); font-size: 12px; font-weight: 600;">👤 ${user?.username || 'Admin'}</span>
      <button class="btn-role" onclick="logout()" style="background: #FEE2E2; color: #B91C1C; border: none;">Logout</button>
    `;
  }
  
  // Sekolah Role - School-specific menu
  else if (role === 'sekolah') {
    const user = getCurrentUser();
    html = `
      <button class="nav-link" onclick="showPage('feedback')" id="nav-feedback">Kirim Laporan</button>
      <button class="nav-link" onclick="showPage('tracking')" id="nav-tracking">Status Laporan</button>
    `;
    authHtml = `
      <span style="color: var(--gray-600); font-size: 12px; font-weight: 600;">🏫 ${user?.username || 'Sekolah'}</span>
      <button class="btn-role" onclick="logout()" style="background: #FEE2E2; color: #B91C1C; border: none;">Logout</button>
    `;
  }

  navbar.innerHTML = html;
  if (navRight) navRight.innerHTML = authHtml;
}

// Switch role (for role-switch buttons)
function switchRole(newRole) {
  if (newRole === 'publik') {
    loginAsPublic();
  } else {
    showPage('login');
  }
}

// Load page from /pages/ folder
async function showPage(id) {
  try {
    const role = getCurrentRole();
    const user = getCurrentUser();
    
    // Pages that require authentication
    const protectedPages = {
      'admin': 'admin',      // Only admin
      'feedback': 'sekolah',  // Only sekolah (for sending reports)
      'tracking': 'sekolah'   // Only sekolah (for tracking reports)
    };
    
    // Check if page requires specific role
    if (protectedPages[id]) {
      const requiredRole = protectedPages[id];
      if (role !== requiredRole) {
        console.warn(`⚠ Access denied: ${requiredRole} role required, you are ${role}`);
        showPage('login');
        return;
      }
    }

    console.log(`Loading page: ${id} (role: ${role})`);
    
    // Fetch page from /pages/ folder
    const response = await fetch(`pages/${id}.html`);
    if (!response.ok) {
      console.error(`Failed to load page ${id}`);
      return;
    }
    
    // Get HTML content
    const html = await response.text();
    
    // Inject into pages-container
    const container = document.getElementById('pages-container');
    container.innerHTML = html;
    
    // Refresh navbar for dynamic nav
    buildNavbar();

<<<<<<< Updated upstream
    const navbarEl = document.querySelector('.navbar');
    if (id === 'landing') {
      document.body.classList.add('landing-active');
      if (navbarEl) {
        navbarEl.classList.add('navbar-hero');
        navbarEl.classList.remove('navbar-fixed');
      }
      initHeroNavbarObserver();
    } else {
      document.body.classList.remove('landing-active');
      if (navbarEl) {
        navbarEl.classList.remove('navbar-hero');
        navbarEl.classList.remove('navbar-fixed');
      }
      destroyHeroNavbarObserver();
=======
    if (id === 'landing') {
      document.body.classList.add('landing-active');
    } else {
      document.body.classList.remove('landing-active');
    }

    const navbarEl = document.querySelector('.navbar');
    if (id === 'landing') {
      if (navbarEl) {
        navbarEl.classList.add('navbar-hero');
        navbarEl.classList.remove('navbar-solid');
      }
      initHeroNavbarObserver();
    } else {
      destroyHeroNavbarObserver();
      if (navbarEl) {
        navbarEl.classList.remove('navbar-hero');
        navbarEl.classList.add('navbar-solid');
      }
>>>>>>> Stashed changes
    }
    
    // Update navbar active state
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const navEl = document.getElementById('nav-' + id);
    if (navEl) navEl.classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);

    // Initialize feature-specific elements
    if (id === 'dashboard') {
      setTimeout(() => initDashChart(), 100);
    }
    if (id === 'nutrition') {
      setTimeout(() => initNutriChart(), 100);
    }
    if (id === 'region') {
      setTimeout(() => {
        const mapContainer = document.getElementById('indonesiaMapContainer');
        if (mapContainer) {
          initIndonesiaMap();
        }
      }, 100);
    }
    if (id === 'landing') {
      initHeroRotator();
    } else if (heroRotateTimer) {
      clearInterval(heroRotateTimer);
      heroRotateTimer = null;
    }
    
    console.log(`✓ Page ${id} loaded successfully`);
  } catch (error) {
    console.error(`Error loading page ${id}:`, error);
  }
}

<<<<<<< Updated upstream
=======
// Clear page state before loading new page
function clearPageState() {
  // Stop hero carousel
  stopHeroCarousel();
  
  // Clear scroll reveal observer
  if (window.scrollRevealObserver) {
    window.scrollRevealObserver.disconnect();
    window.scrollRevealObserver = null;
  }
  
  // Clear map instance
  if (window.indonesiaMap) {
    window.indonesiaMap.remove();
    window.indonesiaMap = null;
  }
  
  // Clear chart instances
  if (window.ApexCharts) {
    // Check and destroy all ApexCharts instances
    const charts = document.querySelectorAll('[data-apexcharts]');
    charts.forEach(chart => {
      if (chart.__apexcharts__) {
        chart.__apexcharts__.destroy();
      }
    });
  }
  
  // Clear all _chartInitialized flags
  document.querySelectorAll('[id*="Chart"]').forEach(el => {
    delete el._chartInitialized;
  });
  
  console.log('Page state cleared');
}

// ====== HERO NAVBAR OBSERVER ======

let heroNavbarObserver = null;

function initHeroNavbarObserver() {
  const navbarEl = document.querySelector('.navbar');
  const heroEl = document.querySelector('.hero');
  if (!navbarEl || !heroEl) return;

  if (heroNavbarObserver) {
    heroNavbarObserver.disconnect();
    heroNavbarObserver = null;
  }

  heroNavbarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbarEl.classList.add('navbar-hero');
        navbarEl.classList.remove('navbar-solid');
      } else {
        navbarEl.classList.remove('navbar-hero');
        navbarEl.classList.add('navbar-solid');
      }
    });
  }, { rootMargin: '-72px 0px 0px 0px', threshold: 0 });

  heroNavbarObserver.observe(heroEl);
}

function destroyHeroNavbarObserver() {
  if (heroNavbarObserver) {
    heroNavbarObserver.disconnect();
    heroNavbarObserver = null;
  }
}

>>>>>>> Stashed changes
function switchRole(role) {
  currentRole = role;

  document.querySelectorAll('.btn-role').forEach(btn => {
    btn.classList.remove('active');
  });
  
  document.getElementById('role-' + role).classList.add('active');
  updatePageVisibility(role);
}

function updatePageVisibility(role) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.style.display = 'block';
  });

  if (role === 'publik') {
    document.getElementById('nav-admin').style.display = 'none';
  } else if (role === 'admin') {
    document.getElementById('nav-admin').style.display = 'block';
  } else if (role === 'sekolah') {
    document.getElementById('nav-admin').style.display = 'none';
  }
}

// ====== HERO IMAGE ROTATOR ======

const heroImageList = (typeof heroImages !== 'undefined' && Array.isArray(heroImages))
  ? heroImages
  : [];

let heroImageIndex = 0;
let heroRotateTimer = null;

function initHeroRotator() {
  if (!heroImageList.length) return;

  heroImageIndex = 0;
  setHeroBackground(heroImageIndex, true);

  if (heroRotateTimer) {
    clearInterval(heroRotateTimer);
    heroRotateTimer = null;
  }

  if (heroImageList.length > 1) {
    heroRotateTimer = setInterval(rotateHeroBackground, 6000);
  }
}

let heroNavbarObserver = null;

function initHeroNavbarObserver() {
  const navbarEl = document.querySelector('.navbar');
  const heroEl = document.querySelector('.hero');
  if (!navbarEl || !heroEl) return;

  if (heroNavbarObserver) {
    heroNavbarObserver.disconnect();
    heroNavbarObserver = null;
  }

  heroNavbarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbarEl.classList.remove('navbar-fixed');
      } else {
        navbarEl.classList.add('navbar-fixed');
      }
    });
  }, { rootMargin: '-72px 0px 0px 0px', threshold: 0 });

  heroNavbarObserver.observe(heroEl);
}

function destroyHeroNavbarObserver() {
  if (heroNavbarObserver) {
    heroNavbarObserver.disconnect();
    heroNavbarObserver = null;
  }
}

function setHeroBackground(index, immediate) {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const bg = hero.querySelector('.hero-bg');
  if (!bg) return;
  
  const imageUrl = encodeURI(heroImageList[index]);

  if (immediate) {
    bg.style.backgroundImage = `url('${imageUrl}')`;
    bg.style.opacity = '1';
    return;
  }
  
  bg.style.opacity = '0';
  setTimeout(() => {
    bg.style.backgroundImage = `url('${imageUrl}')`;
    bg.style.opacity = '1';
  }, 300);
}

function rotateHeroBackground() {
  if (!heroImageList.length) return;
  heroImageIndex = (heroImageIndex + 1) % heroImageList.length;
  setHeroBackground(heroImageIndex, false);
}
