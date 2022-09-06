const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    burger.classList.toggle('burger-open');
    document.body.classList.toggle("no-scroll");
    navLink.forEach(link => {
        link.classList.toggle('nav-link-open');
    })
});