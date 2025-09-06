import vegesImg from './Images/pasta-spaghetti-vegetables-spices-isolated-white.jpg';

function loadHome() {
    const content = document.getElementById('content');

    // cleanup: remove hero and services if they already exist
    const oldHero = document.getElementById('hero-sec');
    if (oldHero) oldHero.remove();

    const oldServices = document.getElementById('service-sec');
    if (oldServices) oldServices.remove();

    // Hero
    const hero = document.createElement('div');
    hero.id = 'hero-sec';

    const img = document.createElement('img');
    img.src = vegesImg;
    img.alt = 'Veges';
    img.classList.add('hero-img');

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Our Restaurant';

    const p = document.createElement('p');
    p.textContent =
        'Where every meal is made with love and every guest is family. Enjoy fresh ingredients, cozy vibes, and flavors that bring people together. Sit back, relax, and let us serve you happiness on a plate. 🍽️';

    hero.appendChild(img);
    hero.appendChild(h1);
    hero.appendChild(p);

    // Services
    const services = document.createElement('div');
    services.id = 'service-sec';

    const serviceList = [
        { title: 'Juices & Drinks 🥤' },
        { title: 'Delicious Meals 🍲' },
        { title: 'Desserts & Sweets 🍰' },
        { title: 'Takeaway 🚴' },
    ];

    serviceList.forEach((s) => {
        const div = document.createElement('div');
        div.classList.add('service');
        const h2 = document.createElement('h2');
        h2.textContent = s.title;
        div.appendChild(h2);
        services.appendChild(div);
    });

    content.appendChild(hero);
    content.appendChild(services);
}

export default loadHome;
