const btn = document.getElementById('button');
const menu = document.getElementById('menu-btn');

btn.addEventListener('click', () => {
    btn.classList.toggle('clicked')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
})