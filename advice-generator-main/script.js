const quote = document.getElementById('text-quote');
const id = document.getElementById('advice-num');
const diceBtn = document.getElementById('random-btn');

diceBtn.addEventListener('click', function () {
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        if(!response.ok) {
            throw new Error('Check network connection')
        }
        return response.json()
    })
    .then(data => {
        id.textContent = data['slip']['id'];
        quote.textContent = data['slip']['advice'];
    })
})