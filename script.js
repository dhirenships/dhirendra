// Theme toggle
var themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function() {
  var html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Mobile menu
var hamburger = document.getElementById('hamburger');
var sidebar = document.getElementById('sidebar');
var overlay = document.getElementById('mobileOverlay');

function toggleMenu() {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close mobile menu on nav click
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    }
  });
});

// Active nav highlight on scroll
var sections = document.querySelectorAll('.section');
var navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  var scrollPos = window.scrollY + 120;
  sections.forEach(function(section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// Fade-in on scroll
var fadeEls = document.querySelectorAll('.fade-in');
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(function(el) { observer.observe(el); });
