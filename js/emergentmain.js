$(document).ready(function() { 		//make sure page has loaded
	console.log('hi');				//check that javascript is connected
	$(window).scroll(function(){	//set up scroll function
    	var wScroll = $(this).scrollTop();	//create scrollTop variable
    	console.log(wScroll);

    	if(wScroll > $('.main').offset().top - 275){   //scroll after .main container, select image use CSS to move at a rate relative to wScroll
	    	$('.shorts').css({
	    		'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
	    	});

	    	$('.id').css({
	    		'transform' : 'translate(0px, '+ wScroll /8 +'%)'
	    	});

	    	$('.keys').css({
	    		'transform' : 'translate(0px, '+ wScroll /10 +'%)'
	    	});

	    	$('.phone').css({
	    		'transform' : 'translate(0px, '+ wScroll /42 +'%)'
	    	});
    	}
    	if(wScroll > $('.pop-up').offset().top - 250){  //if scroll is past top of pop up container add class; 250 to move up before
    			console.log('hello!');
    			$('.pop-up').addClass('show');
			}
		});
	});