window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("mainNav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 80,
        },
        500,
        "swing",
        function () {
          // window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});

//
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#mainNav a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top - 48 <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("#mainNav a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
