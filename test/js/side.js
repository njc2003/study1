$(function () {

		setCfmQuickMenu : function(act){
			var cfmOllehQuickMenu=document.getElementById("cfmOllehQuickMenu");
			var cfmOllehQuickHtml = "";
			if(act=="close" && document.documentElement.clientWidth < 1116){
				act="hide";
			}
			if(act=="open"){
				cfmOllehQuickMenu.className="cfmOllehQuickMenu";
				cfmOllehQuickHtml = "";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"<h2 class='blind'>퀵메뉴</h2>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"<div class='cfmOllehQuickMenuinner'>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"	<ul class='cfmOllehQuickBannerList'><li><a href='http://my2.olleh.com/myinfo/PcsMyPhoneInfo.do'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^내 상품조회');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/346_01.png?201412311524' alt='내 상품조회' /></a></li><li><a href='http://my2.olleh.com/charge/MonthlyRateBillingInfo.do'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^요금조회');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/345_01.png?201412311524' alt='요금조회' /></a></li><li><a href='https://my.olleh.com:444/URL_REDIRECT.jsp?u=/usage/TelTotalUseTime.action'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^사용량 조회');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/344_01.png?201412311524' alt='사용량 조회' /></a></li><li><a href='https://my.olleh.com:444/order/SvcRegularSocInfo.action'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^부가서비스');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/338_01.png?201412311524' alt='부가서비스' /></a></li><li><a href='http://zone.olleh.com/thepaper/view.zone?menuid=801031&cmpid=Zone_Quick_Bene_Paper'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^올레웹진');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/343_01.png?201412311524' alt='올레웹진' /></a></li></ul>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"	<div id='cfmOllehQuickCont' class='cfmOllehShowAndHideToday'>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"		<h3 class='cfmOllehQuickTitle'><img src='https://cfm.olleh.com/IMAGES/QUICKMENU/title1.png?00005' alt='인기 서비스' /></h3>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"		<ul class='cfmOllehQuickBannerList'><li id='cfmOllehQuickContLi0' ><a href='http://zone.olleh.com/thepaper/view.zone?menuid=801031&cmpid=Zone_Quick_Ollehmain_Paper_No15_List1'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^1번배너^010_6월 추천음악 100곡');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/339_01.png?201506121826' alt='6월 추천음악 100곡' /></a></li><li id='cfmOllehQuickContLi1' ><a href='http://zone.olleh.com/thepaper/special.zone?menuid=801031&paperid=201506&tab=second&cmpid=Zone_Quick_Ollehmain_Paper_No15_List2'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^2번배너^010_[ThePaper]_ 더 페이퍼 5월');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/340_01.png?201506010922' alt='무료영화티켓 클릭만 해도 영화 예매권이 딱' /></a></li><li class='last' id='cfmOllehQuickContLi2' ><a href='http://product.olleh.com/wDic/productDetail.do?ItemCode=984'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^3번배너^010_[상품소개]_LTE데이터쿠폰');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/341_01.png?201506082028' alt='LTE 데이터쿠폰 데이터가 필요할때 쉽고 빠르게' /></a></li></ul>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"	</div>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"	<a href='#top' class='cfmOllehQuickButton' onclick=\"trackClicks('EVT','^공통사이드메뉴3.0^030_TOP');\"><img src='https://cfm.olleh.com/IMAGES/QUICKMENU/topButton.png?00005' alt='TOP - 맨위로 가기' /></a>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"	<a href=\"javascript:olleh.cfmQuickMenuAct('close');\" class='cfmOllehQuickMenuCloseButton' onclick=\"trackClicks('EVT','^공통사이드메뉴3.0^040_닫기');\"><img src='https://cfm.olleh.com/IMAGES/QUICKMENU/buttonOff.png?00005' alt='닫기' /></a>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"</div>";
				cfmOllehQuickMenu.innerHTML=cfmOllehQuickHtml;
			}else if(act=="close"){
				cfmOllehQuickMenu.className="cfmOllehQuickMenuOut";
				cfmOllehQuickHtml = "";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"<h2 class='blind'>퀵메뉴</h2>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"	<ul class='cfmOllehQuickMenuOutListBanner'><li><a href='http://my2.olleh.com/myinfo/PcsMyPhoneInfo.do'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^내 상품조회');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/346_02.png?201412311524' alt='내 상품조회' title='내 상품조회' /></a></li><li><a href='http://my2.olleh.com/charge/MonthlyRateBillingInfo.do'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^요금조회');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/345_02.png?201412311524' alt='요금조회' title='요금조회' /></a></li><li><a href='https://my.olleh.com:444/URL_REDIRECT.jsp?u=/usage/TelTotalUseTime.action'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^사용량 조회');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/344_02.png?201412311524' alt='사용량 조회' title='사용량 조회' /></a></li><li><a href='https://my.olleh.com:444/order/SvcRegularSocInfo.action'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^부가서비스');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/338_02.png?201412311524' alt='부가서비스' title='부가서비스' /></a></li><li><a href='http://zone.olleh.com/thepaper/view.zone?menuid=801031&cmpid=Zone_Quick_Bene_Paper'  onclick=\"trackClicks('EVT','^배너^공통퀵메뉴^올레웹진');\"><img src='https://cfm.olleh.com/FMG/QUICKMENU/IMAGES/343_02.png?201412311524' alt='올레웹진' title='올레웹진' /></a></li></ul>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"	<a href='#top' class='cfmOllehQuickButton' onclick=\"trackClicks('EVT','^공통사이드메뉴3.0^030_TOP');\"><img src='https://cfm.olleh.com/IMAGES/QUICKMENU/outTopButton.png?00005' alt='TOP - 맨위로 가기' /></a>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"	<a href=\"javascript:olleh.cfmQuickMenuAct('open');\" class='cfmOllehQuickMenuCloseButton' onclick=\"trackClicks('EVT','^공통사이드메뉴3.0^050_열기');\"><img src='https://cfm.olleh.com/IMAGES/QUICKMENU/buttonOn.png?00005' alt='열기' /></a>";
				cfmOllehQuickMenu.innerHTML=cfmOllehQuickHtml;
			}else if(act=="hide"){
				cfmOllehQuickMenu.className="cfmOllehQuickMenuHide";
				cfmOllehQuickHtml = "";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"<h2 class='blind'>퀵메뉴</h2>";
				cfmOllehQuickHtml = cfmOllehQuickHtml+"	<a href=\"javascript:olleh.cfmQuickMenuAct('open');\" class='cfmOllehQuickMenuCloseButton' onclick=\"trackClicks('EVT','^공통사이드메뉴3.0^050_열기');\"><img src='https://cfm.olleh.com/IMAGES/QUICKMENU/buttonOn.png?00005' alt='열기' /></a>";
				cfmOllehQuickMenu.innerHTML=cfmOllehQuickHtml;
			}
		}

})