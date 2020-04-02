$("body").on("click", "#see_plans", function(){
    ga('send', {
        hitType: 'event',
        eventCategory: 'Consulta click',
        eventAction: 'click',
        eventLabel: 'Odisi Health consulta'
      });


      //scroll
     
      $('html,body').animate({
        scrollTop: $("#" + "pricing").offset().top
        }, 'slow');
    

})