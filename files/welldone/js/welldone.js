$(document).ready(function() { 

  $(".welldoneitem").mousemove( function(e) {
   var mouseX = e.clientX+7; 
   var mouseY = e.clientY-15;
   $(this).find('article.description').css('top',mouseY).css('left',mouseX);
  });  
  
  $('.welldoneitem').hover(
    function() {
      $(this).find('article.description').css("visibility","visible");
      var desch = $(this).find('article.description p').height();
      $(this).find('article.description').css("height",desch+120);
    },
    function() { 
      $('article.description').css("visibility","hidden");
    });
});
  
/*
  // scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
  $('nav a').click(function(event){    
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
  });
  
*/


// masonry stuff to fit everything together...
$(function(){
  var $container = $('#masonry');
  
  $container.imagesLoaded( function(){
    $container.masonry({
      // options
      itemSelector : 'li'
    });
  });

});
