// ====== UTILITY FUNCTIONS ======

function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', { 
    style: 'currency', 
    currency: 'IDR' 
  }).format(value);
}

function alert_success(msg) {
  console.log('✓ ' + msg);
  alert(msg);
}

// ====== SCROLL REVEAL ANIMATIONS ======

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  
  const revealTriggers = document.querySelectorAll('.reveal-trigger');
  revealTriggers.forEach(trigger => observer.observe(trigger));
}
