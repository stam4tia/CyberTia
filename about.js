let mybutton = document.getElementById("myBtn");

// when the user scrolls down 20px from the top of the document, show the "Go Back Up" button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// when the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.addEventListener('DOMContentLoaded', (event) => {
  const body = document.body;
  const toggleIcon = document.getElementById('toggle-icon');

  // set default mode to dark-mode if no mode is saved in localStorage
  const savedMode = localStorage.getItem('mode');
  const currentMode = savedMode || 'dark-mode';
  
  // apply the current mode to the body
  body.classList.add(currentMode);
  toggleIcon.src = currentMode === 'light-mode' ? 'light-icon.png' : 'dark-icon.png';
  
  toggleIcon.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.replace('dark-mode', 'light-mode');
      toggleIcon.src = 'light-icon.png';
      localStorage.setItem('mode', 'light-mode'); // update localStorage to light-mode
    } else {
      body.classList.replace('light-mode', 'dark-mode');
      toggleIcon.src = 'dark-icon.png';
      localStorage.setItem('mode', 'dark-mode'); // update localStorage to dark-mode
    }
  });
});

const contents = document.querySelectorAll('.content');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // stop observing once the element is visible
    }
  });
}, { threshold: 0.1 });

contents.forEach(content => {
  observer.observe(content);
});
