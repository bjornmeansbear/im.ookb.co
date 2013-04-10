/* This might be helpful: http://api.jquery.com/clone/ ???*/
/* $(".a").clone().appendTo(".a"); */

$(".letterform").click(function () {
    $(this).clone().appendTo(this);
  });