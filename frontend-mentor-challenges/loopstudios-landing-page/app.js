const hamburgerOpen = document.querySelector('.header__hamburger--open');
const hamburgerClose = document.querySelector('.header__hamburger--close');
const list = document.querySelector('.header__nav');

hamburgerOpen.addEventListener('click', () => {
    hamburgerClose.classList.toggle('open');
    hamburgerOpen.classList.toggle('close');
});

hamburgerClose.addEventListener('click', () => {
    hamburgerClose.classList.toggle('open');
    hamburgerOpen.classList.toggle('close');
});

hamburgerOpen.addEventListener('click', () => {
    list.classList.toggle('hamburger');
});

hamburgerClose.addEventListener('click', () => {
    list.classList.remove('hamburger');
});
