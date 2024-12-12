const bar = document.querySelectorAll(".bar");
const day = document.querySelectorAll(".day");
const tooltip = document.querySelectorAll(".tooltip");


fetch("data.json")
.then(response => response.json())
.then(data => showInfo(data));


function showInfo(data) {
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].day, Math.floor(data[i].amount));
        if (data[i].day == 'wed') {
            bar[i].classList.add('active');
        }
        bar[i].style.height = `${Math.floor(data[i].amount * 2)}px`
        day[i].innerText = data[i].day;
        tooltip[i].innerText = `$${data[i].amount}`;
        bar[i].addEventListener('mouseover', function () {
            tooltip[i].style.visibility = 'visible';
        })
        bar[i].addEventListener('mouseout', function () {
            tooltip[i].style.visibility = 'hidden';
        })
    }
}



