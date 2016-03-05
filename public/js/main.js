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

		$('#about').hover(function(){
			$('#1').addClass('active');
		});

		$('#sponsor').hover(function(){
			$('#2').addClass('active');
		});

		$('#faqs').hover(function(){
			$('#3').addClass('active');
		});
	}

	activeScroll();
});

