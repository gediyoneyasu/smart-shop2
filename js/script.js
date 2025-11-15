const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
    link.addEventListener("click", () => menuOpenButton.click());
});

/*--animation text--*/
const text = document.querySelector(".second-text");
const textload = () => {
    setTimeout(() => {
        text.textContent = "Premium Products";
    }, 0);
    setTimeout(() => {
        text.textContent = "Fast Delivery";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Best Deals";
    }, 8000);
}
textload();
setInterval(textload, 12000);

// Add to Cart functionality (simple alert for demo)
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        alert('Added to cart!');
    });
});

// Nuts Slider
// Enhanced Add to Cart with alert (can be extended to real cart)
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const productName = this.closest('.slide').querySelector('h4').textContent;
        alert(`${productName} added to cart!`);
    });
});

// Existing slider JS remains the same, but enhanced with auto-play option (optional enhancement)
let autoPlayInterval;

// For Nuts Slider (add auto-play)
function startNutAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeNutSlide(1);
    }, 4000); // Change every 4 seconds
}

function stopNutAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start auto-play on load
document.addEventListener('DOMContentLoaded', () => {
    startNutAutoPlay();
    // Pause on hover
    document.querySelector('.nuts-section').addEventListener('mouseenter', stopNutAutoPlay);
    document.querySelector('.nuts-section').addEventListener('mouseleave', startNutAutoPlay);
});

// For Water Slider (similar auto-play)
let waterAutoPlayInterval;

function startWaterAutoPlay() {
    waterAutoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 4000);
}

function stopWaterAutoPlay() {
    clearInterval(waterAutoPlayInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    startWaterAutoPlay();
    document.querySelector('.water-bottles-section').addEventListener('mouseenter', stopWaterAutoPlay);
    document.querySelector('.water-bottles-section').addEventListener('mouseleave', startWaterAutoPlay);
});

// Existing slider functions (unchanged)
let nutSlideIndex = 1;
showNutSlides(nutSlideIndex);

function changeNutSlide(n) {
    showNutSlides(nutSlideIndex += n);
}

function currentNutSlide(n) {
    showNutSlides(nutSlideIndex = n);
}

function showNutSlides(n) {
    let slides = document.querySelectorAll('#nutsSlider .slide');
    let dots = document.querySelectorAll('#nutsSlider ~ .slider-dots .dot');
    if (n > slides.length) { nutSlideIndex = 1; }
    if (n < 1) { nutSlideIndex = slides.length; }
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));
    slides[nutSlideIndex - 1].style.display = "block";
    dots[nutSlideIndex - 1].classList.add("active");
    document.getElementById('nutsSlider').style.transform = `translateX(${- (nutSlideIndex - 1) * 100}%)`;
}

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('#waterSlider .slide');
    let dots = document.querySelectorAll('#waterSlider ~ .slider-dots .dot');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    document.getElementById('waterSlider').style.transform = `translateX(${- (slideIndex - 1) * 100}%)`;
}

// Simple star rating interaction (user can click to "rate" - logs to console for demo)
document.querySelectorAll('.rating-stars i').forEach(star => {
    star.addEventListener('click', function () {
        const stars = this.parentElement.querySelectorAll('i');
        stars.forEach((s, index) => {
            if (index < this.dataset.index) {
                s.classList.remove('far');
                s.classList.add('fas');
            } else {
                s.classList.remove('fas');
                s.classList.add('far');
            }
        });
        console.log(`Rated ${this.dataset.index} stars!`); // Can integrate with backend
    });
    star.dataset.index = Array.from(this.parentElement.children).indexOf(star) + 1;
});