$(document).ready(function() {
  $('.portfolio-item').on('mouseenter', function(e) {
    $(this).children('.desc').show().addClass('animated slideInUp');
  });
  $('.portfolio-item').on('mouseleave', function(e) {
    $(this).children('.desc').hide().removeClass('animated slideInUp');
  });
});
