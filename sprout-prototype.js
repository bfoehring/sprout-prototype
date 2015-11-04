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

  $('.groups-picker').click(function(){
    $('.groups-menu-hidden').toggleClass('groups-menu');
    $('.compose-togo-container').removeClass('compose-togo-container');
    $('.compose-active').removeClass('compose-active');
  });

  $('.compose').click(function(){
    $('.compose-togo-container-hidden').toggleClass('compose-togo-container');
    $('.compose').toggleClass('compose-active');
    $('.groups-menu').removeClass('groups-menu');
  });
  
});