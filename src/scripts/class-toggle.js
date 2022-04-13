const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  document.querySelector('.Topbar').classList.toggle('active');
  document.querySelector('.Topbar-nav').classList.toggle('active');
});
