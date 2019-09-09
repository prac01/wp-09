/*hamburger */
$(document).ready(function(){
    $('.icon').click(function(){
        $('.icon').toggleClass('active');
    })
})


/////nav/////////////////////////////////////
$(document).ready(function(){
    $(".wrapper header .navigation .icon").click(function() {
        $(".wrapper header .navigation .navbar").slideToggle(300, function(){	
            $(this).toggleClass('active').css('display', '');
    });	
});
});

//scroll nav
$(window).on('load scroll resize orientationchange', function(){
    if($(window).scrollTop()){
        $("header").css("background","#fff");      
        $("header").css("opacity","0.96");
        $("header").css("box-shadow", "0px 0px 6px #666");
        $("header .navigation .navbar ul li a").css("color", "#284b9a");
       // $(".navbar").css("background","#fff"); 
        $(".logo-1").css("display", "none");
        $(".logo-2").css("display", "block");
    

    } else {
        
        $("header").css("background-color","transparent");
        $("header").css("opacity","1");
        $("header").css("box-shadow", "0px 0px 6px transparent");
        $("header").css("transition", "all .3s ease");
        $("header .navigation .navbar ul li a").css("color", "#fff");
       // $(".navbar").css("background","none"); 
        $(".logo-1").css("display", "block");
         $(".logo-2").css("display", "none");
        
    }
})

//////***offset anchor w/ scroll effect *****/

/**
 * Check a href for an anchor. If exists, and in document, scroll to it.
 * If href argument ommited, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */
function scroll_if_anchor(href) {
  href = typeof(href) == "string" ? href : $(this).attr("href");
  
  // You could easily calculate this dynamically if you prefer
  var fromTop = 90;
  
  // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
  // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
  if(href.indexOf("#") == 0) {
      var $target = $(href);
      
      // Older browser without pushState might flicker here, as they momentarily
      // jump to the wrong position (IE < 10)
      if($target.length) {
          $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
          if(history && "pushState" in history) {
              history.pushState({}, document.title, window.location.pathname + href);
              return false;
          }
      }
  }
}    

// When our page loads, check to see if it contains and anchor
scroll_if_anchor(window.location.hash);

// Intercept all anchor clicks
$("body").on("click", "a", scroll_if_anchor);