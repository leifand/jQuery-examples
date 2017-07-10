/*
    ninja2cat.js
    Leif Anderson 7/7/17
*/
$(document).ready(function() {

  $('img').click(function() {
    // swap src and alt-src
    var pic = $(this).attr('src');
    $(this).attr('src', $(this).attr('alt-src'));
    $(this).attr('alt-src', pic);
  });

});
