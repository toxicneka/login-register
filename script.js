const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Новый обработчик для клика вне попапа
document.addEventListener('click', function(event) {
    const isPopupActive = wrapper.classList.contains('active-popup');
    const isClickInsidePopup = wrapper.contains(event.target);
    const isLoginButton = event.target.closest('.btnLogin-popup');

    if (isPopupActive && !isClickInsidePopup && !isLoginButton) {
        wrapper.classList.remove('active-popup');
    }
});
