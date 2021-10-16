/*global $, alert, console*/
$(function () {
  "use strict";

  // adjust header height
  var myHeader = $("header"),
    mySlider = $(".slider");

  myHeader.height($(window).height());

  $(window).resize(function () {
    myHeader.height($(window).height());

    mySlider.each(function () {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".slider div").height()) / 2
      );
    });
  });

  // add active class to links
  $(".links li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  // adjust bxSlider in the center
  mySlider.each(function () {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".slider div").height()) / 2
    );
  });

  // bxSlider
  $(document).ready(function () {
    mySlider.bxSlider({
      pager: false,
    });
  });

  // smooth scroll
  $(".links li a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });

  // Ttrigger mixitup
  var mixer = mixitup(".containerr");

  // move active class
  $(".shuffle li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // add nice scroll
  $("body").niceScroll({
    cursorcolor: "#1abc9c",
    cursorwidth: "10px",
    cursorborder: "1px solid #1abc9c",
    zindex: "5",
  });
});
