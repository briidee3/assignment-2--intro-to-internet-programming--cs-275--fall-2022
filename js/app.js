window.onload = () => {
    
    let slides = document.getElementsByClassName(`slides`);
    let slideWidth = 500;

    console.log(slideWidth);
    // position slides
    for (let i = 0; i < slides.length; i++) {
        console.log(slides[i].style.left = `${i * slideWidth}px`);
    }

    
};