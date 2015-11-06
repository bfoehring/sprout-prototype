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
    if($('.compose-minimized-hidden').hasClass('compose-minimized')){
      $('.groups-menu-hidden').toggleClass('groups-menu');
    } else {
      $('.groups-menu-hidden').toggleClass('groups-menu');
      $('.compose-togo-container').removeClass('compose-togo-container');
      $('.compose-active').removeClass('compose-active');
    }
  });

  $('.compose').click(function(){
    if($('.compose-minimized-hidden').hasClass('compose-minimized')){

    } else{
      $('.compose-togo-container-hidden').toggleClass('compose-togo-container');
      $('.compose').toggleClass('compose-active');
      $('.groups-menu').removeClass('groups-menu');
    }
  });

  $('.heading-close').click(function(){
    $('.compose-togo-container-hidden').toggleClass('compose-togo-container');
    $('.compose').toggleClass('compose-active');
  });

  $('.heading-min').click(function(){
    $('.compose-togo-container-hidden').toggleClass('compose-togo-container');
    $('.compose-minimized-hidden').toggleClass('compose-minimized');
  });

  $('.compose-minimized-hidden').click(function(){
    $('.compose-minimized-hidden').toggleClass('compose-minimized');
    $('.compose-togo-container-hidden').toggleClass('compose-togo-container');
  });

  $('.compose-draft').click(function(){
    $('.compose-draft').toggleClass('compose-draft-active');
    $('.compose-queue-active').removeClass('compose-queue-active');
    $('.compose-schedule-active').removeClass('compose-schedule-active');
  });

  $('.compose-queue').click(function(){
    $('.compose-queue').toggleClass('compose-queue-active');
    $('.compose-draft-active').removeClass('compose-draft-active');
    $('.compose-schedule-active').removeClass('compose-schedule-active');
  });

  $('.compose-schedule').click(function(){
    $('.compose-schedule').toggleClass('compose-schedule-active');
    $('.compose-draft-active').removeClass('compose-draft-active');
    $('.compose-queue-active').removeClass('compose-queue-active');
  });

  $('.close-min').on('click', function(){
      $('.compose-togo-container-hidden').toggleClass('compose-togo-container');
      $('.compose').removeClass('compose-active');
  });

  $(document).bind('keydown', function(e) { 
        if (e.which == 27) {
            $('.film').fadeOut(150);
            $('.modal-container').fadeOut(150);
        }
  });

});