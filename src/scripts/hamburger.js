const header = document.getElementById('header');
const logo = document.getElementById('logo');
const menu = document.getElementById('menu');
const socials = document.getElementById('socials');
const hamburger = document.getElementById('hamburger');
const hamburgerPlank = document.querySelectorAll('.hamburger__plank');
const overlay = document.getElementById('overlay');


hamburger.addEventListener("click", function (event)
{   event.preventDefault();
    header.classList.toggle('header--menu-active');
    logo.classList.toggle('logo--disabled');
    menu.classList.toggle('menu-active');
    socials.classList.toggle('socials--menu-active');
    hamburger.classList.toggle('hamburger--menu-active');
    hamburgerPlank.forEach(i=> i.classList.toggle('hamburger__plank--menu-active'));
    overlay.classList.toggle('overlay--active');
    document.body.style.overflow = 'hidden';
})