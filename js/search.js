const actionBody = document.getElementById('action__body');
const actionScrollbarLeft = document.getElementById('action__scrollbarLeft'); 
const actionScrollbarRight = document.getElementById('action__scrollbarRight');
const bodyBlockContentBodyWidth = actionBody.getBoundingClientRect().width;
let bodyBlockContentBodyGap = 0;
let bodyBlockContentBodySpace = 0;

if(bodyBlockContentBodyWidth >= 1440){
    bodyBlockContentBodyGap = 30;
}else if(bodyBlockContentBodyWidth >= 1080){
    bodyBlockContentBodyGap = 20;
}else{
    bodyBlockContentBodyGap = 16;
}

actionScrollbarLeft.addEventListener('click',() =>{
    actionBody.scrollBy({
        left: -bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});

actionScrollbarRight.addEventListener('click',() =>{
    actionBody.scrollBy({
        left: bodyBlockContentBodySpace,
        behavior: 'smooth',
    });
});
