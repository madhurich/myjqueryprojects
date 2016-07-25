var main = function(){
  $('.login').click(function(){
    $(this).find('.dropdown-menu').toggle();
  });
 $(function() {
    $( "#accordion" ).accordion();
  }); 
};
$(document).ready(main);