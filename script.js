  $(function(){
  $('h1').fadeIn(3600);

  // FAQのアコーディオン
    $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.fadeIn(500);
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').transform:rotate(-90deg);
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.fadeOut(1500);
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').transform:rotate(90deg);
    }
  });
  
});
