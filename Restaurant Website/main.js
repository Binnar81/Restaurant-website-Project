const year=document.getElementById("year");
const thisyear=new Date().getFullYear();
year.setAttribute("datetime",thisyear);
year.textContent=thisyear;

/* slideshow code */
/* var slideIndex = 0;

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");

            // Hide all slides
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            // Move to the next slide
            slideIndex++;

            // Reset to the first slide if at the end
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }

            // Display the current slide
            slides[slideIndex].style.display = "block";

            // Change slide every 5 seconds (5000 milliseconds)
            setTimeout(showSlides, 5000);
        }

        // Initial call to start the slideshow
        showSlides(); */