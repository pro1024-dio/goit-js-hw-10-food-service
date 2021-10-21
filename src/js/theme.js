//theme.js

//зберігає назви стилів теми Темна або Світла
const Style = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//ініціалізуємо елементи керування темою
const switchToggle = document.querySelector('input#theme-switch-toggle');
const body = document.querySelector('body');

//встановлення теми під час завантаження сторінки
const set = (styleValue) => {
    
    if (!styleValue) {
        styleValue = Style.LIGHT;
    }

    switch (styleValue) {
        case Style.LIGHT:
            switchToggle.checked = false;
            body.classList.toggle(styleValue);
            break;
        case Style.DARK:
            switchToggle.checked = true;
            body.classList.toggle(styleValue);
            break;
    };
}

export default {Style, set, switchToggle, body};