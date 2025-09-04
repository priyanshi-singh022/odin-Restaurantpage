import loadHome from './home.js';
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function pageLoad() {
    const content = document.getElementById('content');

    // navbar 
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(header);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(header);
        loadMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(header);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    header.appendChild(nav);

    // Add header once
    content.appendChild(header);

    loadHome();
}

export default pageLoad;
