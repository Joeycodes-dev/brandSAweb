
//make owl corasel responsive depening on screensize
const responsively ={
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}

$(document).ready(function(){

    //navigation responsive
    $nav = $('nav')
    $toggleCollapse = $('.toggle-collapse')

    $toggleCollapse.click(function(){
        $nav.toggleClass("collapse");
    })


    //owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive :responsively
    });

    //Scroll-up

    $('.go-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })

    //Aos start
    AOS.init(); 

    //stories button for now

    $('.stories-for-now').click(function(){
        $('html,body').animate({
            scrollTop:900
        },1000);
    })

    $('.about-us').click(function(){
        $('html,body').animate({
            scrollTop:8000
        },1000);
    })

})