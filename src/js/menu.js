//menu.js

import menuData from "./menu.json";
import menuTemplate from '../templates/menu.hbs';

const render = (position = 'beforeend', tag = 'ul') => {
    const menu = document.querySelector(tag);
    const markup = menuTemplate(menuData);

    menu.insertAdjacentHTML(position, markup);
};

export default {render};