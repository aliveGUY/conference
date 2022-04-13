const speakers = document.querySelectorAll('div.Featured-SPEAKERS > .Featured-speaker');

if (window.matchMedia('(max-device-width: 768px)').matches) {
  for (let i = 2; i < speakers.length; i += 1) {
    speakers[i].style.display = 'none';
  }
  document.querySelector('.SeeMore').addEventListener('click', () => {
    for (let i = 2; i < speakers.length; i += 1) {
      speakers[i].classList.toggle('Fetured-see');
    }
    if (document.querySelector('.SeeMore').innerHTML === '⇩Бачити Більше⇩') {
      document.querySelector('.SeeMore').innerHTML = '⇧Бачити Менше⇧';
    } else {
      document.querySelector('.SeeMore').innerHTML = '⇩Бачити Більше⇩';
    }
  });
}
