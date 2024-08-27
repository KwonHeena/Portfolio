$(document).ready(function() {
  var target = $('.section02').offset().top;
  var scroll = $(window).scrollTop();
  if(scroll == target){
    $('.section02').addClass('on');
  }else{
    $('.section02').removeClass('on');
  }
});