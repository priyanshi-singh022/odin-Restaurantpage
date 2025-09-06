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
        clearPage(content, header);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        clearPage(content, header);
        loadMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', () => {
        clearPage(content, header);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    header.appendChild(nav);

    content.appendChild(header);


    loadHome();
}

// helper: clear only dynamic part
function clearPage(content, header) {
    content.innerHTML = '';
    content.appendChild(header);
}

export default pageLoad;
