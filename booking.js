let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });



    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');  
};

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200 
    });

    ScrollReveal().reveal('.text-box, .contact h1', { origin: 'top'});
    ScrollReveal().reveal('.services p, .hire-box img, .contact form, .price-table, .prices p', { origin: 'bottom'});
    ScrollReveal().reveal('.services-info-box, .location-box', { origin: 'left'});
    ScrollReveal().reveal('.services-info-box1, .location-box img', { origin: 'right'});

consttyped = new Typed('.multiple-text', {
    strings: ['Bienvenue'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function sendMail()
{
    var SubjectLine = "/---NEW ORDER---/";
    var body = "NAME: " + document.getElementById("Name").value + "          " +  " ----->CITY: " + document.getElementById("City").value + "          " + " ----->EMAIL: " + document.getElementById("email").value + "          " + " ----->PHONE NUMBER: " + document.getElementById("number").value + "          " + " ----->ADDRESS: " + document.getElementById("address").value;

    window.location.href = "mailto:rotimioluwatimilehin19@gmail.com?subject=" +SubjectLine+"&body="+body;
}