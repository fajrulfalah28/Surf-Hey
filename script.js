
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

  $('#loginForm').submit(function (event) {
    event.preventDefault();
    var username = $('input[type="text"]').val();
    var password = $('input[type="password"]').val();

    if (username === 'username' && password === 'password') {
        alert('Login successful');

        setTimeout(function() {
          window.location.href = 'dashboard.html';
      }, 2000);
    } else {
        $('#failedModal').removeClass('hidden');
    }
});

$('#closeModal').click(function () {
    $('#failedModal').addClass('hidden');
});

  $('#account-button').on('click', function() {
    window.location.href = 'account.html';
  });
});
