  $(function(){
  $('h1').fadeIn(3600);

    $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.fadeIn(1500);
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.fadeOut(500);
    }
  });
  
    
    
    function slideSwitch() {
   var $active = $('#photoshow img.active');

   if ( $active.length == 0 ) $active = $('#photoshow img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#photoshow img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "slideSwitch()", 3000 );
});
    
    
    
    
});
