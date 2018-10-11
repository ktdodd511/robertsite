$(document).ready(function() {

  $('.navbar-right a').click(function() {
    $('.navbar-right a.active').removeClass('active');
    $(this).addClass('active');

  });

})
