$(function() {
    var text = $(".text");
    var text1 = $(".text1");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
  
      if (scroll >= 1) {
        text.removeClass("hidden");
        text1.removeClass("hidden");
      } else {
        text1.addClass("hidden");
        text.addClass("hidden");
      }
    });
  });