$(window).on("load", function(){
    //home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    
    function slideShow(){
        console.log(slideIndex)
        if(slideIndex = slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow, 5000);
    }
    slideShow();
} )