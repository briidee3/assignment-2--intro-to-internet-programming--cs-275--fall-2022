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
        shiftSlides(1);
        console.log(`left arrow`);
    });

    // right arrow
    arrows[1].addEventListener(`click`, () => {
        shiftSlides(-1);
        console.log(`right arrow`);
    });


    // function to move to the left or right on arrow click
    let shiftSlides = (direction) => {
        
        for (let i = 0; i < slides.length; i++) {

            // make it so no functionality when on last slide
            if (parseInt(slides[0].style.left) === 0 && direction === 1) {
                direction = 0;
            }
            if (parseInt(slides[4].style.left) === 0 && direction === -1) {
                direction = 0;
            }

            console.log(slides[i].style.left = `${parseInt(slides[i].style.left) + 
                                                    (direction * slideWidth)}px`);
        }

    };
};