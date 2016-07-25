var main = function() {
  $('#top-text').keyup(function(){
    var x = $('#top-text').val();
    $('.top-caption').text(x);
  });
  $('#bottom-text').keyup(function(){
    var x = $('#bottom-text').val();
    $('.bottom-caption').text(x);
  });
  $('#image-url').keyup(function(){
    var x = $('#image-url').val();
  $('img').attr('src',x);
                         });
};
 
$(document).ready(main);