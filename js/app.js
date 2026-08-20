/**
 * Fundi Kipusa - Main Application JavaScript
 * Handles mobile navigation, theme switching, and form validation
 */

// ============================================
// Mobile Navigation
// ============================================

/**
 * Toggle mobile menu
 */
function initMobileNavigation() {
  const menu = document.querySelector('.menu');
  const openMenu = document.querySelector('.menu-btn');
  const closeMenu = document.querySelector('.close-btn');

  if (!menu || !openMenu || !closeMenu) return;

  // Open menu
  openMenu.addEventListener('click', () => {
    menu.classList.add('act');
    document.body.style.overflow = 'hidden';
  });

  // Close menu
  closeMenu.addEventListener('click', () => {
    menu.classList.remove('act');
    document.body.style.overflow = '';
  });

  // Close menu when clicking a link that actually navigates away.
  // The dropdown trigger (e.g. "Projects") only opens a submenu, so it
  // must not close the whole slide-out panel.
  const navLinks = menu.querySelectorAll('a[href]');
  navLinks.forEach(link => {
    if (link.matches('.dropdown > a.nav-link')) return;
    link.addEventListener('click', () => {
      if (menu.classList.contains('act')) {
        menu.classList.remove('act');
        document.body.style.overflow = '';
      }
    });
  });
}

/**
 * Initialize dropdown menus
 */
function initDropdowns() {
  const dropDown = document.querySelector('.dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  // The toggle trigger only (e.g. "Projects") - NOT the submenu links, which
  // must be free to navigate to their own pages.
  const trigger = dropDown ? dropDown.querySelector(':scope > a.nav-link') : null;

  if (!dropDown || !dropdownMenu || !trigger) return;

  trigger.setAttribute('aria-haspopup', 'true');
  trigger.setAttribute('aria-expanded', 'false');

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = dropdownMenu.classList.toggle('display');
    trigger.setAttribute('aria-expanded', String(isOpen));
  });

  // Submenu links navigate normally; just close the menu once one is used.
  dropdownMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      dropdownMenu.classList.remove('display');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropDown.contains(e.target)) {
      dropdownMenu.classList.remove('display');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
}

// ============================================
// Theme Switching
// ============================================

/**
 * Initialize theme from localStorage or system preference
 */
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', theme);
  updateToggleButton(theme);
  
  return theme;
}

/**
 * Update theme toggle button state
 */
function updateToggleButton(theme) {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.innerHTML = `<span aria-hidden="true">${theme === 'dark' ? '☀️' : '🌙'}</span>`;
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

/**
 * Toggle between dark and light themes
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleButton(next);
}

/**
 * Initialize theme toggle button
 */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    // Update button state on load
    const currentTheme = document.documentElement.getAttribute('data-theme');
    updateToggleButton(currentTheme || 'light');
  }
}

// ============================================
// Form Validation
// ============================================

/**
 * Validate email address
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (basic check for 10+ digits)
 */
function validatePhone(phone) {
  if (!phone) return true; // Phone is optional
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10;
}

/**
 * Show validation error for a field
 */
function showFieldError(input, message) {
  input.classList.add('error');
  let errorMsg = input.nextElementSibling;
  while (errorMsg && !errorMsg.classList.contains('error-message')) {
    errorMsg = errorMsg.nextElementSibling;
  }
  if (errorMsg && errorMsg.classList.contains('error-message')) {
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
  }
}

/**
 * Hide validation error for a field
 */
function hideFieldError(input) {
  input.classList.remove('error');
  let errorMsg = input.nextElementSibling;
  while (errorMsg && !errorMsg.classList.contains('error-message')) {
    errorMsg = errorMsg.nextElementSibling;
  }
  if (errorMsg && errorMsg.classList.contains('error-message')) {
    errorMsg.style.display = 'none';
  }
}

/**
 * Validate a form before submission
 */
