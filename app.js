let cursor = document.querySelector(".cursor");
let links = document.querySelectorAll('a');

var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

// if (isTouchDevice){
//     cursor.remove();
// }
window.addEventListener('touchstart', function() {
    cursor.remove();
});

window.addEventListener("mousemove", e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('link-hover');
    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-hover');
    })
})