document.querySelector('a[href="#about"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});