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

// Instagram feed:
	var userFeed = new Instafeed({
		get: 'user',
		userId: 1765479990,
		// accessToken: '1765479990.467ede5.5373d2910670417394cfeabb0a03fdcf',
		// accessToken: '1765479990.a31f4ad.d7caa3fa1dc74f20b62b853860fa8522',
		accessToken: '1765479990.1677ed0.32ba95996d764c0287919e6588c83bff',
		links: true,
		sortBy: 'random',
		resolution: 'standard_resolution',
		after: function(){
			var images = $('#instafeed').find('img');
			$(images.slice(4, images.length)).remove();
			$.each(images, function(index, image){
				var delay = (index * 75) + 'ms';
				$(image).css('-webkit-animation-delay', delay);
				$(image).css('-moz-animation-delay', delay);
				$(image).css('-ms-animation-delay', delay);
				$(image).css('-o-animation-delay', delay);
				$(image).css('animation-delay', delay);
				$(image).addClass('wow fadeInUp');
			});
		},
		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
	});
	userFeed.run();

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
	$('#formspree').attr('action', 'http://formspree.io/' + 'cs' + '@' + 'dynasportllc' + '.' + 'com');

});
