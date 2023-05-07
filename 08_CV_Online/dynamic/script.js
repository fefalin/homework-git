//toggle dark-mode and change logo
function toggleDarkMode() {
  const body = document.body;
  const logo = document.getElementById('dark-logo');

  body.classList.toggle('dark-mode');
  logo.setAttribute('src', body.classList.contains('dark-mode') ? './Images/logo/logo_white_sf.png' : './Images/logo/logo_blue_sf.png');
};


//animation add/remove in view-port
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








