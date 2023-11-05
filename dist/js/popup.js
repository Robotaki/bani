const openPopupButton = document.querySelectorAll('.openPopupButton');
const closePopupButton = document.querySelectorAll('.close');
const popups = document.querySelectorAll('.popup');

openPopupButton.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const popup = document.getElementById(target);
        popup.style.display = 'block';
    });
});

closePopupButton.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const popup = document.getElementById(target);
        popup.style.display = 'none';
    });
});