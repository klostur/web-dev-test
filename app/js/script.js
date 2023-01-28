const nav = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if ( scrollPosition > 10 ) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})