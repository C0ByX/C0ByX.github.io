"use strict"
$(document).ready(function(){
    let hoverCount = 0;
    $('.mainCont_portfolio').mouseover(function(){
        if (hoverCount == 0){
        $('.mainCont_rezum_contact').animate({
            opacity:'0',
        },300);
        $('.mainCont_rezum_skills').animate({
            opacity:'0',
        },300);
        
        setTimeout(function(){
            $('.mainCont_rezum').animate({
                width: "10%"
            },600, 'linear');
            $('.mainCont_portfolio').animate({
                width: "90%"
            },600, 'linear');
            $('.mainCont_rezum_contact, .mainCont_rezum_skills').css("display","none");
            $('.mainCont_rezum_close').css("display","flex")
            $('.mainCont_rezum_close').animate({
                opacity: "1"
            },600)
        },300)
        setTimeout(function(){
            hoverCount = 1;
        },1000);
    }
    });
    $('.mainCont_rezum').mouseover(function(){
        if(hoverCount == 1){
            $('.mainCont_rezum_close').animate({
                opacity: "0"
            },600)
            setTimeout(function(){
                $('.mainCont_rezum_close').css("display","none")
            },600)
        $('.mainCont_portfolio').animate({
            width: "10%"
        },600, 'linear');
        setTimeout(function(){
            $('.mainCont_rezum_contact, .mainCont_rezum_skills').css("display","flex");
            $('.mainCont_rezum_contact').animate({
                opacity:'1',
            },600);
            $('.mainCont_rezum_skills').animate({
                opacity:'1',
            },600);
        },600);
        $('.mainCont_rezum').animate({
            width: "90%",
            opacity: "1"
        },600, 'linear');
            hoverCount = 0;
    }
    });
});