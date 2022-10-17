import greekOrzoSalad from '../assets/images/Greek-Orzo-Salad.png';
import GorgonzolaShrimpPasta from '../assets/images/Gorgonzola-Shrimp-Pasta.png';
import CapreseMacaroniSalad from '../assets/images/Caprese-Macaroni-Salad.png';
import GrilledChickenSalad from '../assets/images/Grilled-Chicken-Salad.png';
import pasta from '../assets/images/pasta-2.png';

const menus = [
  {
    image: greekOrzoSalad,
    heading: 'Greek Orzo Salad',
    description:
      'All the tasty toppings—including red onion, tomatoes, olives, feta cheese and a zesty dressing—and orzo give it extra interest.',
    price: '$15',
  },
  {
    image: GorgonzolaShrimpPasta,
    heading: 'Gorgonzola Shrimp Pasta',
    description:
      "This creamy pasta dish is so quick and easy. It's perfect for weeknights, but feels special enough for company.",
    price: '$20',
  },
  {
    image: pasta,
    heading: 'Artichoke Florentine Pasta',
    description:
      'Pasta loaded with artichokes and creamy cheese is everything a Sunday dinner should be: rich, tasty and memorable.',
    price: '$25',
  },
  {
    image: CapreseMacaroniSalad,
    heading: 'Caprese Macaroni Salad',
    description:
      'When fresh tomatoes and basil are abundant in the summer, I like to make this wonderful Caprese macaroni salad',
    price: '$30',
  },
  {
    image: GrilledChickenSalad,
    heading: 'Grilled Chicken Salad',
    description:
      'All the tasty toppings—including red onion, tomatoes, olives, feta cheese and a zesty dressing—and orzo give it extra interest.',
    price: '$15',
  },
];
function menu() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('grid', 'menu');
  menus.map((menu) => {
    menuDiv.appendChild(menuList(menu.image, menu.heading, menu.price));
  });

  return menuDiv;
}

function menuList(image, heading, price) {
  //menu image
  const menuImage = document.createElement('img');
  menuImage.setAttribute('src', image);
  menuImage.setAttribute('width', '250');
  menuImage.setAttribute('height', '250');

  //menu heading
  const menuHeading = document.createElement('h4');
  menuHeading.innerHTML = heading;
  //menu description
  // const menuDesc = document.createElement('p');
  // menuDesc.innerHTML = description;

  //menu price
  const menuPrice = document.createElement('p');
  menuPrice.innerHTML = price;

  const article = document.createElement('article');
  //append menu to article
  article.appendChild(menuImage);
  article.appendChild(menuHeading);
  // article.appendChild(menuDesc);
  article.appendChild(menuPrice);

  //append to container
  return article;
}

export default menu;
