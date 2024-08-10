$(function () {
	var $mainBox = $('div.mainBox') ;								
	var $middleCont = $mainBox.find('> div.middleCont') ;					
	var $footBox = $mainBox.find('> div.footBox') ;						
	var $slideBox = $middleCont.find('div.slideBox') ; 					
	var $browser = $(window) ; 									
	winHalfWidth = ($browser.width() - $mainBox.width()) / 2 ;				


	// var $naviBox = $('ul.naviBox') ;
	// var $naviWrapBox = $('<div class="naviWrap" />').append('<div class="movingBox" />') ;

	var $naviBox ;
	var $naviWrapBox ;
	var $movingBox ;

	/* [ 理쒖큹 釉뚮씪�곗� 諛깃렇�쇱슫�� �뗭뾽 ] */
	function browserSet () {
		$(".imgBox .cont").width($(window).width());
		if ( $mainBox.find('div.bgSet').length == 0 ) {
			$naviBox = $('ul.naviBox') ;
			$naviWrapBox = $('<div class="naviWrap" />').append('<div class="movingBox" />') ;
			$naviWrapBox.remove() ;
			$naviBox.wrap( $naviWrapBox ) ;
			$naviWrapBox = $('div.naviWrap') ;
			$movingBox = $('div.movingBox') ;
			$movingBox.append('<p class="shadow"></p>') ;

			var $mainBg = $('<div class="bgSet" />') ;
			$mainBox.prepend( $mainBg.clone().addClass('left').append('<div class="box" />') , $mainBg.clone().addClass('right').append('<div class="box" />') ) ;
			$middleCont.prepend( $mainBg.clone().addClass('left') ) ;
			$footBox.prepend( $mainBg.clone().addClass('left') , $mainBg.clone().addClass('right') ) ;

			$slideBox.find('div.imgBox div').each(function (idx) {
				$(this).addClass( 'idx' + idx ) ;
			})			
			browserResize () ;
		} else {
			browserResize () ;
		}
	}

	browserSet () ;
	


	
	


	$naviBox.bind( 'mouseenter' , naviBoxOverHandler ) ;
	$movingBox.bind( 'mouseleave' , naviBoxOutHandler ) ;
	$naviBox.find('> li').bind( 'mouseenter' , naviBoxListOverHandler ) ;


	// [ �쇱そ 硫붾돱 ] //
	var $castCategory = $('ul.castCategory') ;
	var $castDetail = $castCategory.find('div.detail') ;	
	var $castCategoryClose = $castCategory.find('a.close') ;	
	var moveWidth = 640 ;
	// $castDetail.wrap('<div class="screen" />') ;	

	/* [ 釉뚮씪�곗� 醫뚯슦 諛곌꼍 由ъ궗�댁쫰 �뗭뾽 ] */
	function browserResize () {
		$mainBox.find('div.bgSet').css({ 'width' : winHalfWidth + 'px' }) ;
		$mainBox.find('div.bgSet.left').css({ 'left' : -winHalfWidth + 'px' }) ;
		$mainBox.find('div.bgSet.right').css({ 'right' : -winHalfWidth + 'px' }) ;

		if ( $(window).width() > 1131 ) {
			$('body').css({ 'overflow-x' : 'hidden' }) ;
			$naviWrapBox.css({ 'width' : $browser.width() , 'margin-left' : -(($browser.width() - 1131) / 2) + 'px' }) ;
			$mainBox.css({ 'overflow' : 'visible' }) ;
		} else {
			$('body').css({ 'overflow-x' : 'auto' }) ;
			// $naviWrapBox.css({ 'width' : $browser.width() , 'margin-left' : '0px' }) ;
			$naviWrapBox.css({ 'min-width' : '1131px' , 'margin-left' : '0px' }) ;
			$mainBox.css({ 'overflow' : 'hidden' }) ;
		}
	}

	/* [ 釉뚮씪�곗� 由ъ궗�댁쫰 �쒖뼱 ] */
	$browser.resize(function () {
		
		$(".contents_top .imgBox .cont").width($(window).width());
		winHalfWidth = ($browser.width() - $mainBox.width()) / 2 ;
		if ( $browser.width() > 1131 ) {
			// slideBoxWidth = $browser.width() - winHalfWidth - $castCategory.find('div.intro').width() ;
		}
		// trace( winHalfWidth ) ;
		browserSet () ;
	})

	/* [ top navi 怨좉컼�쇳꽣 �쒖뼱 ] */
	var $customeBtn = $mainBox.find('.quickMenu ul.type2 li.menu1 > a') ;
	var $customeList = $customeBtn.find('+ div.list') ;
	$customeList.slideUp() ;

	$customeBtn.bind( 'click' , customeBtnClickHandler ) ;
	function customeBtnClickHandler (e) {
		var $arr = $('<p class="arr" />') ;
		$customeList.closest('li').append( $arr ) ;
		$customeList.css({ 'visibility' : 'visible' }) ;
		$customeList.slideDown( 250 ) ;
	}

	$customeList.bind( 'mouseleave' , customeListOutHandler ) ;
	function customeListOutHandler (e) {
		$customeList.slideUp( 250 , function () {
			$customeList.css({ 'visibility' : 'hidden' }) ;
			$customeList.closest('li').find('p.arr').remove() ;
		}) ;
	}

	$customeList.find('a:last').bind( 'keydown' , customeListKeydownHandler ) ;
	function customeListKeydownHandler (e) {
		if ( e.keyCode == 9 && !e.shiftKey ) {
			customeListOutHandler () ;
		}
	}

	$customeBtn.bind( 'keydown' , customeBtnKeydownHandler ) ;
	function customeBtnKeydownHandler (e) {
		if ( e.keyCode == 9 && e.shiftKey && $customeList.css('visibility') == 'visible' ) {
			customeListOutHandler () ;
		}
	}
	
	// [ �대퉬寃뚯씠�� ] //
	function naviBoxOverHandler () {
		$naviBox.find('ul').css({ 'visibility' : 'visible' }) ;
		$naviBox.stop().animate({ 'height' : '240px' } , 100 ) ;
		$movingBox.stop().animate({ 'height' : '240px' } , 100 , function () {
			$movingBox.addClass( 'chk' ) ;
		}) ;
	}

	function naviBoxOutHandler () {
		if ( $movingBox.hasClass( 'chk' ) ) {
			$naviBox.stop().animate({ 'height' : '88px' } , 100 ) ;
			$movingBox.stop().animate({ 'height' : '88px' } , 100  , function () {
				$naviBox.find('ul').css({ 'visibility' : 'hidden' }) ;
				$movingBox.removeClass( 'chk' ) ;
			}) ;
		}
		$naviBox.find('> li > a').removeClass( 'active' ) ;
	}

	function naviBoxListOverHandler (e) {
		e.stopPropagation() ;
		$(this).closest('li').siblings().find('> a').removeClass( 'active' ) ;
		$(this).closest('li').find('> a').addClass( 'active' ) ;
	}

	$naviBox.find('> li').bind( 'focusin' , naviBoxFocusinHandler ) ;
	function naviBoxFocusinHandler (e) {
		if ( !$movingBox.hasClass( 'chk' ) ) {
			$movingBox.addClass( 'chk' ) ;
			naviBoxOverHandler () ;
		}
	}

	$naviBox.find('li:last').bind( 'keydown' , naviBoxLastKeydownHandler ) ;
	function naviBoxLastKeydownHandler (e) {
		if ( e.keyCode == 9 ) {
			naviBoxOutHandler () ;
			$movingBox.removeClass( 'chk' ) ;
		}
	}
	
	$familySite = $('div.familySite > a') ;
	$familySite.find('> div.list').slideUp() ;

	$familySite.bind( 'click' , function (e) {
		e.preventDefault() ;
		$familySite.find('> div.list').css({ 'visibility' : 'visible' }).slideDown() ;
	}) ;

	$familySite.find('a:last').bind( 'keydown' , function (e) {
		$familySite.find('> div.list').slideUp() ;
	}) ;

	$familySite.find('> a').bind( 'keydown' , function (e) {
		if ( e.keyCode == 9 && e.shiftKey ) {
			$familySite.find('> div.list').slideUp() ;
		}
	}) ;

	$familySite.find('> div.list').bind( 'mouseleave' , function () {
		$familySite.find('> div.list').slideUp() ;
	})

	// [ 硫붿씤 �덊봽�� 諛뺤뒪 �쒖뼱 ]
	var $castCategory = $middleCont.find('> ul.castCategory') ;
	// var castSetup = castObject ( $castCategory ) ;
	var castCtrl = castHandler ( $castCategory ) ;

	/* Main slide Controll*/
	mainSlide();
	
	siteMapHandler ( $mainBox.find('.quickMenu ul.type2 li.menu2') ) ;
})








