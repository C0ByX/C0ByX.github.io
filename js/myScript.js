"use strict"

$(document).ready(function(){
	$('a[href^="#"]').click(function(){
		let valHref = $(this).attr("href");
		$('html, body').animate({scrollTop: $(valHref).offset().top - 40 + "px"})
	});
	$(window).scroll(() => {
		let scrollDistance = $(window).scrollTop();
		
		$(".section").each((i, el) => {
			if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
				$("nav a").each((i, el) => {
					if($(el).hasClass("activeA")){
						$(el).removeClass("activeA");
					}	
				});
				$('nav li:eq('+ i +')').find('a').addClass('activeA');
			}
		});
	});
	
	function animNum(minChis, maxChis, elem, durAnim){
			
			$({numberValue: minChis}).animate({numberValue: maxChis}, {
		
			duration: durAnim,
			easing: "swing",
			
			step: function(val) {
			
				$(elem).html(Math.ceil(val));
				
			}
			});	
		}
	function animStat(){
			animNum(0, 120, '#kli', 2500);
			animNum(0, 4600, '#scha', 2500);
			animNum(0, 340, '#tijo', 2500);
			animNum(0, 23, '#awta', 2500);
		}
	
	$('#raschetBut').click(function rasch(){
		let type = $('select[name=tip]').val(),
            dezi = $('select[name=diz]').val(),
            adap = $('select[name=adapt]').val(),
			stoimInfo =[ [1000, 2000, 3000, 4000,1000, 1375, 1950, 2300,2000, 1000, 1000],
			             [3, 5, 14, 4, 1, 3, 4, 2, 1, 0, 0]];
						 
		let	stoim = stoimInfo[0][type] + stoimInfo[0][dezi] + stoimInfo[0][adap],
			srok = stoimInfo[1][type] + stoimInfo[1][dezi] + stoimInfo[1][adap];

		animNum(0, srok, '#sr', 1000);
		animNum(0, stoim, '#otv1', 1000);
	});
	let oneAni = 0;
	function onEntry (entry){
		entry.forEach(change => {
			if(change.isIntersecting && oneAni == 0){
				animStat();
				oneAni++;
			}
		})
	}
	function otlAnim(){
		let options = {threshold: [0.5]};
		let observer = new IntersectionObserver(onEntry, options);
		let elements = $('.element-animation');
		elements.each((i, el) => {
			observer.observe(el);
		});
	}
	function loadPic(){
		let options = {threshold: [0.7]};
		let observer = new IntersectionObserver(onPic, options);
		let elements = $('.load-pic');
		elements.each((i, el) => {
			observer.observe(el);
		});
	}
	function onPic (entry){
		let i = 1;
		entry.forEach(change => {
			if(change.isIntersecting && oneAni == 0){
				while(i != 5){
					let a = $('.pic'+i).attr('data-src'+i);
					$('.pic'+i).attr('src', a);
					i++;
				}
				}
				});
			}
	loadPic();
	otlAnim();
	$('.image-link').magnificPopup({type:'image'});
	$('.karots').slick({
		infinite: true,
        dots: true,
		slidesToShow: 1,
	  });
	  $('.wintime').hide(0).css('opacity','1');
	  setTimeout(function(){
		  $('.wintime').fadeIn(500, 'linear');
	  },5000);
	  $('#closeWin').click(function(){
		  $('.wintime').fadeOut('normal','linear');
	  })
});

