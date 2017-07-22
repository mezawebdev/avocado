$(document).ready(function() {

	/* Global Variables */
	var navbarButton = $(".navbar-mobile li:nth-child(2) button");
	var navbarExpanded = $(".navbar-mobile li:nth-child(1)");

	/* Navbar Handlers */
	var clicked = false;
	navbarButton.on("click", function() {
		if (clicked === false) {
			clicked = true;
			navbarExpanded.css("display", "block");
			navbarExpanded.animate({
				height: "+=94px"
			}, 500);
		}
		else {
			clicked = false;
			navbarExpanded.animate({
				height: "-=94px"
			}, 500, function() {
				navbarExpanded.css("display", "none");
			});
		}
	});
	
});