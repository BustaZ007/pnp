const closerNavBar = document.querySelector('.closer-nav-bar');
const borderNavBar = document.querySelector('.show-nav-bar');
const navBar = document.querySelector('.nav-bar');

closerNavBar.addEventListener('click', function(evt) {
    if (closerNavBar.classList.contains('show')) {
        closerNavBar.classList.remove('show');
        borderNavBar.classList.remove('show');
        navBar.classList.remove('visible');
    } else {
        closerNavBar.classList.add('show');
        borderNavBar.classList.add('show');
        navBar.classList.add('visible');
    }
});