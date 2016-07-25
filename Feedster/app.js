var main = function() {
  $('.notification').on('click', 'img',function(){
    $('.notification-menu').toggle(250);
  });
  $('.btn').on('click', function(){
    $(this).toggleClass('btn-like');
  });
}

$(document).ready(main);