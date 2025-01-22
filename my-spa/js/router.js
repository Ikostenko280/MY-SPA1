let pageUrls = {
    about: '/index.html?about',
    contact: '/index.html?contact'
  };
  
  document.querySelector('#about-link').addEventListener('click', () => {
    history.pushState({ page: 'about' }, "About", "?about");
    renderAboutPage();
  });
  
  document.querySelector('#contact-link').addEventListener('click', () => {
    history.pushState({ page: 'contact' }, "Contact", "?contact");
    renderContactPage();
  });
  
  function renderAboutPage() {
    document.querySelector('main').innerHTML = "<h1>About Me</h1><p>This is the About Me page.</p>";
  }
  
  function renderContactPage() {
    document.querySelector('main').innerHTML = "<h1>Contact</h1><p>This is the Contact page.</p>";
  }
  
  window.onpopstate = () => {
    const loc = window.location.href;
    if (loc.includes('about')) renderAboutPage();
    if (loc.includes('contact')) renderContactPage();
  };
  