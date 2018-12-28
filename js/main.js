!function (window, $, undefined) {
		'use strict';
		var SOLOFY = window.SOLOFY || function () {}, 
		$win = $( window );
		
SOLOFY.prototype.Navigation = function () {
  $('body').addClass('js');
    $('#menu').find('li').each(function() {
        var item = $(this);
        if(item.find('ul').length) {
            item.addClass('has-subnav');
        }
    });
  var $menu = $('#menu'),
      $menulink = $('.menu-link'),
      $menuTrigger = $('.has-subnav > a');

  $menulink.on('click',function (e) {
      e.preventDefault();
      $menulink.toggleClass('active');
      $menu.toggleClass('active');
  });

  $menuTrigger.on('click', function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.toggleClass('active').next('ul').toggleClass('active');
  });
  var sf, body;
  var breakpoint = 600;

  body = $('body');
  sf = $('ul.sf-menu');
  if (body.width() >= breakpoint) {
      // enable superfish when the page first loads if we're on desktop
      sf.superfish();
  }
  $(window).resize(function () {
      if (body.width() >= breakpoint && !sf.hasClass('sf-js-enabled')) {
          // you only want SuperFish to be re-enabled once (sf.hasClass)
          sf.superfish('init');
      } else if (body.width() < breakpoint) {
          // smaller screen, disable SuperFish
          sf.superfish('destroy');
      }
  });
  
};

SOLOFY.prototype.revReveal = function() {	

       function setREVStartSize(e){
				try{ var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;					
					if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})					
				}catch(d){console.log("Failure at Presize of Slider:"+d)}
			};
		
		
		var revapi58,
			tpj;	
		(function() {			
			if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();	
			function onLoad() {				
				if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
			if(tpj("#welcome").revolution == undefined){
				//revslider_showDoubleJqueryError("#welcome");
			}else{
				revapi58 = tpj("#welcome").show().revolution({
					sliderType:"standard",
					jsFileLocation:"revolution/js/",
					sliderLayout:"fullscreen",
					minHeight: '800',
					dottedOverlay:"none",
					delay:9000,
					particles: {startSlide: "first", endSlide: "last", zIndex: "1",
						particles: {
							number: {value: 25}, color: {value: "#ffffff"},
							shape: {
								type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
								image: {src: ""}
							},
							opacity: {value: 1, random: true, min: 0.25, anim: {enable: true, speed: 3, opacity_min: 0, sync: false}},
							size: {value: 2, random: true, min: 0.5, anim: {enable: true, speed: 5, size_min: 1, sync: false}},
							line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
							move: {enable: true, speed: 2, direction: "none", random: true, min_speed: 1, straight: false, out_mode: "out"}},
						interactivity: {
							events: {onhover: {enable: false, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
							modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 40, opacity: 0.5}, repulse: {distance: 200}}
						}
					},
					revealer: {
						direction: "open_horizontal",
						color: "#015f6b",
						duration: "1500",
						delay: "0",
						easing: "Power2.easeInOut",
						overlay_enabled: true,
						overlay_color: "#000000",
						overlay_duration: "1500",
						overlay_delay: "0",
						overlay_easing: "Power2.easeInOut",
						spinner: "1",
						spinnerColor: "#00B4CC",
					},
					navigation: {
						keyboardNavigation:"off",
						keyboard_direction: "horizontal",
						mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
						onHoverStop:"off",
						arrows: {
							style:"uranus",
							enable:true,
							hide_onmobile:false,
							hide_onleave:false,
							tmp:'',
							left: {
								h_align:"left",
								v_align:"center",
								h_offset:10,
								v_offset:50
							},
							right: {
								h_align:"right",
								v_align:"center",
								h_offset:10,
								v_offset:50
							}
						}
					},
					viewPort: {
						enable:true,
						outof:"wait",
						visible_area:"80%",
						presize:true
					},
					responsiveLevels:[1240,1024,778,480],
					visibilityLevels:[1240,1024,778,480],
					gridwidth:[1240,1024,778,480],
					gridheight:[868,768,960,720],
					lazyType:"single",
					parallax: {
						type:"scroll",
						origo:"slidercenter",
						speed:400,
						speedbg:0,
						speedls:0,
						levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
					},
					shadow:0,
					spinner:"spinner2",
					stopLoop:"on",
					stopAfterLoops:0,
					stopAtSlide:1,
					shuffle:"off",
					autoHeight:"off",
					fullScreenAutoWidth:"off",
					fullScreenAlignForce:"off",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",
					disableProgressBar:"on",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						nextSlideOnWindowFocus:"off",
						disableFocusListener:false,
					}
				});
				
			}
			
			//RsParticlesAddOn(revapi58);
			RsRevealerAddOn(tpj, revapi58, "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-1 mt50'><div class='rsaddon-revealer-1'><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><\/div><\/div \/>");
		
		 }; /* END OF ON LOAD FUNCTION */
		}()); /* END OF WRAPPING FUNCTION */
	   
};
 
