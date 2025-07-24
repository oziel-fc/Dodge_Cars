const parent = document.getElementById('btn_skin_selector');
const child = document.getElementById('btn_skin_selector_physics');

child.addEventListener('mouseenter', () => {
    parent.style.height = '123px';
    parent.style.width = '164px';
});

child.addEventListener('mouseleave', () => {
    parent.style.height = '110px';
    parent.style.width = '147px';
});