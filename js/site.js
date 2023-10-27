jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
$(document).ready(function () {
  $("#submit").click(function () {
    alert("You have been signed up for the gift! Here it is: a compliment. You are very cool!");
  });
});
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
 } 