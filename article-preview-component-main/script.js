document.querySelector('.share').addEventListener('click', function (){
    const sharePopUp = document.querySelector('.share-popup');
    sharePopUp.classList.toggle('display');
    
    const shareDivs = document.getElementsByClassName('share');
    for (let element of shareDivs) {
        element.classList.toggle('share-active');
    }
});
