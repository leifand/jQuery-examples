$( document ).ready(function() {
    console.log( "All systems ready:" );
    // test click
    $('#test-click').click(function() {
      alert('HIP HOP RULES!!!');
    });
    // test-hide
    $('#test-hide').click(function() {
      $('img').fadeOut('slow', function() {
      });
    });
    // test-show
    $('#test-show').click(function() {
      $('img').fadeIn('slow', function() {
      });
    });
    // test-toggle
    $('#test-toggle').click(function() {
      $('img').toggle();
    });
    // test-slideDown
    $('#test-slide-down').click(function() {
      $('img').slideDown();
    });
    // test-slideUp
    $('#test-slide-up').click(function() {
      $('img').slideUp();
    });
    // test-fadeIn
    $('#test-fade-in').click(function() {
      $('img').fadeIn();
    });
    // test-fadeOut
    $('#test-fade-out').click(function() {
      $('img').fadeOut();
    });
    // test-add-class
    $('#test-add-class').click(function() {
      $('img').addClass('silver-border');
    });
    // test before
    $('#test-before').click(function() {
      $('img').before('<h4>This Image is AWESOME!!</h4>');
    });
    // test-after
    $('#test-after').click(function() {
      $('img').after('<h4>You are good enough!</h4>');
    });
    // test-append
    $('#test-append').click(function() {
      $('p').append('<h4>APPROVED</h4>');
    });
    // test-html
    $('#test-html').click(function() {
      $('p').html('<b>THIS ISSUE HAS BEEN RESOLVED!</b>');
    });
    // test-attr
    //$('#test-attr').click(function() {
      //var img-path = $('img').attr('src');
      //$('img').after('<h6>' + img-path + '</h6>');
    //});
  });
