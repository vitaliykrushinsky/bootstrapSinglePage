$(function() {
	"use strict";
	
	//variable for menu height
	var topoffset = 50;
	//amount of element carousel
	var slideqty = $('#featured .item').length;
	
	//get height of the window
	var wheight = $(window).height();
	
	//set to window tallness  
	$('.fullheight').css('height', wheight);
	
	//replace img in carousel with background image
	$('#featured .item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image' : 'url(' + imgSrc + ')' });
		$(this).remove();
	});
	
	//adjust height of .fullheight elements on window resize
	$(window).resize(function() {
		wheight = $(window).height();
		$('.fullheight').css('height', wheight);
	});
   
    //activate scrollspy through jQuery
    $('body').scrollspy({ 
		target: 'header .navbar-fixed-top',
		offset: topoffset
	});
    
    //store location on the current page and add inbody class
        var hash = $(this).find('li.active a').attr('href');
        
        if (hash !== '#featured') {
            $('header nav').addClass('inbody');
        } else {
            $('header nav').removeClass('inbody');
        }
    
    //This event fires whenever a new item becomes activated by the scrollspy. Add an .inbody class to nav when scrollspy event fires
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
        //store location on the current page
        var hash = $(this).find('li.active a').attr('href');
        
        if (hash !== '#featured') {
            $('header nav').addClass('inbody');
        } else {
            $('header nav').removeClass('inbody');
        }
    });
	
	//Use smooth scrolling when clicking on navigation
	$('.navbar a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') === 
		  this.pathname.replace(/^\//,'') && 
		  location.hostname === this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - topoffset + 2
			}, 500);
			return false;
		  } //target.length
		} //click function
  	}); //smooth scrolling
	
	//Generate carousel indicators
	for (var i = 0; i < slideqty; i++) {
		var inserttext = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
		$('#featured .carousel-indicators').append(inserttext);
	}
	
	$('.carousel').carousel({
        interval: false
    });
    
});

