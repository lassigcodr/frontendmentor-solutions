const mark = document.querySelector('.header__p');
const notifications = document.querySelectorAll('.notification.unread');
const num = document.querySelector('.header__span');

mark.addEventListener('click', function () {
    for (let i = 0; i < notifications.length; i++) {
        notifications[i].classList.remove('unread');
    }
    num.innerHTML = 0;
});

