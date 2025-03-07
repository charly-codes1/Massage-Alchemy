(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });



    // Pricing carousel
    // $(".pricing-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     margin: 30,
    //     loop: true,
    //     dots: false,
    //     nav : false,
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         576:{
    //             items:1
    //         },
    //         768:{
    //             items:2
    //         }
    //     }
    // });


//     // Testimonials carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1500,
//         margin: 30,
//         dots: true,
//         loop: true,
//         items: 1
//     });

<script>
    let currentIndex = 0;
    const slides = document.querySelectorAll('.pricing-carousel .slide');
    const totalSlides = slides.length;

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Loops back to the first slide
        updateCarouselPosition();
    }

    function updateCarouselPosition() {
        const newTransformValue = `translateX(-${currentIndex * 100}%)`;
        document.querySelector('.pricing-carousel').style.transform = newTransformValue;
    }

    // Set the carousel to automatically move every 3 seconds
    setInterval(moveToNextSlide, 3000);
</script>