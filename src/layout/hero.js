import heroImage from '../assets/images/heroImage.jpg';

function hero() {
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('grid', 'hero', 'g-align-items-center');
  heroDiv.setAttribute('data-layout', '50-50');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('flow', 'flex', 'col-direction');

  const h1 = document.createElement('h1');
  h1.innerHTML = `It's not just <span class="text-color-green">Food</span> , It's an <span class="text-color-primary">experience</span>`;

  const link = document.createElement('a');
  link.innerText = 'Book A Table';
  link.classList.add('btn', 'hero-btn', 'px-2', 'py-1', 'rounded', 'bg-color');

  contentContainer.appendChild(h1);
  contentContainer.appendChild(link);

  const imageContainer = document.createElement('div');
  const imageTag = document.createElement('img');
  imageTag.setAttribute('src', heroImage);
  imageContainer.appendChild(imageTag);

  heroDiv.appendChild(contentContainer);
  heroDiv.appendChild(imageContainer);
  return heroDiv;
}

export default hero;
