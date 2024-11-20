const btnSeasonOne = document.getElementById('seasonOneBtn');
const seasonOneContent = document.getElementById('"seasonOneContent');

btnSeasonOne.addEventListener( 'click' , () => {
    if(seasonOneContent.style.display == 'none'){
        seasonOneContent.style.display = 'flex';
        btnSeasonOne.style.transform = 'rotate(180deg)';
    }else{
        seasonOneContent.style.display = 'none';
        btnSeasonOne.style.transform = 'rotate(180deg)';
    }
});