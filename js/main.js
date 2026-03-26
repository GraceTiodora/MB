// ====== MAIN APPLICATION INITIALIZATION ======

// ====== MAIN APPLICATION INITIALIZATION ======

document.addEventListener('DOMContentLoaded', async function() {
  console.log('🚀 MBGTrack Application Initializing...');
  
  try {
    // Build navbar based on current role/auth status
    buildNavbar();
    
    // Load landing page
    await showPage('landing');
    console.log('✓ Landing page loaded');
  } catch (error) {
    console.error('Error loading landing page:', error);
  }
  
  // Initialize modules
  initPageNavigation();
  initFormHandlers();
  initScrollReveal();
  
  // Initialize feature-specific listeners
  initFeatureListeners();
  
  console.log('✓ Application Ready');
});

// ====== FEATURE-SPECIFIC INITIALIZATION ======

function initPageNavigation() {
  console.log('Initializing page navigation...');
  
  // Navbar click handlers
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      showPage(pageId);
      
      // Close mobile menu if open
      const navMobile = document.querySelector('.nav-mobile');
      if (navMobile) navMobile.classList.remove('active');
    });
  });
  
  // Role switcher
  document.querySelectorAll('[data-role]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const role = btn.getAttribute('data-role');
      switchRole(role);
    });
  });
  
  // Dashboard page initialization
  const dashboardLink = document.querySelector('[data-page="dashboard"]');
  if (dashboardLink) {
    dashboardLink.addEventListener('click', () => {
      setTimeout(() => {
        if (window.dashChart) window.dashChart.chart.resize();
        if (window.nutriChart) window.nutriChart.chart.resize();
      }, 300);
    });
  }
}

function initFormHandlers() {
  console.log('Initializing form handlers...');
  
  // Form elements
  const feedbackForm = document.querySelector('#feedbackForm');
  const trackingForm = document.querySelector('#trackingForm');
  const searchForm = document.querySelector('#searchForm');
  
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      submitFeedback(this);
    });
  }
  
  if (trackingForm) {
    trackingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      trackReport(this);
    });
  }
  
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      searchRegion(this);
      loadRegionDetail();
    });
  }
}

function initFeatureListeners() {
  console.log('Initializing feature listeners...');
  
  // Region card click handlers
  const regionCards = document.querySelectorAll('.region-card');
  regionCards.forEach(card => {
    card.addEventListener('click', function() {
      const regionName = this.getAttribute('data-region');
      if (regionName) {
        console.log('Selected region:', regionName);
        current_selected_region = regionName;
        showPage('region');
        loadRegionDetail();
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMobile = document.querySelector('.nav-mobile');
  if (mobileMenuBtn && navMobile) {
    mobileMenuBtn.addEventListener('click', () => {
      navMobile.classList.toggle('active');
    });
  }
  
  // Initialize maps on region page
  const regionPage = document.getElementById('page-region');
  if (regionPage) {
    regionPage.addEventListener('click', () => {
      setTimeout(initIndonesiaMap, 300);
    }, { once: false });
  }
}

// ====== GLOBAL STATE ======

let current_selected_region = '';
let current_role = 'public';
