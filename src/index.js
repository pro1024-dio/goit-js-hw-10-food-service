import storage from "./js/storage";
import menu from "./js/menu";
import theme from "./js/theme";

const inputHandler = (event) => {
    if (theme.switchToggle.checked) {
        storage.save('theme', theme.Style.DARK);
        theme.body.classList.replace(theme.Style.LIGHT, theme.Style.DARK);
    } else {
        storage.save('theme', theme.Style.LIGHT);
        theme.body.classList.replace(theme.Style.DARK, theme.Style.LIGHT);
    };
};

let themeStyle = storage.load('theme');

theme.set(themeStyle);
menu.render('beforeend', 'ul.menu');

theme.switchToggle.addEventListener('change', inputHandler);