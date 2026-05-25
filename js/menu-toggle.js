// Hamburger Menu Toggle
function toggleMenu() {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (nav) {
    nav.classList.toggle('active');
  }
  if (menuToggle) {
    menuToggle.classList.toggle('active');
  }
}

// Close menu when a link is clicked
function closeMenu() {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (nav) {
    nav.classList.remove('active');
  }
  if (menuToggle) {
    menuToggle.classList.remove('active');
  }
}

// Add click listeners to nav links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPage === '' && href === 'index.html') {
      link.classList.add('active');
    } else if (currentPage === href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (nav && nav.classList.contains('active')) {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    }
  });
});

// Existing mood food selector
function suggestFood() {
  const mood = document.getElementById('mood').value;
  const moodResult = document.getElementById('moodResult');

  if (!mood) {
    moodResult.textContent = '❌ Please select a mood first!';
    moodResult.style.color = 'red';
    return;
  }

  const suggestions = {
    happy: '🍕 Pizza or 🍰 Cakes - Celebrate your happiness!',
    tired: '☕ Coffee or 🧁 Cupcakes - Get energized!',
    hungry: '🍔 Burger or 🍟 Fries - Satisfy your hunger!',
    party: '🍪 Donuts or 🥤 Milkshakes - Party time!'
  };

  moodResult.textContent = suggestions[mood] || 'Try anything!';
  moodResult.style.color = '#FFD700';
}
