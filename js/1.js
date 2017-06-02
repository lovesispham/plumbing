$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["",""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// $(function(){
//     $( ".level0 li .plus" ).click(function() {
//     $(this).parent().find( ".dropdown-content" ).slideToggle(function() {
//       $(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
//     });
//   });
// });

$(function(){
   $('.level0 > li').click(function() {
    $('.level0 > li').not(this).find('.dropdown-content').hide();
    $(this).find('.dropdown-content').stop(true, true).slideToggle(400);
    
});
});