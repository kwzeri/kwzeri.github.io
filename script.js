  $(function(){
	  

//（１）ページの概念・初期ページを設定
var page=0;

//（２）イメージの数を最後のページ数として変数化
var lastPage =parseInt($("#slide img").length-1);

//（３）最初に全部のイメージを一旦非表示にします
     $("#slide img").css("display","none");

//（４）初期ページを表示
          $("#slide img").eq(page).css("display","block");

//（５）ページ切換用、自作関数作成
function changePage(){
          $("#slide img").fadeOut(700);
            $("#slide img").eq(page).fadeIn(700);
};

//（６）～秒間隔でイメージ切換の発火設定
var Timer;
function startTimer(){
Timer =setInterval(function(){
          if(page === lastPage){
                         page = 0;
                         changePage();
               }else{
                         page ++;
                         changePage();
          };
     },5000);
}
//（７）～秒間隔でイメージ切換の停止設定
function stopTimer(){
clearInterval(Timer);
}

//（８）タイマースタート
startTimer();

/*オプションを足す場合はここへ記載*/
  
	
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  $('h1').fadeIn(3600);

    $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.fadeIn(500);
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.fadeOut(100);
    }
  });
  
    
    
    
    
    

 



    
    
    
});
