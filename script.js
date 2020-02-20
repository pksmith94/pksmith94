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

const triggers = document.querySelectorAll('.nav-link');
const nav = document.getElementById("nav");
const highlight = document.createElement('span');
document.body.append(highlight);

function highlightNavLink() {
     highlight.classList.add('highlight');
     const linkCoords = this.getBoundingClientRect();
     const coords = {
          width: linkCoords.width - 9,
          height: linkCoords.height,
          top: linkCoords.top + window.scrollY,
          left: linkCoords.left + window.scrollX
     };
     
     highlight.style.width = `${coords.width}px`;
     highlight.style.height = `${coords.height}px`;
     highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

function stopHighlight(){
     highlight.classList.remove('highlight');
}

triggers.forEach(c => c.addEventListener('mouseenter', highlightNavLink));
nav.addEventListener('mouseleave', stopHighlight);

