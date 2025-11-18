<script>
            const sidebar = document.getElementById('sidebar');
            document.addEventListener('mousemove', function(event) {
                if (event.clientY < 50) {
                    sidebar.style.top = "0";
                } else {
                    sidebar.style.top = "-60px";
                }
            });
    
            let slideIndex = 0;
            let isPlaying = true;
            let slideInterval;

            function showSlides() {
                let slides = document.getElementsByClassName("slide");
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";  
                }
    
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1; }
                slides[slideIndex - 1].style.display = "block";
            }

            function startSlideshow() {
                slideInterval = setInterval(showSlides, 3000);
            }

            showSlides();
            startSlideshow();

            document.getElementById("toggleBtn").addEventListener("click", function() {
                if (isPlaying) {
                    clearInterval(slideInterval);
                    this.textContent = "Play Slideshow";
                } else {
                    startSlideshow();
                    this.textContent = "Pause Slideshow";
                }
                isPlaying = !isPlaying;
            });
        </script>