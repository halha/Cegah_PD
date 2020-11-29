$(document).ready(() => {
  $(window).scroll(() => {
    var scroll = $(this).scrollTop();

    $("#sec1 .bg1").css({
      transform: "translate(0px, -" + scroll / 28 + "%)"
    });

    $("#sec1 .bg2").css({
      transform: "translate(-50%, -" + scroll / 50 + "%)"
    });

    $("#sec1 .bg4").css({
      transform: "translate(-50%, -" + scroll / 75 + "%)"
    });
  });
});
