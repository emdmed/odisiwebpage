$("body").on("click", "#see_plans", function(){
      //scroll
     
      $('html,body').animate({
        scrollTop: $("#" + "pricing").offset().top
        }, 'slow');
    

})

$("body").on("click", "#scroll_todemo", function(){

  $('html,body').animate({
    scrollTop: $("." + "demo_div").offset().top
    }, 'slow');


})