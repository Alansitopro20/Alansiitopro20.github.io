(function(){
    const slideshow = document.getElementById('topSlideshow');
    const slides = [...slideshow.querySelectorAll('.slide')];
    if (slides.length <= 1) return;

    let idx = 0;
    setInterval(() => {
        slides[idx].classList.remove('active');
        idx = (idx + 1) % slides.length;
        slides[idx].classList.add('active');
    }, 3000);
})();