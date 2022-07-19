function imgSlider(anything){
    document.querySelector('.pepsi').src = anything;
}

function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navegation = document.querySelector('.navegation');
    toggleMenu.classList.toggle('active');
    navegation.classList.toggle('active');
}