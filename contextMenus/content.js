// content.js
console.log(123)
window.onload = function() {
    const links = document.getElementsByTagName('a');
    for(let i = 0; i < links.length; i++) {
        links[i].style.color = 'red';
    }
};