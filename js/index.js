$(".menu a").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

	$("ul li a").click(function () {
	    elementClick = $(this).attr("href");
	    destination = $(elementClick).offset().top;
	    $("body,html").animate({scrollTop: destination }, 800);
	  });

	$("a").click(function () {
	    elementClick = $(this).attr("href");
	    destination = $(elementClick).offset().top;
	    $("body,html").animate({scrollTop: destination }, 1500);
	  });


$(window).scroll(function() {
	$('.about-us,.botton').each(function(){
	          var imagePos = $(this).offset().top;
	 
	          var topOfWindow = $(window).scrollTop();
	          if (imagePos < topOfWindow+650) {
	              $(this).addClass("slideInRight");
	          }
		});
	});

    $(window).scroll(function() {
      $('.img-phone').each(function(){
          var imagePos = $(this).offset().top;
 
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("slideInLeft");
          }
      });
    });

    $(window).scroll(function() {
      $('.macro').each(function(){
          var imagePos = $(this).offset().top;
 
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+340) {
              $(this).addClass("slideInLeft");
         }
      });
    });
