const testimonialItems = document.querySelectorAll('.testimonial__item');
const testimonialDots = document.querySelectorAll('.testimonial__dot');

let currentSlide = 0;

function showTestimonial(index) {

    testimonialItems.forEach(item => {
        item.classList.remove('active');
    });

    testimonialDots.forEach(dot => {
        dot.classList.remove('active');
    });

    testimonialItems[index].classList.add('active');
    testimonialDots[index].classList.add('active');

    currentSlide = index;
}

testimonialDots.forEach((dot, index) => {

    dot.addEventListener('click', () => {
        showTestimonial(index);
    });

});