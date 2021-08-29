const hamburgerButton = document.querySelector('.header__hamburger');
const navigation = document.querySelector('.header__nav');

hamburgerButton.addEventListener('click', () => {
    navigation.classList.toggle('header__nav--show');
});
