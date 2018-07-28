
$(function(){

 
  
  $('h1').fadeIn(800);
 
 

  $('#top-btn').click(function(){
    $('html, body').animate({ 
      'scrollTop': 0 
    }, 500);
  });
  
  
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position 
    }, 500);
  });
  
  
  
        
  $('h1').fadeIn(3600);

    $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.fadeIn(500);
      
    } else {
      $answer.addClass('open'); 

      $answer.fadeOut(100);
    }
  });
  
  
  
  
  
});
