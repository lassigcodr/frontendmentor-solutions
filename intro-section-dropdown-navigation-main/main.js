const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-orientation');
const nav = document.querySelector('.navbar');
const dropdownElems = document.querySelectorAll('.dropdown-item');
const arrows = document.querySelectorAll('.arrow');
const dropdowns = document.querySelectorAll('li:has(ul)>ul');

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    nav.classList.toggle('open');
})

for (let i = 0; i < dropdowns.length; i++) {
    dropdownElems[i].addEventListener("click", function() {
        dropdowns[i].classList.toggle('open');
        arrows[i].classList.toggle('open');
    })
}