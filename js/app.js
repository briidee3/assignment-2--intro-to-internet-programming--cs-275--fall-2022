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
        shiftSlides(`left`);
        console.log(`left arrow`);
    });

    // right arrow
    arrows[1].addEventListener(`click`, () => {
        shiftSlides(`right`);
        console.log(`right arrow`);
    });


    // function to move to the left or right on arrow click
    let shiftSlides = (direction) => {

        // direction for calculations
        let dir;

        if (direction === `left`) {
            dir = -1;
        }
        else {
            dir = 1;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.left = `${i * dir * slideWidth}px`;
            
        }

    };
};