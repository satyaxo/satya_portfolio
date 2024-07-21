document.addEventListener('DOMContentLoaded', function () {
    // Show or hide the back-to-top button based on scroll position
    window.addEventListener('scroll', function () {
      const button = document.getElementById('back-to-top');
      if (window.scrollY > 300) { // Show button after scrolling 300px
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    });
  
    // Scroll to top when button is clicked
    document.getElementById('back-to-top').addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  