import contactImage from '../assets/images/contact.jpg';

function contact() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('grid', 'contact');
  mainDiv.setAttribute('data-layout', '50-50');

  //image container
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  img.src = contactImage;
  imgContainer.appendChild(img);

  //contact detail
  const contactContainer = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Contact Us';
  const address = document.createElement('ul');
  address.setAttribute('role', 'list');
  address.innerHTML = `
    <li>67096 Francesca Lane</li>
    <li>O'Harahaven, Oregon </li>
    <li>Phone: 111 111 111</li>
    <li>Email: info@pasta.com</li>
  `;
  contactContainer.appendChild(h1);
  contactContainer.appendChild(address);

  //append child to main div
  mainDiv.appendChild(img);
  mainDiv.appendChild(contactContainer);

  return mainDiv;
}

export default contact;
