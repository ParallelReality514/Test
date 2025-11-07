document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    const container = document.getElementById('slideshow-container');
    if (!container) return; // Виходимо, якщо контейнер не знайдено

    const slides = container.querySelectorAll('.my-slide');
    const slideNumberDisplay = document.getElementById('slide-number');
    const totalSlides = slides.length;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const showSlides = (n) => {
        let i;
        if (n > totalSlides) { slideIndex = 1; } // Додано зациклення
        if (n < 1) { slideIndex = totalSlides; } // Додано зациклення
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        }
        
        slideNumberDisplay.innerHTML = `Слайд ${slideIndex} з ${totalSlides}`;
        
        // Знімаємо блокування кнопок для зациклення
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    };

    const plusSlides = (n) => showSlides(slideIndex += n);

    // Додавання обробників подій
    if (prevBtn) prevBtn.addEventListener('click', () => plusSlides(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => plusSlides(1));

    // Обробка клавіш-стрілок
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') { plusSlides(1); }
        else if (event.key === 'ArrowLeft') { plusSlides(-1); }
    });

    // Ініціалізація
    showSlides(slideIndex);
});