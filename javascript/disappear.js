/*  disappear.js
    Leif Anderson 7/4/17
*/
$(document).ready(function() {

  $('img').click(function() {
    $(this).hide();
  });

  $('#save-the-bananas').click(function() {
    $('img').show();
  });
});