function validateForm(form) {
  const inputs = form.querySelectorAll('[required], input[type="email"], input[type="tel"]');
  let isValid = true;
  let firstInvalid = null;

  inputs.forEach(input => {
    const value = input.value?.trim();
    
    // Check required fields
    if (input.required && !value) {
      showFieldError(input, 'This field is required');
      isValid = false;
      if (!firstInvalid) firstInvalid = input;
      return;
    }

    // Validate email
    if (input.type === 'email' && value && !validateEmail(value)) {
      showFieldError(input, 'Please enter a valid email address');
      isValid = false;
      if (!firstInvalid) firstInvalid = input;
      return;
    }

    // Validate phone (if present)
    if (input.type === 'tel' && value && !validatePhone(value)) {
      showFieldError(input, 'Please enter a valid phone number');
      isValid = false;
      if (!firstInvalid) firstInvalid = input;
      return;
    }

    // Field is valid
    hideFieldError(input);
  });

  // Focus on first invalid field
  if (firstInvalid) {
    firstInvalid.focus();
    if (firstInvalid.scrollIntoView) {
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return isValid;
}

/**
 * Get (or lazily create) the success/error status containers for a form
 */
function getFormStatusElements(form) {
  let successEl = form.querySelector('.form-success');
  let errorEl = form.querySelector('.form-error');

  if (!successEl) {
    successEl = document.createElement('div');
    successEl.className = 'form-success';
    successEl.setAttribute('role', 'status');
    successEl.setAttribute('aria-live', 'polite');
    form.insertBefore(successEl, form.firstChild);
  }
  if (!errorEl) {
    errorEl = document.createElement('div');
    errorEl.className = 'form-error';
    errorEl.setAttribute('role', 'alert');
    form.insertBefore(errorEl, form.firstChild);
  }

  return { successEl, errorEl };
}

/**
 * Toggle a form's loading state and its submit button label
 */
function setFormLoadingState(form, submitBtn, isLoading) {
  form.classList.toggle('form-loading', isLoading);
  if (!submitBtn) return;

  if (isLoading) {
    submitBtn.dataset.submitting = 'true';
    submitBtn.dataset.originalLabel = submitBtn.value || submitBtn.textContent;
    const loadingLabel = 'Sending...';
    if (submitBtn.tagName === 'INPUT') {
      submitBtn.value = loadingLabel;
    } else {
      submitBtn.textContent = loadingLabel;
    }
    submitBtn.disabled = true;
  } else {
    submitBtn.dataset.submitting = 'false';
    submitBtn.disabled = false;
    const originalLabel = submitBtn.dataset.originalLabel;
    if (originalLabel) {
      if (submitBtn.tagName === 'INPUT') {
        submitBtn.value = originalLabel;
      } else {
        submitBtn.textContent = originalLabel;
      }
    }
  }
}

/**
 * Initialize form validation and submission (AJAX where possible, so the
 * page never has to reload and the visitor sees a real success/failure state)
 */
function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    const { successEl, errorEl } = getFormStatusElements(form);
    const isAjaxCapable = /formsubmit\.co/.test(form.getAttribute('action') || '') && typeof fetch === 'function';

    form.addEventListener('submit', (e) => {
      successEl.classList.remove('show');
      errorEl.classList.remove('show');

      // Validate form
      if (!validateForm(form)) {
        e.preventDefault();
        errorEl.textContent = 'Please fix the highlighted fields and try again.';
        errorEl.classList.add('show');
        return;
      }

      // Honeypot: silently drop obvious bot submissions
      const honeypot = form.querySelector('input[name="_honey"]');
      if (honeypot && honeypot.value) {
        e.preventDefault();
        return;
      }

      const submitBtn = form.querySelector('[type="submit"], button[type="submit"]');

      // Prevent duplicate submissions
      if (submitBtn && submitBtn.dataset.submitting === 'true') {
        e.preventDefault();
        return;
      }

      // Forms that don't post to FormSubmit (e.g. PayPal donation forms)
      // must navigate normally - we only validate them, never intercept.
      if (!isAjaxCapable) {
        setFormLoadingState(form, submitBtn, true);
        return;
      }

      e.preventDefault();
      setFormLoadingState(form, submitBtn, true);

      const ajaxAction = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
      const formData = new FormData(form);

      fetch(ajaxAction, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      })
        .then(response => {
          if (!response.ok) throw new Error('Submission failed');
          return response.json();
        })
        .then(() => {
          form.reset();
          successEl.textContent = 'Thank you! Your message has been sent successfully.';
          successEl.classList.add('show');
          successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .catch(() => {
          errorEl.textContent = 'Sorry, something went wrong sending your message. Please try again or email us directly at contact@fundikipusa.co.ke.';
          errorEl.classList.add('show');
        })
        .finally(() => {
          setFormLoadingState(form, submitBtn, false);
        });
    });

    // Add real-time validation for better UX
    const requiredInputs = form.querySelectorAll('[required]');
    requiredInputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.value?.trim()) {
          hideFieldError(input);
        }
      });
    });

    // Email validation on blur
    const emailInputs = form.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.value && !validateEmail(input.value)) {
          showFieldError(input, 'Please enter a valid email address');
        } else if (input.value) {
          hideFieldError(input);
        }
      });
    });
  });
}

// ============================================
// Scroll Effects
// ============================================

/**
 * Initialize scroll effects (sticky header)
 */
function initScrollEffects() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
  }, { passive: true });
}

// ============================================
// Keyboard Navigation
// ============================================

/**
 * Initialize keyboard navigation for accessibility
 */
function initKeyboardNavigation() {
  // Add visible focus styles for keyboard users
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });

  // Ensure all interactive elements are keyboard accessible
  const interactiveElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  interactiveElements.forEach(el => {
    if (!el.hasAttribute('tabindex') || el.tabIndex === -1) {
      el.setAttribute('tabindex', '0');
    }
  });
}

// ============================================
// Initialize Everything
// ============================================

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initDropdowns();
  initThemeToggle();
  initFormValidation();
  initScrollEffects();
  initKeyboardNavigation();
});

// Initialize theme immediately to prevent FOUC
(function() {
  initTheme();
})();
