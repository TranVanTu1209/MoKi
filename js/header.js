	$(document).ready(function() {
		$('.menu-mobile').click(function(event) {
			/* Act on the event */
			$('#top-menu-nav').toggleClass('open');
			document.querySelector(".menu-mobile").classList.toggle("open");
		});
	});

	//sticky
$(document).ready(function() {
   $(window).scroll(function(event) {
      var pos_body = $('html,body').scrollTop();
      if(pos_body>300){
          $('.menu').addClass('sticky');
      }
      else {
         $('.menu').removeClass('sticky');
      }
     
   });
 
});