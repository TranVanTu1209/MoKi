	$(document).ready(function() {
		$('.menu-mobile').click(function(event) {
			/* Act on the event */
			$('#top-menu-nav').toggleClass('open');
			document.querySelector(".menu-mobile").classList.toggle("open");
		});
	});