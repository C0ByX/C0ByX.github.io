"use strict"

$(document).ready(function(){
	$('a[href^="#"]').click(function(){
		let valHref = $(this).attr("href");
		$('html, body').animate({scrollTop: $(valHref).offset().top - 30 + "px"})
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
		let options = {threshold: [0.5]};
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
	 function popWin (){
		 let cssClosePop = {
			"top":"75%",
			"right":"17px",
			"height":"150px",
			"width":"300px"
		 }
	  setTimeout(function(){
		  $('.wintime').css('display','flex').css('opacity','1');
	  },1000);
	  $('#closeWin').click(function(){
		setTimeout(function(){
			$('.wintime').css(cssClosePop);
			$('.PopForm').css('display','none').css('opacity','0');
			$('.wintime').css('opacity','0');
		},100);
		setTimeout(function(){
			$('.wintime').css('display','none');
	  },200);
		  $('.callWin').css('opacity','1');
	  })
	  $('.callWin').click(function(){
		$('#openWin').css('display','inline-block');
		  setTimeout(function(){
			  $('.wintime').css('display','flex');
		  },100);
		  setTimeout(function(){
			$('.wintime').css('opacity','1');
		},200);
		$('.callWin').css('opacity','0');
	  })
	}
	function alertForm(){
		$('.forma').submit(function(event){
			if ($('#FIO').val() == "" || $('emailForm').val() == "" || $('MassageF').val() == ""){
				event.preventDefault();
				alert("Форма заполнена некорректно. Пожалуйста заполните все поля");
			}
		})
	}
	function cancel(){
		$('.formb').submit(function(event){
			event.preventDefault();

			$.ajax({
				type:"POST",
				url: "php/mail.php",
				data: $(this).serialize()
			}).done(function(){
				$(this).find('input').val('');
				alert('Сообщение отправлено! Вскоре вам ответят');
				$('.formb').trigger('reset');
			});
			return false;
		})
	}
	function openPop(){
		let cssOpenPop = {
			"top":"10%",
			"right":"20%",
			"height":"80%",
			"width":"60%"
		}
		$('#openWin').click(function(){
			$('.wintime').css(cssOpenPop);
			setTimeout(function(){
				$('.PopForm').css('display','flex');
			},100);
			setTimeout(function(){
				$('.PopForm').css('opacity','0.8')
			},200);
			$('#openWin').css('display','none');
		})
	}
	function cancelPop(){
		$('.formPop').submit(function(event){
			event.preventDefault();

			$.ajax({
				type:"POST",
				url: "php/mailPop.php",
				data: $(this).serialize()
			}).done(function(){
				$(this).find('input').val('');
				alert('Сообщение отправлено! Вскоре вам ответят');
				$('.formPop').trigger('reset');
				
				setTimeout(function(){
					let cssClosePop = {
						"top":"75%",
						"right":"17px",
						"height":"150px",
						"width":"300px"
					 }
					$('.wintime').css(cssClosePop);
					$('.PopForm').css('display','none').css('opacity','0');
					$('.wintime').css('opacity','0');
				},100);
				setTimeout(function(){
					$('.wintime').css('display','none');
			  },200);
				  $('.callWin').css('opacity','1');
			});
			return false;
		})
	}

	loadPic();
	otlAnim();
	popWin();
	alertForm();
	cancel();
	openPop();
	cancelPop();
	
	$('.clickMail').click(function(){
		window.location.href = "mailto:sobyx@mail.ru";
	});
	$('.image-link').magnificPopup({type:'image'});
	$('.karots').slick({
		infinite: true,
        dots: true,
		slidesToShow: 1,
	  });
	 
});

