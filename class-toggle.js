var burger = document.querySelector('.burger');

burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    document.querySelector('.Topbar').classList.toggle('active');
    document.querySelector('.Topbar-nav').classList.toggle('active');
    
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