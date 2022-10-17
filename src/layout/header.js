function header() {
  const headerTag = document.createElement('header');

  const logo = document.createElement('div');
  logo.innerHTML = `Pasta`;
  const nav = document.createElement('nav');
  nav.innerHTML = `<ul role='list' class="flex">
  <li> <a href="#" data-nav='home'>Home</a> </li>
  <li> <a href="#" data-nav='menu'>Menu</a> </li>
  <li> <a href="#" data-nav='contact'>Contact Us</a> </li>
  </ul>`;

  const navLink = document.createElement('a');
  navLink.setAttribute('href', '#');
  navLink.classList.add('nav-btn', 'btn');
  navLink.innerHTML = 'Order Now';

  const navBtnContainer = document.createElement('div');
  navBtnContainer.appendChild(navLink);
  //Added classlist
  headerTag.classList.add('flex', 'flex-justify-between', 'flex-align-center');
  nav.classList.add(
    'flex',
    'flex-grow-1',
    'flex-justify-center',
    'flex-align-end'
  );

  logo.classList.add('logo');

  headerTag.appendChild(logo);
  headerTag.appendChild(nav);
  headerTag.appendChild(navBtnContainer);

  return headerTag;
}

export default header;
