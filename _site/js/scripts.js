
var isMobile = false;
var mobileMenuVisible = false;
var theme = 'light';
var ref = {};

function updateTheme(newTheme) {
  theme = newTheme;

  if(newTheme == 'light') {
    document.body.classList.remove('-theme-dark');
  } else {
    document.body.classList.add('-theme-dark');
  }
}

function onThemeChange(event) {
  this.updateTheme(event.matches ? 'dark' : 'light');
}

function updateThemeToggle(container) {
  var buttons = container.getElementsByTagName("button"), button;
  for(var i=0; i<buttons.length; i++) {
    button = buttons[i];
    if(button.getAttribute('data-theme') == theme) {
      button.classList.add('-active');
      button.setAttribute('aria-pressed', 'true');
    } else {
      button.classList.remove('-active');
      button.setAttribute('aria-pressed', 'false');
    }
  }
}

function toggleMenu() {
  if(mobileMenuVisible) {
    hideMenu();
  } else {
    showMenu();
  }
};

function updateNavAccessibility() {
  if(isMobile) {
    ref.siteNavToggle.removeAttribute("hidden");

    if(mobileMenuVisible) {
      ref.siteNavNav.removeAttribute("hidden");
    } else {
      ref.siteNavNav.setAttribute("hidden", "hidden");
    }
  } else {
    ref.siteNavToggle.setAttribute("hidden", "hidden");
    ref.siteNavNav.removeAttribute("hidden");
  }
}

function showMenu() {
  mobileMenuVisible = true;

  // Update nav trigger accessibility properties
  ref.siteNavToggle.setAttribute("aria-expanded", true);
  ref.siteNavToggle.setAttribute("aria-label", 'Hide site navigation');

  // Update nav menu accessibility properties
  ref.siteNavNav.removeAttribute("hidden");

  setTimeout(function() {
    ref.siteNav.classList.add('-expanded');
    document.body.classList.add('-menu-visible');
  }, 5);
};

function hideMenu() {
  mobileMenuVisible = false;
  ref.siteNav.classList.remove('-expanded');

  // Update nav trigger accessibility properties
  ref.siteNavToggle.setAttribute("aria-expanded", false);
  ref.siteNavToggle.setAttribute("aria-label", 'Show site navigation');

  setTimeout(function() {
    ref.siteNavNav.setAttribute("hidden", "hidden");
    document.body.classList.remove('-menu-visible');
  }, 400);
};

function preventScroll(e){
  e.preventDefault();
  e.stopPropagation();
  return false;
};

function setupThemeToggle() {
  var themeToggle = document.getElementsByClassName("theme-toggle");
  var i, k, buttons;
  for(k=0; k<themeToggle.length; k++) {
    buttons = themeToggle[k].getElementsByTagName("button");
    for(i=0; i<buttons.length; i++) {
      buttons[i].addEventListener('click', function(event) {
        updateTheme(event.target.getAttribute('data-theme'));
        updateThemeToggle(event.target.parentElement);
      });
    }
  }
}

function resize() {
  var newValue = window.innerWidth < 640;

  if(newValue != isMobile) {
    isMobile = newValue;
    updateNavAccessibility();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    updateTheme('dark');
  }

  window.addEventListener('resize', resize)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onThemeChange);

  ref.header =  document.getElementById("site-header");
  ref.siteNav =  document.getElementById('site-nav');
  ref.siteNavNav =  ref.siteNav.getElementsByTagName('nav')[0];
  ref.siteNavToggle = document.getElementById("site-nav-toggle");

  setupThemeToggle();
  resize();

  ref.siteNavToggle.addEventListener('click', toggleMenu);
});
