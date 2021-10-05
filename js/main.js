$(window).on("load", function(){
    //home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    
    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow, 5000);
    }
    slideShow();
})

$(document).ready(function(){

    //fixed header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fondoblanco");
        }
        else{
            $(".header").removeClass("fondoblanco");
        }
    })
})


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}