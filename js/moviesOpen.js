const cast = document.getElementById('cast');
const scrollbarLeft = document.getElementById('scrollbar__left');
const scrollbarRight = document.getElementById('scrollbar__right');
const castWidth = cast.getBoundingClientRect().width;
let castGap = 0;
let castSpace = 0;

if(castWidth >= 900){
    castGap = 20;
}else{
    castGap = 10;
}

castSpace = castGap + castWidth;

scrollbarLeft.addEventListener( 'click', () => {
    cast.scrollBy({
        left: - castSpace,
        behavior: 'smooth',
    })
});

scrollbarRight.addEventListener( 'click', () =>{
    cast.scrollBy({
        left: castSpace,
        behavior: 'smooth',
    })
});


const reviews = document.getElementById('reviews');
const bottomScrollbarLeft = document.getElementById('bottom__scrollbar--left');
const bottomScrollbarRight = document.getElementById('bottom__scrollbar--right');
const reviewsWidth = reviews.getBoundingClientRect().width;
let reviewsGap = 0;
let reviewsSpace = 0;

if(reviewsWidth >= 900){
    reviewsGap = 20;
}else {
    reviewsGap = 16;
}

reviewsSpace = reviewsWidth + reviewsGap;

bottomScrollbarLeft.addEventListener( 'click', () =>{
    reviews.scrollBy({
        left: - reviewsSpace,
        behavior: 'smooth',
    })
} );

bottomScrollbarRight.addEventListener( 'click', () => {
    reviews.scrollBy({
        left: reviewsSpace,
        behavior: 'smooth',
    })
} );