// Modern Elegant CTFd Theme - Interactive JavaScript

class ModernTheme {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupAnimations();
    this.setupInteractions();
    this.setupScrollEffects();
  }

  setupNavigation() {
    const navToggle = document.querySelector('.navbar-toggler');
    const navCollapse = document.querySelector('.navbar-collapse');

    if (navToggle && navCollapse) {
      navToggle.addEventListener('click', () => {
        navCollapse.classList.toggle('show');
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navCollapse.contains(e.target)) {
          navCollapse.classList.remove('show');
        }
      });
    }
  }

  setupAnimations() {
    // Minimal animations - only smooth transitions
    // No blinking, pulsing, or complex animations
  }

  setupInteractions() {
    // Enhanced button interactions
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
      });
    });

    // Challenge card interactions
    document.querySelectorAll('.challenge-button').forEach(card => {
      card.addEventListener('click', () => {
        // Simple click feedback without animation
        card.style.opacity = '0.8';
        setTimeout(() => {
          card.style.opacity = '';
        }, 100);
      });
    });

    // Form focus enhancements
    document.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('focus', () => {
        // Simple focus without scaling
      });

      input.addEventListener('blur', () => {
        // Simple blur without scaling
      });
    });
  }

  setupScrollEffects() {
    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const opacity = Math.min(scrolled / 100, 0.95);
        navbar.style.background = `rgba(26, 31, 46, ${opacity})`;
      });
    }

    // Smooth scrolling for anchor links
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
  }

  // Utility methods
  static addHoverEffect(element) {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translateY(-2px)';
      element.style.boxShadow = 'var(--shadow-lg)';
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translateY(0)';
      element.style.boxShadow = 'var(--shadow-md)';
    });
  }

  static typeWriter(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;
    
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };
    
    type();
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ModernTheme();
  
  // Add loading complete class
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});

// Enhanced table row interactions
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.background = 'rgba(79, 209, 199, 0.05)';
      row.style.transform = 'translateX(4px)';
    });

    row.addEventListener('mouseleave', () => {
      row.style.background = '';
      row.style.transform = 'translateX(0)';
    });
  });
});

// Smooth form validation feedback
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
      if (submitBtn) {
        submitBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
          submitBtn.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });
});

// Enhanced modal interactions
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('show.bs.modal', () => {
      modal.style.animation = 'fadeInUp 0.3s ease-out';
    });
  });
});