SOLOFY.prototype.revVideo = function() {	
 
 		var tpj=jQuery;
			
			var revapi1040;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_1040_1").revolution == undefined){
					//revslider_showDoubleJqueryError("#rev_slider_1040_1");
				}else{
					revapi1040 = tpj("#rev_slider_1040_1").show().revolution({
						sliderType:"standard",
jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						minHeight: '700',
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							onHoverStop:"off",
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[600,500,400,270],
						lazyType:"none",
						parallax: {
							type:"scroll",
							origo:"slidercenter",
							speed:2000,
							levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
							type:"scroll",
						},
						shadow:0,
						spinner:"off",
						stopLoop:"on",
						stopAfterLoops:0,
						stopAtSlide:1,
						shuffle:"off",
						autoHeight:"off",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});	/*ready*/
			
};
 
 SOLOFY.prototype.rev404 = function() {	
 
	var tpj=jQuery;
			var revapi16;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_16_1").revolution == undefined){
					//revslider_showDoubleJqueryError("#rev_slider_16_1");
				}else{
					revapi16 = tpj("#rev_slider_16_1").show().revolution({
						sliderType:"hero",
						jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:0,
						particles: {startSlide: "first", endSlide: "last", zIndex: "8",
							particles: {
								number: {value: 200}, color: {value: "#ffffff"},
								shape: {
									type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
									image: {src: ""}
								},
								opacity: {value: 1, random: true, min: 0.5, anim: {enable: true, speed: 1, opacity_min: 0, sync: false}},
								size: {value: 2, random: true, min: 0.5, anim: {enable: true, speed: 10, size_min: 1, sync: false}},
								line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
								move: {enable: true, speed: 1, direction: "none", random: false, min_speed: 1, straight: true, out_mode: "out"}},
								interactivity: {
								events: {onhover: {enable: true, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
								modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 0, opacity: 1}, repulse: {distance: 200}}
							}
						},
						navigation: {
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[868,768,960,720],
						lazyType:"none",
						parallax: {
							type:"mouse",
							origo:"slidercenter",
							speed:2000,
							levels:[2,4,6,4,5,30,35,40,45,46,47,48,49,50,51,55],
						},
						shadow:0,
						spinner:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "60px",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							disableFocusListener:false,
						}
					});
				}

                //RsParticlesAddOn(revapi16);
			});	/*ready*/
};

SOLOFY.prototype.twitterTimeline = function () {
    if( $.fn.tweet ) {
        $( '.twitter-feed' ).each(function() {

            $( this ).tweet({
                modpath: 'php/twitter/index.php',
                username: 'wordpress',
                template: '{text}{time}',
                count: 4,
                loading_text: 'Loading Tweets...'
            });

        });
    }
    if(jQuery().flexslider) {
        var $elem = $('.twitter-feed');
        if( !$elem.length ) return;
        $elem.flexslider({
            selector: ".owl-carousel > li",
            animation: "slide",
            controlNav: false,
            slideshow: false,
            prevText: "",
            nextText: ""
        });
    }
};

SOLOFY.prototype.FlexSlider = function() {
    if(jQuery().flexslider) {
        var $elem = $('#blog-slider');
        if( !$elem.length ) return;
        $win.load(function(){
            $elem.flexslider({
                animation: "slide",
                controlNav: false,
                prevText: "",
                nextText: "",
                start: function(slider){

                }
            });
        });
    }
};

