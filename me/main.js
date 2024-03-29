
(function ($) {
	"use strict";
    $(document).ready(function(){
		
		function Maheraz_Custom_JS() {
			var windowS = $(window),
				windowH = windowS.height(),
				projecthoverS = $('.portfolio-hover'),
				projecthoverH = projecthoverS.height(),
				proejectdevide = (projecthoverH / 2);
				projecthoverS.css({
				marginTop: -proejectdevide,
			});
		};
		
		if ($.fn.onePageNav) {
			$('.mainmenu .nav').onePageNav({
				currentClass: 'active',
				scrollSpeed: 1000,
				easing: 'easeInOutQuart'
			});
		}
		
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 1) {
				$('#header').addClass("sticky");
			} else {
				$('#header').removeClass("sticky");
			}
		});
			
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			closeOnClick:true,
		});
		
		$('.social-icon li a').on( "click", function(){
			$('.social').toggleClass('active');
		});
		
		
		$('.single-service').on('mouseenter', function(){
			$(' .single-service').removeClass('active');
			$(this).addClass('active');
		});
		
		$(window).on('load', function() {
			Maheraz_Custom_JS();		
			
			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '.web',
                });

					$('.portfolio-nav ul li').on('click', function() {
                    $(".portfolio-nav ul li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'easeInOutQuart',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
		});
		
		$('.count').counterUp({
			time: 1000
		});
		
		$(".testimonial-carousel").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 600,
			animateOut: 'flipOutX',
			animateIn: 'flipInX',
			margin:30,
			nav:true,
			dots:false,
			items: 1,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		});
		
		$(".clients-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 600,
			margin:30,
			nav:false,
			dots:false,
			responsive:{
				300: {items: 1,},
				480: {items: 2,},
				768: {items: 3,},
				1170: {items: 5,},
			}
		});	
		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
		
		 $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });

		$('.side-icon a').on( "click", function(){
			$('#header').toggleClass('active');
		});
		
		$(".personal-main.slide").owlCarousel({
			loop:true,
			autoplay:true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			smartSpeed: 600,
			autoplayTimeout:4000,
			mouseDrag: false,
			margin:30,
			nav:false,
			dots:true,
			items: 1,
		});	
		
		$(".portfolio-single.slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 600,
			autoplayTimeout:3500,
			mouseDrag: true,
			margin:30,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			items: 1,
		});

		$(".portfolio-related").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 600,
			autoplayTimeout:3500,
			mouseDrag: true,
			nav:false,
			dots:false,
			items: 1,
			responsive:{
				300: {items: 1,},
				480: {items: 1,},
				768: {items: 2,},
				1170: {items: 3,},
			}
		});

		$('.btn, .arrow a, .slicknav_menu li a').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 20 
			}, 1000, 'easeInOutQuart');
			event.preventDefault();
		});

		$('.player').mb_YTPlayer();
    });
	
	$(window).load(function(){
			$('.loader').fadeOut('slow', function(){
			$(this).remove();
		});
	});
})(jQuery);

document.getElementById("LinkProgramadorMovil").onclick = ()=> {
	window.open("https://play.google.com/store/apps/developer?id=LAGA", "_blank")
}
