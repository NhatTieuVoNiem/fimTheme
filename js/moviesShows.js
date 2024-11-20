const headBlockScrollbar = document.getElementById('fim-poster');
const headButtonScrollbarLeft = document.getElementById('head-block__content--scrollbarLeft');
const headButtonScrollbarRight = document.getElementById('head-block__content--scrollbarRight');
const headBlockScrollbarWidth = headBlockScrollbar.getBoundingClientRect().width;
const shapes = document.querySelectorAll('.shape');
const colors = ['#E50000', '#333', '#333','#333'];

headButtonScrollbarLeft.addEventListener('click',() =>{
    headBlockScrollbar.scrollBy({
        left: -headBlockScrollbarWidth,
        behavior: 'smooth',
    });
});

headButtonScrollbarRight.addEventListener('click',() =>{
    headBlockScrollbar.scrollBy({
        left: headBlockScrollbarWidth,
        behavior: 'smooth',
    });
});

const moviesGenresBody = document.getElementById('movies__genres--body');
const moviesGenresScrollbarLeft = document.getElementById('movies__genres--scrollbarLeft'); 
const moviesGenresScrollbarRight = document.getElementById('movies__genres--scrollbarRight');
const bodyBlockContentBodyWidth = moviesGenresBody.offsetWidth;
let bodyBlockContentBodyGap = 0;
let bodyBlockContentBodySpace = 0;

if(bodyBlockContentBodyWidth >= 1440){
    bodyBlockContentBodyGap = 30;
}else if(bodyBlockContentBodyWidth >= 1080){
    bodyBlockContentBodyGap = 20;
}else{
    bodyBlockContentBodyGap = 16;
}

bodyBlockContentBodySpace = bodyBlockContentBodyWidth + bodyBlockContentBodyGap;

moviesGenresScrollbarLeft.addEventListener('click',() =>{
    moviesGenresBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

moviesGenresScrollbarRight.addEventListener('click',() =>{
    moviesGenresBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

const moviesPopularBody = document.getElementById('movies__popular--body');
const moviesPopularScrollbarLeft = document.getElementById('movies__popular--scrollbarLeft'); 
const moviesPopularScrollbarRight = document.getElementById('movies__popular--scrollbarRight');

moviesPopularScrollbarLeft.addEventListener('click',() =>{
    moviesPopularBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

moviesPopularScrollbarRight.addEventListener('click',() =>{
    moviesPopularBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

const moviesTrendingBody = document.getElementById('movies__trending--body');
const moviesTrendingScrollbarLeft = document.getElementById('movies__trending--scrollbarLeft'); 
const moviesTrendingScrollbarRight = document.getElementById('movies__trending--scrollbarRight');

moviesTrendingScrollbarLeft.addEventListener('click',() =>{
    moviesTrendingBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

moviesTrendingScrollbarRight.addEventListener('click',() =>{
    moviesTrendingBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

const moviesNewReleaseBody = document.getElementById('movies__new-release--body');
const moviesNewReleaseScrollbarLeft = document.getElementById('movies__new-release--scrollbarLeft'); 
const moviesNewReleaseScrollbarRight = document.getElementById('movies__new-release--scrollbarRight');

moviesNewReleaseScrollbarLeft.addEventListener('click',() =>{
    moviesNewReleaseBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

moviesNewReleaseScrollbarRight.addEventListener('click',() =>{
    moviesNewReleaseBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

const moviesMustWatchBody = document.getElementById('movies__must-watch--body');
const moviesMustWatchScrollbarLeft = document.getElementById('movies__must-watch--scrollbarLeft'); 
const moviesMustWatchScrollbarRight = document.getElementById('movies__must-watch--scrollbarRight');

moviesMustWatchScrollbarLeft.addEventListener('click',() =>{
    moviesMustWatchBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

moviesMustWatchScrollbarRight.addEventListener('click',() =>{
    moviesMustWatchBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});


const showsGenresBody = document.getElementById('shows__genres--body');
const showsGenresScrollbarLeft = document.getElementById('shows__genres--scrollbarLeft'); 
const showsGenresScrollbarRight = document.getElementById('shows__genres--scrollbarRight');

showsGenresScrollbarLeft.addEventListener('click',() =>{
    showsGenresBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

showsGenresScrollbarRight.addEventListener('click',() =>{
    showsGenresBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

const showsPopularBody = document.getElementById('shows__popular--body');
const showsPopularScrollbarLeft = document.getElementById('shows__popular--scrollbarLeft'); 
const showsPopularScrollbarRight = document.getElementById('shows__popular--scrollbarRight');
 showsPopularScrollbarLeft.addEventListener('click',() =>{
 showsPopularBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});
 showsPopularScrollbarRight.addEventListener('click',() =>{
 showsPopularBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

const showsTrendingBody = document.getElementById('shows__trending--body');
const showsTrendingScrollbarLeft = document.getElementById('shows__trending--scrollbarLeft'); 
const showsTrendingScrollbarRight = document.getElementById('shows__trending--scrollbarRight');

showsTrendingScrollbarLeft.addEventListener('click',() =>{
    showsTrendingBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

showsTrendingScrollbarRight.addEventListener('click',() =>{
    showsTrendingBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

const showsNewReleaseBody = document.getElementById('shows__new-release--body');
const showsNewReleaseScrollbarLeft = document.getElementById('shows__new-release--scrollbarLeft'); 
const showsNewReleaseScrollbarRight = document.getElementById('shows__new-release--scrollbarRight');

showsNewReleaseScrollbarLeft.addEventListener('click',() =>{
    showsNewReleaseBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

showsNewReleaseScrollbarRight.addEventListener('click',() =>{
    showsNewReleaseBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

const showsMustWatchBody = document.getElementById('shows__must-watch--body');
const showsMustWatchScrollbarLeft = document.getElementById('shows__must-watch--scrollbarLeft'); 
const showsMustWatchScrollbarRight = document.getElementById('shows__must-watch--scrollbarRight');

showsMustWatchScrollbarLeft.addEventListener('click',() =>{
    showsMustWatchBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

showsMustWatchScrollbarRight.addEventListener('click',() =>{
    showsMustWatchBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

document.getElementById('regime__movies').onclick = function () {
    document.getElementById('regime__movies').style.backgroundColor = '#1F1F1F';
    document.getElementById('regime__shows').style.backgroundColor = '#0F0F0F';
    document.getElementById('regime__shows').style.color = '#999';
    document.getElementById('regime__movies').style.color = '#fff';
    document.getElementById('movies').style.display ='flex';
    document.getElementById('shows').style.display = 'none';
};

document.getElementById('regime__shows').onclick = function () {
    document.getElementById('regime__movies').style.backgroundColor = '#0F0F0F';
    document.getElementById('regime__shows').style.backgroundColor = '#1F1F1F';
    document.getElementById('regime__shows').style.color = '#fff';
    document.getElementById('regime__movies').style.color = '#999';
    document.getElementById('shows').style.display = 'flex';
    document.getElementById('movies').style.display = 'none';
};