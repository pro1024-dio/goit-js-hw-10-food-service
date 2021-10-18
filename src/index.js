import { load as loadStorage, save as saveStorage} from "./js/storage";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputHandler = (event) => {
    if (themeSwitchToggle.checked) {
        saveStorage('theme', Theme.DARK);
        body.classList.replace(Theme.LIGHT, Theme.DARK);
    } else {
        saveStorage('theme', Theme.LIGHT);
        body.classList.replace(Theme.DARK, Theme.LIGHT);
    };
};

const body = document.querySelector('body');
const themeSwitchToggle = document.querySelector('input#theme-switch-toggle');
let themeStyle = loadStorage('theme');
// console.log(loadStorage, saveStorage);
if (!themeStyle) {
    themeStyle = Theme.DARK;
}

switch (themeStyle) {
    case Theme.LIGHT:
        themeSwitchToggle.checked = false;
        body.classList.toggle(themeStyle);
        break;
    case Theme.DARK:
        themeSwitchToggle.checked = true;
        body.classList.toggle(themeStyle);
        break;
}

themeSwitchToggle.addEventListener('change', inputHandler);