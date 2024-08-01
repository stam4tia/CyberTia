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


//<--- old tab event listeners --->

// function showTab(tabId, event = null) {
//   const contents = document.querySelectorAll('.tab-content');
//   const buttons = document.querySelectorAll('.tab-button');

//   // hide all tab contents
//   contents.forEach(content => content.style.display = 'none');

//   // remove the active class from all buttons
//   buttons.forEach(button => button.classList.remove('active'));

//   // show the selected tab content
//   document.getElementById(tabId).style.display = 'block';

//   // add the active class to the clicked button
//   if (event) {
//     event.target.classList.add('active');
//   } else {
//     document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add('active');
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  const defaultMessage = document.getElementById('default-message');
  const projectsContainer = document.getElementById('projects-container');
  const tabContents = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tab-button');

  // initialize tabs
  function initializeTabs() {
      // show default message and hide all tab contents initially
      defaultMessage.style.display = 'block';
      projectsContainer.style.display = 'block'; // Make sure the container is visible initially
      tabContents.forEach(content => content.style.display = 'none');

      // set up event listeners for tab buttons
      tabButtons.forEach(button => {
          button.addEventListener('click', (event) => {
              showTab(event.target.dataset.tab, event);
          });
      });
  }

  // function to show tab content
  function showTab(tabId, event) {
      const contents = document.querySelectorAll('.tab-content');
      const buttons = document.querySelectorAll('.tab-button');

      // hide all tab contents
      contents.forEach(content => content.style.display = 'none');

      // remove the active class from all buttons
      buttons.forEach(button => button.classList.remove('active'));

      // show the selected tab content
      const selectedContent = document.getElementById(tabId);
      if (selectedContent) {
          selectedContent.style.display = 'block';
          defaultMessage.style.display = 'none'; // hide default message
          projectsContainer.style.display = 'none'; // hide the container
      }

      // add the active class to the clicked button
      if (event) {
          event.target.classList.add('active');
      }
  }

  // initialize tabs on page load
  initializeTabs();
});



function enlargeImage(button) {
  const container = button.closest('.image-container');
  const beforeImage = container.querySelector('.before');
  const afterImage = container.querySelector('.after');
  const popup = document.getElementById('popup');
  const popupImgBefore = document.getElementById('popup-img-before');
  const popupImgAfter = document.getElementById('popup-img-after');

  if (beforeImage && afterImage && popup && popupImgBefore && popupImgAfter) {
      popupImgBefore.src = beforeImage.src;
      popupImgAfter.src = afterImage.src;
      popup.style.display = 'flex';
  } else {
      console.error('Could not find the necessary elements for enlarging the images.');
  }
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