SOLOFY.prototype.FlexSlider2 = function() {
    if(jQuery().flexslider) {
        
		var $elem = $('#testi-slider');
        if( !$elem.length ) return;
        $win.load(function(){
            $elem.flexslider({
                animation: "fade",
                controlNav: true,
				directionNav: false,
                prevText: "",
                nextText: "",
                start: function(slider){

                }
            });
        });
		
    }
    
};

SOLOFY.prototype.FlexSlider3 = function() {
    if(jQuery().flexslider) {
        
		var $elem = $('#testi-slider2');
        if( !$elem.length ) return;
        $win.load(function(){
            $elem.flexslider({
                animation: "slide",
                controlNav: true,
				directionNav: false,
                prevText: "",
                nextText: "",
                start: function(slider){

                }
            });
        });
		
    }
    
};

SOLOFY.prototype.bxSlider = function() {
    if(jQuery().bxSlider) {
        var productSlider = $('#product-slider');
        productSlider.bxSlider({
            pagerCustom: '#product-pager',
            controls : false
        });
    }
};

SOLOFY.prototype.IsoTope = function() {
    var isotopeContainer = $('.isotopeContainer');
    if( !isotopeContainer.length || !jQuery().isotope ) return;
    $win.load(function(){
        isotopeContainer.isotope({
            itemSelector: '.isotopeSelector'
        });
        $('.isotopeFilters').on( 'click', 'a', function(e) {
            $('.isotopeFilters').find('.active').removeClass('active');
            $(this).parent().addClass('active');
            var filterValue = $(this).attr('data-filter');
            isotopeContainer.isotope({ filter: filterValue });
            e.preventDefault();
        });
    });
};

SOLOFY.prototype.initAccordion = function() {
    var changeColours = function($el) {
        $el.find('.panel-heading').find('a').closest('.panel-heading').addClass('green').removeClass('grey');
        $el.find('.panel-heading').find('a.collapsed').closest('.panel-heading').addClass('grey').removeClass('green');
    };
    var $greenContainer = $('.toggles.green');
    changeColours($greenContainer);
    $greenContainer.on('hide.bs.collapse', function (e) {
        changeColours($(e.currentTarget));
    }).on('show.bs.collapse', function (e) {
            changeColours($(e.currentTarget));
        });

    var hideBorder = function($el) {
        $el.find('.panel-heading').find('a').closest('.panel-heading').addClass('no-border');
        $el.find('.panel-heading').find('a.collapsed').closest('.panel-heading').removeClass('no-border');
    };
    var $faqContainer = $('.toggles.faq');
    hideBorder($faqContainer);
    $faqContainer.on('hide.bs.collapse', function (e) {
        hideBorder($(e.currentTarget));
    }).on('show.bs.collapse', function (e) {
            hideBorder($(e.currentTarget));
        });

};

SOLOFY.prototype.initTooltips = function() {
	if(jQuery().tooltip) {
        $('.sol-tooltip').tooltip();
    }
};

SOLOFY.prototype.headerInit = function() {
    var $header = $('.main-navigation');
	var $searchbar = $('.search-big');
	
    var headerH = $header.outerHeight();
    $('body').css({
        'padding-top' : headerH + "px"
    });
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 150) {
            $header.addClass('small-header');
			$searchbar.addClass('shrink');
        } else {
            $header.removeClass('small-header');
			$searchbar.removeClass('shrink');
        }
    });
    $(window).resize(function() {
        var $header = $('.main-navigation');
        var headerH = $header.outerHeight();
        $('body').css({
            'padding-top' : headerH + "px"
        });
    });
	$(window).ready(function() {
			var searchBox = $("div.search-big"),
			searchButton = $("a.search-button");
			searchButton.on("click", function() {
			searchBox.fadeToggle(200).children("input").focus();
			searchButton.toggleClass("is-open");
		});
	});
};

