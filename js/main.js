// TOGGLE MENU
const toggle = document.querySelector('.js-toggle-menu');
const menu = document.querySelector(`${toggle.dataset.menu}`);
const links = document.querySelectorAll('.js-links');
const body = document.getElementById('body');
const mainMenu = document.getElementById('main-menu');

toggle.addEventListener('click', (e)=> {
    menu.classList.toggle('opened');
    e.target.classList.toggle('opened');
    body.classList.toggle('active');
})

mainMenu.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        menu.classList.remove('opened');
        toggle.classList.remove('opened');
        body.classList.remove('active');  
    }
})

/* for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
       menu.classList.remove('opened');
       toggle.classList.remove('opened');
       body.classList.remove('active');
    })
} */

// SLIDER
const slider = new Splide('.splide', {
    pagination: false,
    type: 'fade',
    rewind: true
}).mount();

slider.on('moved', () => {
    slider.root.querySelector('.splide__list').classList.toggle('toggle-slides');
});

// FORM
document.querySelectorAll('.form__input').forEach(item => {
    item.addEventListener('focus', () => {
        item.nextElementSibling.classList.add('active');
    });
    item.addEventListener('blur', () => {
        if(item.value.trim() === '') {
            item.nextElementSibling.classList.remove('active');
        }   
    });
});

