$(document).ready(() => {
  $("nav .show").click(() => {
    $("nav ul").css({
      right: "0"
    });
  });

  $("nav ul .hide").click(() => {
    $("nav ul").css({
      right: "-100%"
    });
  });

  // Scroll function
  $(window).scroll(e => {
    let scroll = $(window).scrollTop();

    if (scroll > 40) {
      $("nav").addClass("bg-nav");
    } else {
      $("nav").removeClass("bg-nav");
    }
  });
  $("nav ul li a").addClass("text-black");
});
