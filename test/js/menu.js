/* 
   Simple JQuery Accordion menu.
   HTML structure to use:

   <ul id="menu">
     <li><a href="#">Sub menu heading</a>
     <ul>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       ...
       ...
     </ul>
     <li><a href="#">Sub menu heading</a>
     <ul>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       ...
       ...
     </ul>
     ...
     ...
   </ul>

Copyright 2007 by Marco van Hylckama Vlieg

web: http://www.i-marco.nl/weblog/
email: marco@i-marco.nl

Free for non-commercial use
*/

$(function(){
	$("#gnb").hover(function(){
		$("#gnb .top_menu").slideDown(200);
	},function(){
		$("#gnb .top_menu").slideUp(200);
	});

	$("#top_menu_arrow").click(function(){
		$("#gnb .top_menu").slideUp(200);
	});
});

function initMenu() {
  $('#menu ul').hide();
  $('#menu ul').children('.current').parent().show();


  //$('#menu ul:first').show();
  $('#menu li a').click(
    function() {
      var checkElement = $(this).next();
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        return false;
        }
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('#menu ul:visible').slideUp('normal');
        checkElement.slideDown('normal');

		$("#menu li a.sub_side_menu3_on").removeClass("sub_side_menu3_on");
		$(this).addClass("sub_side_menu3_on");

		$("#menu li .sub_1depth_icon").text("+");
		$(this).parent().find("span.sub_1depth_icon").text("-");

        return false;
        }

	
      }
    );
  }
$(document).ready(function() {initMenu();});