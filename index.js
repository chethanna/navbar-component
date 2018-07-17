$(document).ready( () => {
	
	//to hide or display menu based on toggler image click
	$("#image-size").click( () => { 
		$("#item-container").slideToggle("fast");
	}); 
	
	//to change font-color of menu items on hover
	$(".menuBar-items").hover( function () {
		$(this).addClass("highlight-text");
		}
		,function () {
			$(this).removeClass("highlight-text");
		} );
	
	//to make a menu item active when it is clicked
	$(".menuBar-items").click( function ()  {
		$("#item-container").children().removeClass("active");
		$(this).addClass("active");		
	});
});