/* Main Slide sdh*/
var slideSet = function (param){
	var $element = param,
		slideList = new Array;

	$element.find(" > div").each(function(idx){
		slideList[idx] = $(this);
	});

	var that = {

		slideList:slideList,
		
		slide:function(css, duration, callback){
			$element.stop().animate(css, duration, callback);
		},

		dot:function(element, className, handler){
			// var btnTable = "<ul class='dotList'>";
			// for(var i=0; i < element.find("li").length-1; i++){
			// 	if(i == 0){
			// 		btnTable = btnTable + "<li class='"+className+" on' ></li>";
			// 	}
			// 	btnTable = btnTable + "<li class="+className+"></li>";
			// }
			// btnTable = btnTable + "</ul>";
			// element.append(btnTable);
			
			// $btnTable = $("ul.dotList");
			// $btnTable.delegate("."+className, 'click', handler);
			var $btnTable = element;
			$btnTable.bind("click",handler);
			return $btnTable;
		}
	}
	return that;
}

var chkThumBool = true ;
var mainSlide = function(){
	var $slide = $(".imgBox"),
		slide = slideSet($slide),
		index = 0, animated = true, index2 = 0, width = $(window).width(),
		slideList = slide.slideList;

	var $dotList = slide.dot($(".pageControl a"), 'thum', function(e){
		e.preventDefault();

		if($(this).hasClass('thum')){
			if ( chkThumBool == false ) {
				clearInterval(moveAuto);
				chkThumBool = true ;
			}
			if(animated == true && $(this).index() != index){
				clearInterval(moveAuto);				
				var gap = index - $(this).index()
				gap = gap
				index = $(this).index();
				
				$dotList.filter('.stop').addClass( 'active' ) ;
				$dotList.eq(index).addClass("active").siblings().removeClass("active");
				$('.pageControl a.stop').addClass('active') ;
				$slide.find("div").eq(0).after($slide.find("div#main_img0"+(index+1)));				
				slide.slide({'left':-$(window).width()}, 1000, function(){					
					$slide.find("div").eq(0).appendTo($slide);
					$(this).css({"left":0});
					animated = true;
				});
				
			}	
		}

		else if($(this).hasClass("play")){			
			
			$(this).addClass( 'active' ) ;
			$dotList.filter('.stop').removeClass( 'active' ) ;
			if ( chkThumBool == true ) {
				// alert('chk play')
				moveAuto = setInterval(function(){slideMove()}, 5000);
				chkThumBool = false ;
			}
		}

		else if($(this).hasClass("stop")){
			// $dotList.filter('.stop').addClass( 'active' ) ;
			// $dotList.siblings().removeClass("active");

			$('.pageControl a.play').removeClass('active') ;

			$(this).addClass( 'active' ) ;
			clearInterval(moveAuto);
		}	
		
	});

	// var moveAuto = setInterval(function(){slideMove()}, 3000);

	var slideMove = function(){
		animated = false;
		index++;
		if(index >= $dotList.length-2){
		 	index = 0;
		}
		$dotList.eq(index).addClass("active").siblings().removeClass("active");
		$dotList.filter('.play').addClass( 'active' ) ;
		
		slide.slide({'left':-$(window).width()}, 1000, function(){
			$slide.find("div").eq(0).appendTo($slide);
			$(this).css({"left":0});
			animated = true;
		});
	}
	$('.pageControl a.play').addClass('active') ;
	moveAuto = setInterval(function(){slideMove()}, 5000);
}




