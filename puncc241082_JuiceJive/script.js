// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Auto-hide sidebar
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        document.addEventListener('mousemove', function(event) {
            if (event.clientY < 50) {
                sidebar.style.top = "0";
            } else {
                sidebar.style.top = "-60px";
            }
        });
    }

    // Slideshow functionality
    let slideIndex = 0;
    let isPlaying = true;
    let slideInterval;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slideIndex++;
        if (slideIndex > slides.length) { 
            slideIndex = 1; 
        }
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        }
    }

    function startSlideshow() {
        slideInterval = setInterval(showSlides, 3000);
    }

    // Initialize slideshow if slides exist
    if (document.getElementsByClassName("slide").length > 0) {
        showSlides();
        startSlideshow();
    }

    // Toggle button functionality
    const toggleBtn = document.getElementById("toggleBtn");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function() {
            if (isPlaying) {
                clearInterval(slideInterval);
                this.textContent = "Play Slideshow";
            } else {
                startSlideshow();
                this.textContent = "Pause Slideshow";
            }
            isPlaying = !isPlaying;
        });
    }

    // Dropdown functionality
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // Simple slideshow for index.html (alternative approach)
    function simpleSlideshow() {
        const slides = document.querySelectorAll('.slide');
        if (slides.length > 0) {
            slides.forEach(slide => slide.style.display = 'none');
            slideIndex = (slideIndex + 1) % slides.length;
            slides[slideIndex].style.display = 'block';
        }
    }

    // Initialize simple slideshow if no advanced controls needed
    if (document.querySelector('.slideshow-container') && !document.getElementById('toggleBtn')) {
        setInterval(simpleSlideshow, 3000);
        simpleSlideshow();
    }
});