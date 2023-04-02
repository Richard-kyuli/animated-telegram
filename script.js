/*====================================humburger toggle button===========*/
let menuIcon = document.querySelector('#menu-icon');
let nabar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nabar.classList.toggle('active');
};
/*====================================scrool sections link===========*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            
        };
    });
    /*=================sticky nav==================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
        /*=================remove humburger toggle and navbar when click navbar link==================*/
        menuIcon.classList.remove('bx-x');
        nabar.classList.remove('active'); 
};

  /*=================scroll reveal==================*/
  ScrollReveal({
     //reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
     });

     ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
     ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'bottom'});
     ScrollReveal().reveal('.home-content h1, about-img', { origin: 'left'});
     ScrollReveal().reveal('.home-content h1, about-img', { origin: 'left'});
     ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

     /*=================typed js==================*/
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Web Developer', 'Graphic Designer', 'Blogger'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
