$(document).ready(function() {
  $("#register").click(function() {
    $(this).prop("disabled", true);
    $("#content").show();

    setTimeout(function() {
      $("#register").prop("disabled", false);
    }, 3000);
  });
});
