var burger = document.querySelector('.burger');
var Nav = document.querySelector('#Nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    Nav.classList.toggle('active')
})

document.querySelector('#e1').addEventListener('mouseover', () => {
    document.querySelector('.date1').style.display = 'none';
})
document.querySelector('#e1').addEventListener('mouseout', () => {
    document.querySelector('.date1').style.display = 'block';
})

document.querySelector('#e2').addEventListener('mouseover', () => {
    document.querySelector('.date2').style.display = 'none';
})
document.querySelector('#e2').addEventListener('mouseout', () => {
    document.querySelector('.date2').style.display = 'block';
})