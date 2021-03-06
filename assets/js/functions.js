$(document).ready(function(){

// WOW.js working in conjunction with Animate.css:
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 100,
		mobile: true,
		live: true
	});
	wow.init();

// Tooltip:
	if(!('ontouchstart' in window)){
		$('[data-tooltip="tooltip"]').tooltip();
	}

// Modal:
	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	    $('#dashlightsModal').removeClass('fade');
	}

	// Car Make
	$('.light_icons').hide();
	$('.carTog').click(function(){
		$('.light_info, .light_icons').hide();
		$('.' + $(this).data('id')).toggle();
	});

	// Make Selected
	$('.bmw_light').click(function(){
		$('#miniSelected').hide();
		$('#bmwSelected').show();
	});
	$('.mini_light').click(function(){
		$('#bmwSelected').hide();
		$('#miniSelected').show();
	});

	// Make lights
	$('.light_info').hide();
	$('.tog').click(function(){
		$('.light_info').hide();
		$('.' + $(this).data('id')).toggle();
	});

	// Clear when modal is closed
	$('[data-dismiss="modal"]').click(function(){
		$('.light_info, .light_icons, #bmwSelected, #miniSelected').hide();
	});

// For nav bar:
	var winHeight = $(window).height(),
		showNav = winHeight - $('nav').outerHeight(true),
		animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		jello = 'animated jello';

	$(window).scroll(function(){
		var navHeight = $('.nav').height(),
				scrollVal = $(this).scrollTop(),
				$headerContent = $('#headerContent');

		($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');

		if(scrollVal > showNav){
			$('nav').slideDown();
		} else {
			$('nav').slideUp();
		}

		if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
			// do nothing
		} else {
			$headerContent.css({
	      'transform' : 'translate(0px, '+ scrollVal /9 +'%)'
	    });
		}

	});

	$('#toTop').click(function() {
	    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1200);
	        return false;
	      }
	    }
	  });

	$('#toTop').hover(function(){
		$('#logo').addClass(jello).one(animationEnd, function(){
			$(this).removeClass(jello);
		});
	});

// Shop Reviews Carousel:
	$('#quote-carousel').carousel({
		pause: false,
		interval: 15000
	});



	if (window.location.hash === "#thanks") {
		function redirect(){
			window.location="/";
		}
		var frm = document.getElementsByName('msgForm')[0];
		swal({
			title: "Sweet!",
			text: "A DynaSport associate will be in touch with you soon!",
			imageUrl: "assets/img/sweetalert/thumbs-up.jpg",
			allowEscapeKey: false,
			confirmButtonColor: "#78c7ff"
		},
			function(isConfirm){
				if(isConfirm){
					confirmButton: redirect();
				}
			}
		);
		frm.reset();
  }

// Formspree anit-spam
	$('#formspree').attr('action', 'http://formspree.io/' + 'Dynasportpdx' + '@' + 'outlook' + '.' + 'com');

});
