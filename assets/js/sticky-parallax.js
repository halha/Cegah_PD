$(document).ready(() => {
  // scroll function
  $(window).scroll(e => {
    let scroll = $(window).scrollTop() + $(window).height();
    const breakSec = $("#break").offset().top;

    if (scroll > breakSec) {
      $("#sec1 .side-img-box").css({
        position: "absolute",
        bottom: "-5%",
        right: "-5%"
      });
    } else {
      $("#sec1 .side-img-box").css({
        position: "fixed",
        bottom: "-20%",
        right: "-5%"
      });
    }
  });
});
