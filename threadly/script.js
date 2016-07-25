var main = function() {
  $('form').click(function() {
    var comment = $('#comment').val();
    if(comment !== "") {
      var p = $('<li>').text(comment);
       $('.comments').prepend(p);
      $('#comment').val('');
    }

    return false;
  });
};

$(document).ready(main);