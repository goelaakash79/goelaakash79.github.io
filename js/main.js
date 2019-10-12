$(document).ready(function(){
    $("a").on('click', function(events) {
  
      if (this.hash !== "") {
        events.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });
  });