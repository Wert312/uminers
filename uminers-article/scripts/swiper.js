const swiperText = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination1',
        type: `bullets`,
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.articles-alike__slider-navigation--button-next',
        prevEl: '.articles-alike__slider-navigation--button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 32
        },
    }
});

const swiperInArticle = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination2',
        type: `bullets`,
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.article__text-slider-navigation--button-next',
        prevEl: '.article__text-slider-navigation--button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 32
        },
    }
});