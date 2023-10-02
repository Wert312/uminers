const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    longSwipes: false,
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination1',
        type: `bullets`,
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.experts__navigation--button-next',
        prevEl: '.experts__navigation--button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 14
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 14
        }
    }
});

const swiperAchievements = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    longSwipes: false,
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination2',
        type: `bullets`,
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.achievements__navigation--button-next',
        prevEl: '.achievements__navigation--button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 14
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 14
        }
    }
});

const swiperTeam = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    longSwipes: false,
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination3',
        type: `bullets`,
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.team__navigation--button-next',
        prevEl: '.team__navigation--button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 14
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 14
        }
    }
});