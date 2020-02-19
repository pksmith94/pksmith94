const jumboTron = document.querySelector('.jumbotron');
const navbar = document.querySelector('.navbar');

const options = { 
     rootMargin: "-500px 0px 0px 0px"
};
const navObserver = new IntersectionObserver(navScroll, options);
function navScroll(entries, navObserver) {
     entries.forEach(entry => {
          if (!entry.isIntersecting) {
               navbar.classList.add('scrolled');
          }
          else {
               navbar.classList.remove('scrolled');
          }
     });
}
navObserver.observe(jumboTron);
