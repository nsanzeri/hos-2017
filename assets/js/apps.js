(function($) {

    var Core = {
        initialize: function() {

			//Parallax Script
			this.parallax();
            
            //Video Background
            this.videoBg();
            
            //Animation Affect
            this.animationAffect();
            
            //Section Background
            this.sectionBg();
            
            //Slider
            this.slider();
            
            //Background Slider
            this.sliderBg();
            
            //Text Rotator
            this.textRotatorAffect();
            
            //Main Menu
            this.mainMenu();
            
            //Counter
            this.counter();
            
            //Portfolio Sorting
            this.portfolio();
            
            //Mail Form
            this.mailForm();
            
            //Google Map
            this.googleMap();
            
            //Blog Masonry
            this.blogMasonry();
            
            //Menu Link Scroller
            this.menuScroller();
            
            //Coming Soon Page Date Counter
            this.countDownDate();
            
            //Popup Form
            this.popupForm();
            
        },
        parallax: function(){
            var deviceAgent = navigator.userAgent.toLowerCase();
            var isTouchDevice = Modernizr.touchevents || (deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/)  || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i));
            
            if(!isTouchDevice){
            	$('.parallax-block').css({'background-attachment':'fixed'});	
            }
        },
        loader: function(){
           jQuery.waitForImages.hasImgProperties = ['background','backgroundImage'];
            jQuery('body').waitForImages(function() {
                jQuery("#page-preloader").delay(1200).fadeOut('slow');
                jQuery('body').css('overflowY','auto');
            }); 
        }, 
        videoBg: function(){
            var vidfilter = {
//            	grayscale: 100
            }
        	var windowWidth = jQuery(window).width();
    		if(windowWidth > 768){
    			$(".player").YTPlayer();
    			$('#vid').YTPApplyFilters(vidfilter);
    		}else{
        		$('.video').css({'background-image':'url(images/video-cover.jpg)'});
        	}
        },
        sectionScoller: function(){
            var sections = $('section');
            var nav = $('nav ul li');
            var nav_height = $('header').outerHeight();
            var cur_pos = $(this).scrollTop();
            sections.each(function() {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).outerHeight();
                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find('a').removeClass('current');
                    sections.removeClass('current');
                    $(this).addClass('current');
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('current');
                }
            });
        },
        stickyHeader: function(){
            var sticky = $('header'),
                scroll = $(window).scrollTop(),
         	    windowWidth = jQuery(window).width();
                
            if(windowWidth > 768){
              if (scroll > 0){
            	sticky.addClass('fixed');
            
              }else{
                sticky.removeClass('fixed');
              } 
            }
        },
        animationAffect: function(){
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $("[data-animation]").each(function() {
                    var $this = $(this);
                    $this.addClass("animation");
                    if(!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {
                        $this.appear(function() {
                            var delay = ($this.attr("data-animation-delay") ? $this.attr("data-animation-delay") : 1);
                            if(delay > 1) $this.css("animation-delay", delay + "ms");
                                $this.addClass($this.attr("data-animation"));
                                setTimeout(function() {
                                    $this.addClass("animation-visible");
                                }, delay);
                        }, {accX: 0, accY: -50});
            
                    } else {
                        $this.addClass("animation-visible");
                    }
                });  
            }
        },
        sectionBg: function(){
            $('.bg').each(function(){
               var $this = $(this);
               var bg    = $this.data('bg');
               if(bg){
                 $this.css('background-image', 'url("' + bg + '")');
               } 
            });
        },
        setHeiHeight: function(){
            var h = $(window).height();
        		$('#top').css('min-height', h); /*Mozilla fix*/
                $('.top-outer').css('height', h);
        		$('.slides li').css('min-height', h);
        },
        setMarg: function(){
            var popMargTop2 = $('header').outerHeight();
    		var popMargTop3 = $('.top-left-separator').outerHeight();
    		var windowWidth = jQuery(window).width();
    		$('.top-outer').css('padding-top', popMargTop2);
    		if(windowWidth > 768){
    			$('.top-outer').css('padding-bottom', popMargTop2 + popMargTop3);
    		}
    		else{
    			$('.top-outer').css('padding-bottom', popMargTop2);
    		}
        },
        slider: function(){
            //Slider One    
            $('.slides').each(function(){
               var $this = $(this); 
               $this.bxSlider({
                    mode: 'fade',
                    slideMargin: 0,
                    auto: true,
                    pause: 7000,
                    autoControls: false,
                    controls: true,
                    pager: false
                });
            });
            
            //Slider Two
            $('.p-slides').each(function(){
               var $this = $(this); 
               $this.bxSlider({
                   mode: 'fade',
                   slideMargin: 0,
                   auto: true,
                   pause: 7000,
                   autoControls: false,
                   controls: true,
                   pager: false
                });
            });
            
            //Slider Three
            $('.slides-rotate').each(function(){
               var $this = $(this); 
               $this.bxSlider({
                   mode: 'fade',
                   slideMargin: 0,
                   auto: false,
                   autoControls: false,
                   controls: true,
                   pager: false
                });
            });
            
            //Testimonial Slider
            $(".testi").each(function(){
                var $this = $(this);
                $this.owlCarousel({
                    navigation : false,
                    pagination : true,
                    autoPlay : 7000,
                	singleItem : true
                });
            });
            
            //Client Logo Slider
            $(".brands").each(function(){
                var $this = $(this);
                $this.owlCarousel({
                    navigation : false,
                    pagination : false,
                    autoPlay : 4000,
                	items : 5,
                    itemsDesktop : [1200,4],
                    itemsDesktopSmall : [980,3],
                    itemsTablet: [768,2],
                    itemsMobile : [480,1]
                 });
            });
        },
        sliderBg: function(){
            if( $('#valslider').length ){
                (function ($) {
                    var valSlideSpeed = 500;
                    var valTimeOut = 9000;
                	$('.slide-item').css({"position" : "absolute","top":'0', "left": '0'}).hide().eq(0).show();
                	var slideNum = 0;
                	var slideTime;
                	var slideCount = $("#valslider .slide-item").size();
                	var animSlide = function(arrow){
                		clearTimeout(slideTime);
                		$('.slide-item').eq(slideNum).fadeOut(valSlideSpeed);
                		if(arrow == "next"){
                			if(slideNum == (slideCount-1)){
                			     slideNum=0;
                            }else{
                                slideNum++
                            }
               			}else if(arrow == "prew"){
                			if(slideNum == 0){
           			          slideNum=slideCount-1;
                            }else{
                              slideNum-=1
                            }
                		}else{
                			slideNum = arrow;
               			}
                		$('.slide-item').eq(slideNum).fadeIn(valSlideSpeed, rotator);
               		}
                	var pause = false;
                	var rotator = function(){
              			if(!pause){
              			   slideTime = setTimeout(function(){animSlide('next')}, valTimeOut);
                        }
         			}
                	rotator();
                })(jQuery);
            }
            
            if( $('.slide').length ){
                var slides = $('.slide').data('slides');
                if( slides ){
            	    var imgHead = slides, i=1;
                    function bgSlider(){
            
                		if(i > (imgHead.length-1)){
                			$('.bg-slider .slide').animate({'opacity':'0'},200,function(){
                				i=1;
                				$('.bg-slider .slide').css({'background-image':'url('+imgHead[0]+')'});
                			});
                			$('.bg-slider .slide').animate({'opacity':'1'},200);
                		}else{
                			$('.bg-slider .slide').animate({'opacity':'0'},200,function(){
                				$('.bg-slider .slide').css({'background-image':'url('+imgHead[i]+')'});
                				i++;
                			});
                			$('.bg-slider .slide').animate({'opacity':'1'},200);
                		}
                		
                	}
                	var intervalbgSlider = setInterval(bgSlider,6000);   
                }   
            }
        },
        textRotatorAffect: function(){
            $(".slide1 .rotate").textrotator({
              animation: "flip", // dissolve, fade, flip, flipUp, flipCube, flipCubeUp and spin.
              speed: 2000 
            });
            $(".slide2 .rotate").textrotator({
              animation: "flipUp", 
              speed: 2000 
            });
            $(".slide3 .rotate").textrotator({
              animation: "dissolve", // dissolve, fade, flip, flipUp, flipCube, flipCubeUp and spin.
              speed: 2000 
            });
            $(".slide4 .rotate").textrotator({
              animation: "flipCube", 
              speed: 2000 
            });
            $(".slide5 .rotate").textrotator({
              animation: "flipCubeUp", // dissolve, fade, flip, flipUp, flipCube, flipCubeUp and spin.
              speed: 2000 
            });
            $(".slide6 .rotate").textrotator({
              animation: "spin", 
              speed: 2000 
            });
        },
        mainMenu: function(){
            $(".ham").click(function(){
    			$("header").toggleClass("sb-active");
    		});
            
            $(".has-sub").click(function(e) {
            	e.preventDefault();
            	$(this).next(".sub-menu").slideToggle("fast");
            });
        },
        counter: function(){
            $('.count-box').each(function () {
                $(this).appear(function() {
                    $('.counter').countTo();
                }); 
            });
        },
        portfolio: function(){
            $('.portfolio-b').isotope({
        	  columnWidth: '.grid-sizer',
        	  itemSelector: '.p-item',
        	  percentPosition: true
        	});
        
        	$('.p-filters').on( 'click', 'li', function() {
        	  var filterValue = $(this).attr('data-filter');
        	  $('.portfolio-b').isotope({ filter: filterValue });
        	});
        
            $('.p-filters').each( function( i, buttonGroup ) {
        		var $buttonGroup = $( buttonGroup );
        		$buttonGroup.on( 'click', 'li', function() {
        		  $buttonGroup.find('.is-checked').removeClass('is-checked');
        		  $( this ).addClass('is-checked');
        		});
       	    });
        },
        mailForm: function(){
            $(".btn-show").click(function(){
            	$(this).toggleClass("open");
                var $active = $(this).data('active');
                var $hidden = $(this).data('hidden');
            	$(this).next(".pop-wrap").stop('true','true').slideToggle("fast");
            });
        },
        googleMap: function(){
            if( $('.gmap').length > 0 ){
                $('.gmap').each(function(){
                   var $this = $(this);
                   var lat = $this.data('lat'); 
                   var log = $this.data('long');
                   var heading = $this.data('heading');
                   var content = $this.data('content'); 
                   var markerImg = $this.data('marker'); 
                   if( lat && log ){
                        function init() {
                        	var myStyledMap = [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#000"},{"gamma":4.97},{"lightness":-5},{"saturation":100}]}],
                        		mapOptions = {
                        		zoom: 16,
                        		center: new google.maps.LatLng(lat, log), 
                        		mapTypeId: google.maps.MapTypeId.ROADMAP,
                        		mapTypeControl: false,
                                scrollwheel: false,
                        	};
                        
                        	var mapElement = document.getElementById('map');
                        	
                        	var map = new google.maps.Map(mapElement, mapOptions);
                        		map.mapTypes.set('styledmap', new google.maps.StyledMapType(myStyledMap));
                        		map.setMapTypeId('styledmap');
                                
                                if( markerImg ){
                                    var image = markerImg;
                                    
                                }else{
                                    var image = theme_settings.assests + 'images/marker.png';
                                }
                            var marker = new google.maps.Marker({
                            	icon: image,
                        		position: new google.maps.LatLng(lat, log),
                        		map: map,
                        		title: heading
                        	});
                        	var contentString = '<div class="marker-wrap"><h4>'+ heading +'</h4>'+ content +'</div>';
                        	var infowindow = new google.maps.InfoWindow({
                        		content: contentString
                        	});
                        	google.maps.event.addListener(marker, 'click', function() {
                        		infowindow.open(map,marker);
                        	});
                        }google.maps.event.addDomListener(window, 'load', init);
                   }
                });
            }
        },
        blogMasonry: function(){
            $('.news-m').masonry({
            	itemSelector: '.news-item-m',
            	percentPosition: true
            });
        },
        menuScroller: function(){
            $(".scroll-down, .page-scroll > a, #promo a").click(function() {
            	var offsetSize = $("header").innerHeight();
            	$("html, body").animate({
            		scrollTop: $($(this).attr("href")).offset().top - offsetSize + "px"
            	}, {
            		duration: 800
            	});
            	return false;
            });
        },
        countDownDate: function(){
           if( $('.countdown').length ){
                $('.countdown').downCount({
                	date: $('.countdown').data('date')
                });    
            } 
        },
        popupForm: function(){
            $('.popup-form').magnificPopup({
            	type: 'inline',
            	preloader: false,
            	mainClass: 'mfp-fade',
            	removalDelay: 500,
            	fixedContentPos: false
            });
        }
    }
    
    /*==========================*/
    $(document).ready(function() {
        Core.initialize(); 
    });
    
    /*==========================*/
    $(window).on('load', function () {
        jQuery.waitForImages.hasImgProperties = ['background','backgroundImage'];
        jQuery('body').waitForImages(function() {
            jQuery("#page-preloader").delay(1200).fadeOut('slow');
            jQuery('body').css('overflowY','auto');
        }); 
    });
    
    /*==========================*/
    $(window).on('scroll', function() {
        Core.sectionScoller(); 
        Core.stickyHeader(); 
    });
    
    /*==========================*/
    /*Extra script function call*/
    /*==========================*/
    function fixFooter() {
		var h_1 = $('footer').outerHeight();
		var h_2 = $('header').outerHeight();
		var elem = $('.sticky-footer');
		var elem2 = $(window).height();
		var elem3 = elem2 - h_1 - h_2;
		elem.css({
			'min-height' : elem3,
			'margin-top' : h_2
		});
    }
    fixFooter();
    $(window).resize(fixFooter);
    
    /*==========================*/
    /*first screen height*/
    /*==========================*/
    function setHeiHeight() {
        var h = $(window).height();
		$('#top').css('min-height', h); /*Mozilla fix*/
        $('.top-outer').css('height', h);
		$('.slides li').css('min-height', h);
    }
    setHeiHeight();
    $(window).resize(setHeiHeight);
    
    /*==========================*/
	function setMarg() {
		var popMargTop2 = $('header').outerHeight();
		var popMargTop3 = $('.top-left-separator').outerHeight();
		var windowWidth = jQuery(window).width();
		$('.top-outer').css('padding-top', popMargTop2);
		if(windowWidth > 768){
			$('.top-outer').css('padding-bottom', popMargTop2 + popMargTop3);
		}
		else{
			$('.top-outer').css('padding-bottom', popMargTop2);
		}
    }
    setMarg();
	$(window).resize(setMarg); 
    
    /*==========================*/
   (function($) {

        $.fn.equalHeights = function() {
            var maxHeight = 0,
                $this = $(this);
    
            $this.each( function() {
                var height = $(this).innerHeight();
    
                if ( height > maxHeight ) { maxHeight = height; }
            });
    
            return $this.css('height', maxHeight);
        };
    
        $('[data-equal]').each(function(){
            var $this = $(this),
                target = $this.data('equal');
            $this.find(target).equalHeights();
        });
    
    })(jQuery);

    $('#blog .news-item').equalHeights();
    $('#content .news-item').equalHeights();
    
    $(window).resize(function(){
    	$('#blog .news-item').equalHeights();
    	$('#content .news-item').equalHeights();
    });

})(window.jQuery);