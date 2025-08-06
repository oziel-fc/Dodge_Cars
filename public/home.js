const parent = document.getElementById('btn_skin_selector');
const child = document.getElementById('btn_skin_selector_physics');

// skin_button animation
child.addEventListener('mouseenter', () => {
    parent.style.height = '123px';
    parent.style.width = '164px';
});
child.addEventListener('mouseleave', () => {
    parent.style.height = '110px';
    parent.style.width = '147px';
});

// mouse cursor image
document.addEventListener('mousemove', (event) => {
    const cursor = document.getElementById('custom_cursor');
    cursor.style.left = `${event.clientX}px`;   /*clientX is position between border of page and mouse cursor on axis X*/
    cursor.style.top = `${event.clientY}px`;    /*clientY is position between border of page and mouse cursor on axis Y*/
});

// skin_selector tab
document.getElementById("btn_skin_selector").addEventListener("click", () => {
    document.getElementById("skin_selector_tab").classList.remove("hidden");
});
document.getElementById("close_skin_tab").addEventListener("click", () => {
    document.getElementById("skin_selector_tab").classList.add("hidden");
});

// Making the skin_selector_tab reponsive
document.documentElement.style.setProperty('--skin-tab-width', (window.innerWidth * 0.57) + 'px');
window.addEventListener("resize", () => {
    document.documentElement.style.setProperty('--skin-tab-width', (window.innerWidth * 0.57) + 'px');
});

