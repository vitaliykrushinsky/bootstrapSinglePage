$(function() {
    "use strict";
    
    $('.carousel').carousel({
        interval: false,
        offset: 50
    });
    
    //activate scrollspy
    $('body').scrollspy({ target: 'header .navbar-fixed-top' });
    
    //store location on the current page
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
    
});

