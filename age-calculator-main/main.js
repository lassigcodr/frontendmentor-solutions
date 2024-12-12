// form element
const form = document.getElementById('form');

// input element
const birthDay = document.getElementById('day');
const birthMonth = document.getElementById('month');
const birthYear = document.getElementById('year');

// output element
const DD = document.getElementById('days');
const MM = document.getElementById('months');
const YYYY = document.getElementById('years');


form.addEventListener('submit', handleSubmit);

const date = new Date();
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getFullYear();
const daysInMonth = (y, m) => new Date(y, m, 0).getDate();


function validate() {
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value){
            parent.classList.add('error');
            parent.children[2].innerText = 'This field is required';
            validator = false;
        }
        if (birthMonth.value > 12) {
            birthMonth.parentElement.classList.add('error');
            birthMonth.parentElement.querySelector('small').innerText = 'Must be a valid month';
            validator = false;
        }
        if (birthDay.value > daysInMonth(birthYear.value, birthMonth.value)) {
            birthDay.parentElement.classList.add('error');
            birthDay.parentElement.querySelector('small').innerText = 'Must be a valid day';
            validator = false;
        } 
        if (birthYear.value > year) {
            birthYear.parentElement.classList.add('error');
            birthYear.parentElement.querySelector('small').innerText = 'Must be in the past'
        }
        // else {
        //     parent.querySelector('small').innerText = '';
        //     validator = true;
        // }
    })
    return validator
}


function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        let years = currentYear - Number(birthYear.value);
        let months = currentMonth - Number(birthMonth.value);
        let days = currentDay - Number(birthDay.value);

        if (days < 0) {
            // months--;
            const lastMonth = daysInMonth(currentYear, currentMonth - 1);
            days = Math.floor((currentDay - lastMonth) / (1000 * 60 * 60 * 24));
            console.log(days, typeof(days))
            console.log(lastMonth, typeof(lastMonth))
            // days += daysInMonth(currentYear, currentMonth);
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        // console.log(birthYear.value, typeof(birthYear.value))

        // if (currentMonth < Number(birthMonth.value)) {
        //     years = years - 1;
        //     months = currentMonth + (12 - Number(birthMonth.value)) - 1;
        // }

        // if (currentDay < Number(birthDay.value)) {
        //     let remainder = Number(birthDay.value) - currentDay;
        //     console.log(typeof(birthDay.value), birthDay.value)
        //     console.log(typeof(currentDay), currentDay)
        //     // months = months + 1;
        //     days = remainder; 
        // }
        
        DD.innerHTML = days;
        MM.innerHTML = months;
        YYYY.innerHTML = years;
    }
}





