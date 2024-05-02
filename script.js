
$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $("#mobile-nav").toggleClass("hidden");
  });

  $("#selection").change(function () {
    var selectedValue = $(this).val();
    if (selectedValue === "post") {
      $(".feed").removeClass("hidden")
      $(".statistic").addClass("hidden");
    } else if (selectedValue === "overall") {
      $(".feed").addClass("hidden");
      $(".statistic").removeClass("hidden");
    }
  });

  $("#post").click(function () {
    window.location.href = "post.html";
  });

  $("button[type='submit']").click(function () {
    window.location.href = "dashboard.html";
  });

  $('#account-button').on('click', function() {
    window.location.href = 'account.html';
  });
});
