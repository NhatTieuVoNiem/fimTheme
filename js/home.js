
const scrollable = document.getElementById('categories__body');
const scrollLeftButton = document.getElementById('scrollbarLeft');
const scrollRightButton = document.getElementById('scrollbarRight');
const scrollableWidth = document.getElementById('categories__body').getBoundingClientRect().width
const category = scrollable.getElementsByClassName('category');
const shapes = document.querySelectorAll('.shape');
const colors = ['#E50000', '#333', '#333','#333'];
let colorIndex = 0;
let scrollableGap =0;
let scrollableSpace = 0;

function updateColors() {
    shapes.forEach((shape, index) => {
         shape.style.backgroundColor = colors[(colorIndex % colors.length + index) % colors.length];
    });
};
if(scrollableWidth >= 1600){
    scrollableGap = 30;
   
}else if(scrollableWidth >= 1280){
    scrollableGap = 20;
}else{
    scrollableGap = 16;
}
scrollableSpace = scrollableWidth + scrollableGap;
scrollLeftButton.addEventListener('click', () => {
    scrollable.scrollBy({
        left: -scrollableSpace, 
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    scrollable.scrollBy({
        left: scrollableSpace,
        behavior: 'smooth'
    });
});