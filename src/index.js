import header from './layout/header';
import hero from './layout/hero';
import menu from './pages/menu';
import contact from './pages/contact';
import './scss/style.scss';

//body background color
document.body.classList.add('bg-color');
//select content
const content = document.getElementById('content');
content.classList.add('wrapper');

//header
const headerDiv = header();

document.querySelector('#content').addEventListener('click', (e) => {
  let target = e.target;
  if (target.dataset.nav === 'home') {
    content.removeChild(content.lastChild);

    content.appendChild(hero());
  }
  if (target.dataset.nav === 'menu') {
    content.removeChild(content.lastChild);

    content.appendChild(menu());
  }
  if (target.dataset.nav === 'contact') {
    content.removeChild(content.lastChild);
    content.appendChild(contact());
  }

  e.preventDefault();
});

//Append all element to content
content.appendChild(headerDiv);
content.appendChild(hero());
