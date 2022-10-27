window.onload = () => {
    
    let slides = document.getElementsByClassName(`slides`);
    let slideWidth = 500;

    console.log(slideWidth);
    // position slides
    for (let i = 0; i < slides.length; i++) {
        console.log(slides[i].style.left = `${i * slideWidth}px`);
    }

    // arrow functionality
    let arrows = document.getElementsByClassName(`arrows`);

    // left arrow
    arrows[0].addEventListener(`click`, () => {
        if (!())
    });


    // function to move to the left or right on arrow click
    shiftSlides (dir) => {
        
    }
};