
const dropdowns = document.querySelectorAll('.dropdown-icon');
const body = document.querySelectorAll('.body');
const title = document.querySelectorAll('.title');

for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function () {
        dropdowns[i].classList.toggle('active');
        body[i].classList.toggle('body-active');
        title[i].classList.toggle('title-active');
    });
}