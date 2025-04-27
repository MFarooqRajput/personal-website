/* ==========================================================================
   DOM Elements
   ========================================================================== */

// Navigation elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

/* ==========================================================================
   Mobile Menu Functions
   ========================================================================== */

/**
 * Toggles the mobile menu visibility
 */
function toggleMobileMenu() {
  navMenu.classList.toggle('show');
}

/**
 * Closes the mobile menu
 */
function closeMobileMenu() {
  navMenu.classList.remove('show');
}

/* ==========================================================================
   Event Listeners
   ========================================================================== */

// Only add event listeners if navigation elements exist
if (navToggle && navMenu) {
  // Toggle menu on hamburger click
  navToggle.addEventListener('click', toggleMobileMenu);

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

/* ==========================================================================
   Navigation Functions
   ========================================================================== */

/**
 * Sets the active state for the current page's navigation link
 */
function setActiveLink() {
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ==========================================================================
   Smooth Scrolling
   ========================================================================== */

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* ==========================================================================
   Navbar Background on Scroll
   ========================================================================== */

/**
 * Toggles navbar background based on scroll position
 */
function toggleNavbarBg() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
  }
}

// Add scroll event listener for navbar background
window.addEventListener('scroll', toggleNavbarBg);

/* ==========================================================================
   Initialization
   ========================================================================== */

// Initialize active link state when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setActiveLink();
  
  // Add scroll class to navbar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
