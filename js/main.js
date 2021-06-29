$(document).ready(function() {
    var hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 300,

        autoplay: {
            delay: 4500,
        },

        effect: 'fade',

        fadeEffect: {
            crossFade: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },

        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

    });

    var reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 300,

        autoplay: {
            delay: 4500,
        },

        effect: 'slide',

        // Navigation arrows
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },

        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

    });

    var menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', function() {
        document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom__mobile--visible');
    });

    var modalButton = $("[data-toggle=modal]");
    var modalCloseButton = $(".modal__close");
    var modalWindow = $(".modal__dialog");
    modalButton.on("click", openModal);
    modalCloseButton.on("click", closeModal);

    $(document).on("keydown", function(e) {
        if (e.keyCode == 27)
            var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        console.log('press esc');
    });

    $(document).click(function(e) {
        if (!modalButton.is(e.target) && !modalWindow.is(e.target) && modalWindow.has(e.target).length === 0) {
            var modalOverlay = $(".modal__overlay");
            var modalDialog = $(".modal__dialog");
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
        };
    });

    function openModal() {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
    }

    // Валидация форм
    $('.form').each(function() {
        $(this).validate({
            rules: {
                phone: {
                    required: true,
                    minlength: 18
                }
            },

            messages: {
                subscriptionEmail: {
                    required: "This form have not to be empty"
                },
                name: {
                    required: "Please specify your name",
                    minlength: "Your name must be longer than one symbol"
                },
                phone: {
                    required: "Please enter your phone",
                    minlength: jQuery.validator.format("Number must be in 10 characters")
                },
                modalMail: {
                    required: "We need your email address to contact you",
                    modalMail: "Your email address must be in the format of name@domain.com"
                }
            }
        });
    })

    // Маска для полей ввода
    $(document).ready(function() {
        $('.phone').mask('+7 (000) 000-00-00');
        //$('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true });
        //{ 'translation': { 0: { pattern: /[0-5-10]/ } } }
    });

    // Анимация при прокручивании
    AOS.init();
});