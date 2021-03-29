$(window).on('load',function(){"use strict";$('#status').delay(50).fadeOut();$('#preloader').delay(550).fadeOut('slow');$('body').delay(550).css({'overflow':'visible'});});(function($){"use strict";$("#NewsletterForm").validator().on("submit",function(event){if(event.isDefaultPrevented()){formNError();submitNMSG(false,"Check if the field is filled in!");}else{event.preventDefault();submitNForm();}});function submitNForm(){var nemail=$("#nemail").val();$.ajax({type:"POST",url:"php/newsletterform-process.php",data:"email="+nemail,success:function(text){if(text=="success"){formNSuccess();}else{formNError();submitNMSG(false,text);}}});}
    function formNSuccess(){$("#NewsletterForm")[0].reset();submitNMSG(true,"Email Submitted!")}
    function formNError(){$("#NewsletterForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass();});}
    function submitNMSG(valid,msg){if(valid){var msgClasses="h3 text-center tada animated text-success";}else{var msgClasses="h3 text-center text-danger";}
        $("#nmsgSubmit").removeClass().addClass(msgClasses).text(msg);}
    $("#ContactForm").validator().on("submit",function(event){if(event.isDefaultPrevented()){formCError();submitCMSG(false,"Check if all fields are filled in!");}else{event.preventDefault();submitCForm();}});function submitCForm(){var cfirstname=$("#cfirstname").val();var clastname=$("#clastname").val();var cemail=$("#cemail").val();var cmessage=$("#cmessage").val();$.ajax({type:"POST",url:"php/contactform-process.php",data:"firstname="+cfirstname+"&lastname="+clastname+"&email="+cemail+"&message="+cmessage,success:function(text){if(text=="success"){formCSuccess();}else{formCError();submitCMSG(false,text);}}});}
    function formCSuccess(){$("#ContactForm")[0].reset();submitCMSG(true,"Message Submitted!")}
    function formCError(){$("#ContactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass();});}
    function submitCMSG(valid,msg){if(valid){var msgClasses="h3 text-center tada animated text-success";}else{var msgClasses="h3 text-center text-danger";}
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);}
    setCarouselHeight('#carousel-example-generic');function setCarouselHeight(id){var slideHeight=[];$(id+' .item').each(function(){slideHeight.push($(this).height());});var max=Math.max.apply(null,slideHeight);$(id+' .carousel-content').each(function(){$(this).css('height',max+'px');});}
    $('body').prepend('<a href="#top" class="back-to-top scrolling">Back to Top</a>');var amountScrolled=700;$(window).scroll(function(){if($(window).scrollTop()>amountScrolled){$('a.back-to-top').fadeIn('500');}else{$('a.back-to-top').fadeOut('500');}});$('a.scrolling').on('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:($($anchor.attr('href')).offset().top-50)},1250,'easeInOutExpo');event.preventDefault();});$('body').scrollspy({target:'.navbar-fixed-top',offset:51});$('.navbar-collapse ul li a').on('click',function(){$('.navbar-toggle:visible').click();});$('#mainNav').affix({offset:{top:100}})
    var myScreenShotsSwiper=new Swiper('.swiper-container',{pagination:'.swiper-pagination',paginationClickable:true,slidesPerView:5,spaceBetween:20,loop:true,direction:'horizontal',effect:"slide",speed:1000,autoplay:3000,autoplayDisableOnInteraction:true,breakpoints:{1024:{slidesPerView:4,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},640:{slidesPerView:2,spaceBetween:0},480:{slidesPerView:1,spaceBetween:0}}});$('.popup-link').magnificPopup({removalDelay:300,type:'image',callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace('mfp-figure','mfp-figure animated '+this.st.el.attr('data-effect'));}},gallery:{enabled:true}});$('.popup-with-move-anim').magnificPopup({type:'inline',fixedContentPos:false,fixedBgPos:true,overflowY:'auto',closeBtnInside:true,preloader:false,midClick:true,removalDelay:300,mainClass:'my-mfp-slide-bottom'});$('#toggle-switcher').click(function(){if($(this).hasClass('opened')){$(this).removeClass('opened');$('#style-switcher').animate({'right':'-200px'});}else{$(this).addClass('opened');$('#style-switcher').animate({'right':'-10px'});}});})(jQuery);