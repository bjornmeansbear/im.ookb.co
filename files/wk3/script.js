  $(".red").click(function () {
    $("body").removeClass("green white yellow blue").addClass("red");
    });    

  $(".green").click(function () {
    $("body").removeClass("red white yellow blue").addClass("green");
    });    

  $(".blue").click(function () {
    $("body").removeClass("red green white yellow").addClass("blue");
    });    

  $(".yellow").click(function () {
    $("body").removeClass("red white blue green").addClass("yellow");
    });
    
  $(".white").click(function () {
    $("body").removeClass("red white blue green yellow");
    });