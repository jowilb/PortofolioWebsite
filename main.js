$(document).ready(function () {
  let darkmode = false;

  //   $(document).on("contextmenu", function (e) {
  //     e.preventDefault();
  //   });

  //   $(window).on("keydown", function (event) {
  //     if (event.keyCode == 123) {
  //       return false;
  //     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
  //       return false; //Prevent from ctrl+shift+i
  //     } else if (event.ctrlKey && event.keyCode == 73) {
  //       return false; //Prevent from ctrl+shift+i
  //     }
  //   });

  //   $(document).keypress("u", function (e) {
  //     if (e.ctrlKey) {
  //       return false;
  //     }
  //   });

  $("#desktop").click(function () {
    if (darkmode == true && $("#desktop").attr("disabled", false)) {
      $("nav").css("background-color", "#2ed3c6");
      $("footer").css("background-color", "#2ed3c6");
      $("body").css("color", "#000");
      $("body").css("background-color", "#f8f5e6");
      $(".slider").css("left", "calc(0px)");

      darkmode = false;
    } else if (!darkmode) {
      $("nav").css("background-color", "#cba478");
      $("footer").css("background-color", "#cba478");
      $("body").css("color", "#fff");
      $("#profile a").css("color", "#fff");
      $("body").css("background-color", "#171d4b");
      $(".slider").css("left", "calc(21px)");

      darkmode = true;
    }
  });

  //   if screen is phone then hide the desktop button
  if ($(window).width() < 768) {
    $("#desktop").hide();
    // and disable
    $("#desktop").attr("disabled", true);
  }

  let navbarbuka = false;

  $(".navbar-toggler").click(function () {
    if (navbarbuka == false) {
      $("#desktop").show();
      navbarbuka = true;
    } else {
      $("#desktop").hide();
      navbarbuka = false;
    }
    if (darkmode == true && $("#desktop").attr("disabled", false)) {
      if (darkmode == true) {
        $("nav").css("background-color", "#2ed3c6");
        $("footer").css("background-color", "#2ed3c6");

        $("body").css("color", "#000");
        $("body").css("background-color", "#f8f5e6");
        $(".slider").css("left", "calc(0px)");

        darkmode = false;
      } else if (!darkmode) {
        $("nav").css("background-color", "#cba478");
        $("footer").css("background-color", "#cba478");
        $("body").css("color", "#fff");
        $("body").css("background-color", "#171d4b");
        $(".slider").css("left", "calc(21px)");

        darkmode = true;
      }
    }
  });

  //   if screen is phone then delete text start from education
  if ($(window).width() < 768) {
    $("#education").removeClass("text-end ms-5");
    $("#license").removeClass("text-start me-5");
  }
  //   if screen is desktop then delete text start from education
  if ($(window).width() > 768) {
    $("#education").addClass("text-end ms-5");
    $("#license").addClass("text-start me-5");
  }
});

function popUp() {}
