$(document).ready(function() {
  AOS.init({});

  $(window).on('scroll', function(){
    var target = $('.section03').offset().top;
    var scroll = $(window).scrollTop();
    if(scroll > target){
      $('.section03').addClass('on');
    }else{
      $('.section03').removeClass('on');
    }
  });

});