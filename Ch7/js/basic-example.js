$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(3500);
$('li').on('click', function() {
  $(this).remove();
});