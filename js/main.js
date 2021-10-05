$(document).ready(function () {
    const hotelSlider = new Swiper(".hotel-slider", {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: ".hotel-slider__button--next",
            prevEl: ".hotel-slider__button--prev",
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });

    const reviewsSlider = new Swiper(".reviews-slider", {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: ".reviews-slider__button--next",
            prevEl: ".reviews-slider__button--prev",
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });

    const menuButton = $(".menu-button");
    menuButton.on("click", function () {
        $(".navbar-bottom").toggleClass("navbar-bottom--visible");
        $("body").toggleClass("hidden-scroll");
    });

    const modalButton = $("[data-toggle=modal]");
    const closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);

    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    const form = $(".form");

    function openModal() {
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
        $("body").addClass("hidden-scroll");
    }

    function closeModal(event) {
        event.preventDefault();
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        $("body").removeClass("hidden-scroll");
    }
    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
            $("body").removeClass("hidden-scroll");
        }
    });
    // Обработка форм
    form.each(function () {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: "Name must be at least 2 letters long",
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com",
                },
                phone: {
                    required: "Phone is required",
                    minlength: "You must enter 10 digits of the number",
                },
            },
        });
    });
    $("input[name*='phone']").mask("+7(999) 999-9999");
});
