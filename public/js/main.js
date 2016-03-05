/*!
*4 March 2016
*HackRHS
*Created by Christian Seremetis
*All Rights Reserved
*/

$(document).ready(function(){

	$('#sponsorBtn').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(3);
	});

	function activeScroll(){

		$('.section').hover(function(){
			$('ul li').removeClass('active')
		})

		$('#index').hover(function(){
			$('#1').addClass('active');
		});

		$('#faqs').hover(function(){
			$('#2').addClass('active');
		});

		$('#sponsor').hover(function(){
			$('#3').addClass('active');
		});

		$('#signup').hover(function(){
			$('#4').addClass('active');
		});

		$('#contact').hover(function(){
			$('#5').addClass('active');
		});
	}

	activeScroll();
});

