$("body").on("click", "#see_plans", function(){
      //scroll
     
      $('html,body').animate({
        scrollTop: $("#" + "pricing").offset().top
        }, 'slow');
    

})