window.addEventListener('scroll', function () {
    let navbar = document.getElementById("navbar");

    if (window.pageYOffset >= 0.001) {
        navbar.classList.add('sticky');
        navbar.classList.add('backnav');
    } else {
        navbar.classList.remove('sticky');
        navbar.classList.remove('backnav');
    }

});