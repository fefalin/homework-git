//toggle dark-mode and change logo
function toggleDarkMode() {
  const body = document.body;
  const logo = document.querySelectorAll('.dark-logo1, .dark-logo2, .dark-logo3');

  body.classList.toggle('dark-mode');

  logo.forEach((logo) => {
    logo.setAttribute('src', body.classList.contains('dark-mode') ? './images/logo/logo_white_sf.png' : './images/logo/logo_blue_sf.png');
});
};




//animation add/remove in view-port
// IntersectionObserver - object, which is a built-in browser API for observing changes to the intersection between an element and the viewport.
// The observer takes a callback function as an argument, which will be called whenever the intersection changes.
const element = document.querySelector('.technologies');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      element.classList.add('in-view');
    } else {
      element.classList.remove('in-view');
    }
  });
});

observer.observe(element);

// contact modal
document.addEventListener("DOMContentLoaded", function () {
  const contactModal = new bootstrap.Modal(document.getElementById('contact-modal'));
  const sendToast = new bootstrap.Toast(document.getElementById('toast-message'));

  const contactNav = document.getElementById('contact-nav');
  contactNav.addEventListener('click', () => {
    contactModal.show();
  });

  const contactHeader = document.getElementById('contact-header');
  contactHeader.addEventListener('click', () => {
    contactModal.show();
  });

  const contactFooter = document.getElementById('contact-footer');
  contactFooter.addEventListener('click', () => {
    contactModal.show();
  });

  const sendMessage = document.getElementById('send-message');
  sendMessage.addEventListener('click', () => {
    contactModal.hide();
    sendToast.show();
  });
});








