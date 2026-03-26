// ============================================================
// AUTHENTICATION SYSTEM
// ============================================================

// Demo users database
const DEMO_USERS = {
  'admin': { password: 'admin123', role: 'admin' },
  'sekolah': { password: 'sekolah123', role: 'sekolah' }
};

// Get current session
function getCurrentUser() {
  const user = sessionStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

// Get current role
function getCurrentRole() {
  const user = getCurrentUser();
  return user ? user.role : 'publik';
}

// Login handler
function loginHandler() {
  const username = document.getElementById('login-username')?.value || '';
  const password = document.getElementById('login-password')?.value || '';
  const selectedRole = document.querySelector('.role-btn.active')?.getAttribute('data-role') || 'admin';

  const errorEl = document.getElementById('login-error');

  // Validation
  if (!username || !password) {
    showError('Username dan password harus diisi', errorEl);
    return;
  }

  // Check credentials
  const user = DEMO_USERS[username];
  if (!user || user.password !== password || user.role !== selectedRole) {
    showError('Username, password, atau role tidak sesuai', errorEl);
    return;
  }

  // Success login
  const userData = {
    username: username,
    role: selectedRole,
    loginTime: new Date().toLocaleString('id-ID')
  };

  sessionStorage.setItem('currentUser', JSON.stringify(userData));
  
  console.log(`✓ Logged in as ${selectedRole}: ${username}`);
  
  // Redirect based on role
  if (selectedRole === 'admin') {
    showPage('admin');
  } else if (selectedRole === 'sekolah') {
    showPage('feedback');
  }
}

// Login as Publik (no registration needed)
function loginAsPublic() {
  sessionStorage.removeItem('currentUser');
  console.log('✓ Accessing as Publik');
  showPage('landing');
}

// Logout
function logout() {
  sessionStorage.removeItem('currentUser');
  console.log('✓ Logged out');
  
  // Redirect to login
  showPage('login');
}

// Show error message
function showError(message, errorEl) {
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
    setTimeout(() => {
      errorEl.style.display = 'none';
    }, 4000);
  }
}

// Check if user is authenticated for a page
function requireAuth(requiredRole) {
  const user = getCurrentUser();
  
  if (!user && requiredRole !== 'publik') {
    console.warn(`⚠ Access denied: ${requiredRole} role required`);
    showPage('login');
    return false;
  }

  if (user && requiredRole && user.role !== requiredRole) {
    console.warn(`⚠ Access denied: Expected ${requiredRole}, got ${user.role}`);
    showPage('login');
    return false;
  }

  return true;
}

// Check if user has certain role
function hasRole(role) {
  return getCurrentRole() === role;
}

// Check if user is NOT publik
function isLoggedIn() {
  return getCurrentUser() !== null;
}

// Select role in login form
function selectRole(btn) {
  document.querySelectorAll('.role-btn').forEach(b => {
    b.classList.remove('active');
    b.style.background = 'var(--white)';
    b.style.borderColor = 'var(--gray-300)';
    b.style.color = 'var(--gray-600)';
  });
  
  btn.classList.add('active');
  btn.style.background = 'rgba(15, 126, 59, 0.1)';
  btn.style.borderColor = 'var(--red-primary)';
  btn.style.color = 'var(--red-primary)';
}
