var main = function(){
 $('.cart').click(function(){
   $(this).find('.dropdown-menu').toggle();
   $('.account dropdown-menu').hide();
   $('.help dropdown-menu').hide();
   });
 $('.account').click(function(){
     $(this).find('.dropdown-menu').toggle();
   $('.cart dropdown-menu').hide();
    $('.help dropdown-menu').hide();
 }); 
   $('.help').click(function(){
     $(this).find('.dropdown-menu').toggle();
   $('.cart dropdown-menu').hide();
     $('.account dropdown-menu').hide();
 }); 
  
};
$(document).ready(main);