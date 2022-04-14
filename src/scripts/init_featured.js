import data from './data.js';

const speakers = document.querySelector('.Featured-SPEAKERS');

for (let i = 0; i < data.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.classList = 'Featured-speaker mb-4';
  speaker.id = data[i].id;
  const image = document.createElement('div');
  image.className = 'featured-img';
  const img = document.createElement('img');
  img.src = data[i].image;
  img.alt = 'Avatar';
  const text = document.createElement('div');
  text.classList = 'Featured-text ps-2';
  const Name = document.createElement('h3');
  Name.innerHTML = data[i].name;
  const Position = document.createElement('p');
  Position.innerHTML = data[i].position;
  Position.classList = 'Featured-des mb-2';
  const line = document.createElement('div');
  line.classList = 'Line mb-2';
  const Description = document.createElement('p');
  Description.innerHTML = data[i].description;

  speakers.appendChild(speaker);
  speaker.appendChild(image);
  speaker.appendChild(text);
  image.appendChild(img);
  text.appendChild(Name);
  text.appendChild(Position);
  text.appendChild(line);
  text.appendChild(Description);
}

// After loading featured im making them able to drop down

const speakersAll = document.querySelectorAll('div.Featured-SPEAKERS > .Featured-speaker');

if (window.matchMedia('(max-device-width: 768px)').matches) {
  for (let i = 2; i < speakersAll.length; i += 1) {
    speakersAll[i].style.display = 'none';
  }

  document.querySelector('.SeeMore').addEventListener('click', () => {
    for (let i = 2; i < speakersAll.length; i += 1) {
      speakersAll[i].classList.toggle('Fetured-see');
    }
    if (document.querySelector('.SeeMore').innerHTML === 'БІЛЬШЕ<img class="ms-2" src="src/img/arrow_down.png" alt="arrow">') {
      document.querySelector('.SeeMore').innerHTML = 'МЕНШЕ<img class="ms-2" src="src/img/arrow_up.png" alt="arrow">';
    } else {
      document.querySelector('.SeeMore').innerHTML = 'БІЛЬШЕ<img class="ms-2" src="src/img/arrow_down.png" alt="arrow">';
    }
  });
}
