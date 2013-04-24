/* This might be helpful: http://api.jquery.com/clone/ ???*/
/* $(".a").clone().appendTo(".a"); */

$(".letterform p").click(function () {
    $(this).clone().appendTo().parent().parent();
  });