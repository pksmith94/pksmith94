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

const card = document.querySelectorAll('.card');

card.forEach(c => c.addEventListener("mouseover", function(){
     cardBody = c.querySelector('.card-body');
     if(!cardBody.classList.contains('.cardbody-hover')){
          cardBody.classList.add('.cardbody-hover');
          console.log("hey");
     }
}));