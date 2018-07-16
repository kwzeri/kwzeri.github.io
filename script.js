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
  
    
    
    
    
    
    $(function(){
	$('#photoshow').infiniteslide({
		'height': 400,			// 高さを指定
		'speed': 30,			// スピードを指定
		'direction' : 'left',	// スライドする向きを指定
		'pauseonhover': false	// マウスオーバーでストップするかを指定
	});
 



    
    
    
});
