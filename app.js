let allImages = Array.from(document.querySelectorAll('.img_nav'));
let popUp = document.querySelector('.pop_up');
let cross = document.querySelector('.cross');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
let popImage = document.querySelector('.preview');
let currentPosition = 0;


allImages.map((elmt, index) => {
      elmt.addEventListener('click', ()=>{
        currentPosition = index
        popImage.src = allImages[index].src;
        popUp.classList.add('active');

        right.addEventListener('click', ()=> {
            // currentPosition = currentPosition + 1;
    
            if( currentPosition == (allImages.length) - 1){
                currentPosition = 0;
            }else{
                currentPosition += 1
            }
    
            popImage.src = allImages[currentPosition].src;
            });

        left.addEventListener('click', ()=> {
    
            if( currentPosition == (allImages.length) + 1){
                currentPosition = 0;
            }else{
                currentPosition -= 1
            }
    
            popImage.src = allImages[currentPosition].src;
            });

      });


});

cross.addEventListener('click', ()=> {
    popUp.classList.remove('active')
});

popUp.addEventListener('click', (e)=> {
    if(e.target.classList.contains('active')){
        popUp.classList.remove('active')

    }
})