SOLOFY.prototype.initCartNumber = function() {
    var container = $('.cart-wrap');
    container.on('click', '.add', function() {
        var number = parseInt(container.find('input').val());
        if(number < 10) {
            container.find('.number').text(number+1);
            container.find('input').val(number+1);
        }
    });
    container.on('click', '.decrease', function() {
        var number = parseInt(container.find('input').val());
        if(number > 1) {
            container.find('.number').text(number-1);
            container.find('input').val(number-1);
        }
    });
};

SOLOFY.prototype.fancyboxInit = function() {
    if(jQuery().fancybox) {
        $('.fancybox-init').fancybox();
    }
};
	
SOLOFY.prototype.typeScript = function() {	
	
	$(function(){

        $("#typed").typed({
            strings: ["<strong>designers</strong>.", "<strong>creators</strong>.", "<strong>developers</strong>.", "<strong>writers</strong>.", "<strong>dreamers</strong>.", "<strong>Solofy</strong>!^2000"],
            typeSpeed: 80,
            backDelay: 1100,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });
		
		$("#typed-photographer").typed({
            strings: ["capture <strong>moments</strong>.", "shoot <strong>fashion</strong>.", "save <strong>memories</strong>.", "create <strong>artwork</strong>.^2000"],
            typeSpeed: 100,
            backDelay: 1800,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });
		
		$("#typed-contact").typed({
            strings: ["Drop a Line.", "Say Hello!", "Have a Question?", "Start a Project.", "Spread the Love!"],
            typeSpeed: 80,
            backDelay: 1100,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });
		
		$("#typed-designer").typed({
            strings: ["Hello.", "Olá.", "¡Hola!", "Bonjour.", "Ciao." , "今日は." , "Goddag." , "Merhaba."],
            typeSpeed: 150,
            backDelay: 1800,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

		
		var $typedReset = $('.reset');
		
		$typedReset.on('click',function (e) {
			  $("#typed").typed('reset');
			  $("#typed-photographer").typed('reset');
			  $("#typed-contact").typed('reset');
		});

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }
	
};

SOLOFY.prototype.fitVid = function() {	
	if(jQuery().fitVids) {
        $(".container").fitVids();
    }
};
 
SOLOFY.prototype.count = function() {	
	if(jQuery().counterUp) {
		$('span.counter').counterUp({
			delay: 10,
			time: 1000
		});
    }
};
 
SOLOFY.prototype.flipBox = function() {	
	$("div .hover").on({
    	mouseenter:function(){  
			$(this).addClass('flip');
    },
    	mouseleave:function(){ 
			$(this).removeClass('flip');
    }
  });
};	
 
SOLOFY.prototype.Matchheight = function () {
	if(jQuery().matchHeight) {
		$('.matchheight').matchHeight();
    }
};  
	  
SOLOFY.prototype.insta = function () {
	$('.insta').simpleInstagramFancybox({
		captionOn : false,
		mode : 'user',
		accessToken : 'ENTER-YOUR-INFO-HERE', // This a mandatory setting that allows you to specify a user token. Get yours here: https://auth0.com/docs/connections/social/instagram
		userID : 'ENTER-YOUR-INFO-HERE', // Set your instagram user ID, get yours here: https://codeofaninja.com/tools/find-instagram-user-id
		numberOfImages: 6,
		appearEffect : 'motion' 
	});
};
 
var SolofyTheme = new SOLOFY();

SolofyTheme.Navigation();
SolofyTheme.typeScript();
SolofyTheme.Matchheight();
SolofyTheme.flipBox();
SolofyTheme.revReveal();
SolofyTheme.revVideo();
SolofyTheme.rev404();
SolofyTheme.twitterTimeline();
SolofyTheme.insta();
SolofyTheme.bxSlider();
SolofyTheme.FlexSlider();
SolofyTheme.FlexSlider2();
SolofyTheme.FlexSlider3();
SolofyTheme.IsoTope();
SolofyTheme.initAccordion();
SolofyTheme.initTooltips();
SolofyTheme.initCartNumber();
SolofyTheme.headerInit();
SolofyTheme.fancyboxInit();
SolofyTheme.fitVid();
SolofyTheme.count();


} (window, window.jQuery, undefined);