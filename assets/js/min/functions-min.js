$(document).ready(function(){function o(){window.location="/"}var t=new WOW({boxClass:"wow",animateClass:"animated",offset:100,mobile:!0,live:!0});t.init(),"ontouchstart"in window||$('[data-tooltip="tooltip"]').tooltip(),navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&$("#dashlightsModal").removeClass("fade"),$(".light_icons").hide(),$(".carTog").click(function(){$(".light_info, .light_icons").hide(),$("."+$(this).data("id")).toggle()}),$(".bmw_light").click(function(){$("#miniSelected").hide(),$("#bmwSelected").show()}),$(".mini_light").click(function(){$("#bmwSelected").hide(),$("#miniSelected").show()}),$(".light_info").hide(),$(".tog").click(function(){$(".light_info").hide(),$("."+$(this).data("id")).toggle()}),$('[data-dismiss="modal"]').click(function(){$(".light_info, .light_icons, #bmwSelected, #miniSelected").hide()});var i=$(window).height(),e=i-$("nav").outerHeight(!0),n="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",a="animated jello";if($(window).scroll(function(){var o=$(".nav").height(),t=$(this).scrollTop(),i=$("#headerContent");$(window).scrollTop()>o?$("nav").addClass("goToTop"):$("nav").removeClass("goToTop"),t>e?$("nav").slideDown():$("nav").slideUp(),navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")||i.css({transform:"translate(0px, "+t/9+"%)"})}),$("#toTop").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var o=$(this.hash);if(o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length)return $("html,body").animate({scrollTop:o.offset().top},1200),!1}}),$("#toTop").hover(function(){$("#logo").addClass(a).one(n,function(){$(this).removeClass(a)})}),$("#quote-carousel").carousel({pause:!1,interval:15e3}),"#thanks"===window.location.hash){var l=document.getElementsByName("msgForm")[0];swal({title:"Sweet!",text:"A DynaSport associate will be in touch with you soon!",imageUrl:"assets/img/sweetalert/thumbs-up.jpg",allowEscapeKey:!1,confirmButtonColor:"#78c7ff"},function(t){t&&o()}),l.reset()}$("#formspree").attr("action","http://formspree.io/Dynasportpdx@outlook.com")});