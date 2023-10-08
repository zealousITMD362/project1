jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
$(document).ready(function () {
  $("#submit").click(function () {
    alert("You have been signed up for the gift!");
  });
});
