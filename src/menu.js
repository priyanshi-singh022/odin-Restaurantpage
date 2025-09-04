function loadMenu() {
  const content = document.getElementById('content');

  const menu = document.createElement('div');
  menu.id = 'menu';

  const h2 = document.createElement('h2');
  h2.textContent = 'Menu';
  menu.appendChild(h2);

  const items = [
    {
      title: 'Fresh Juices & Beverages 🍹',
      list: [
        'Watermelon Juice',
        'Mango Smoothie',
        'Strawberry Banana Shake',
        'Lemon Iced Tea',
        'Virgin Mojito',
        'Cold Coffee',
        'Green Detox Juice',
      ],
    },
    {
      title: 'Delicious Meals 🌮',
      list: [
        'Paneer Butter Masala with Naan',
        'Grilled Chicken with Veggies',
        'Veg Biryani',
        'Pasta Alfredo',
        'Thai Green Curry with Rice',
        'Dal Tadka with Jeera Rice',
        'Fish Curry with Steamed Rice',
      ],
    },
    {
      title: 'Desserts & Sweets 🧁',
      list: [
        'Chocolate Lava Cake',
        'Cheesecake (Strawberry)',
        'Gulab Jamun',
        'Rasmalai',
        'Brownies with Ice Cream',
        'Apple Pie',
        'Cupcakes',
        'Donuts',
      ],
    },
    {
      title: 'Takeaway 🫔',
      list: [
        'Wraps (Paneer / Chicken)',
        'Burgers (Veg / Chicken)',
        'Pizza Slices',
        'Fried Rice with Manchurian',
        'Veg & Chicken Rolls',
        'Tacos',
        'Paratha Combos',
        'Packaged Meal Boxes',
      ],
    },
  ];

  const container = document.createElement('div');
  container.classList.add('menu-item');

  items.forEach((section) => {
    const box = document.createElement('div');
    box.classList.add('menubox');

    const ul = document.createElement('ul');
    const h4 = document.createElement('h4');
    h4.textContent = section.title;
    ul.appendChild(h4);

    section.list.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });

    box.appendChild(ul);
    container.appendChild(box);
  });

  menu.appendChild(container);
  content.appendChild(menu);
}

export default loadMenu;
