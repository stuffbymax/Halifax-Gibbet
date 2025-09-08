// setting up variables for theme toggle
const toggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Apply saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.textContent = '☀'; 
} else {
  document.body.classList.remove('dark-mode');
  themeIcon.textContent = '🌑';
}

// Toggle theme on click
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeIcon.textContent = '☀';
  } else {
    localStorage.setItem('theme', 'light');
    themeIcon.textContent = '🌑';
  }
});


// Get the button
let mybutton = document.getElementById("myBtn");

// scrolls down from 20 px the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}

// clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Timeline click behavior for testing
document.querySelectorAll('.timeline-content').forEach(item => {
  item.addEventListener('click', () => {
    alert('You clicked on: ' + item.querySelector('h3').textContent);
  });
});