const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY -4) + "px; left: "+ (e.pageX -4) + "px;")
})
const cursorCircle = document.querySelector('.cursorCircle');
document.addEventListener('mousemove', e => {
    cursorCircle.setAttribute("style", "top: " + (e.pageY -10) + "px; left: "+ (e.pageX -10) + "px;")
})
document.addEventListener('click', () => {
cursor.classList.add("click");

setTimeout(() => {
    cursor.classList.remove("click");
}, 500)
})
