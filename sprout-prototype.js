$(document).ready(function(){

  $('.film').hide();
  $('.modal-container').hide();
  
  $('.settings').click(function(){
    $('.film').fadeIn(250);
  	$('.modal-container').fadeIn(250);
  });
  
  $('.close').click(function(){
    $('.film').fadeOut(150);
  	$('.modal-container').fadeOut(150);
  });
  
});