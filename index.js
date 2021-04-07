$("h1").css("color", "yellow");

$("h1").text("GoodBye");

$("h1").addClass("big-title");

$("h1").click(changeColor);

function changeColor() {
  $("h1").css("color", "blue");
}

// $(document).keydown(function () {
//   $("button").text("hello");
// });

$(document).keydown(changeTitle);

function changeTitle(event) {
  $("h1").text(event.key);
}

$("h1").on("mouseover", function () {
  $("h1").css("font-family", "cursive");
});

// $("h1").remove();
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

// $("button").click(function () {
//   $("h1").hide();
// });

// $("button").click(function () {
//   $("h1").toggle();
// });

// $("button").click(function () {
//   $("h1").fadeOut();
// });

// $("button").click(function () {
//   $("h1").fadeIn();
// });

$("button").click(function () {
  $("h1").fadeToggle();
});
