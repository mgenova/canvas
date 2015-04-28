$(document).ready(function(){
	
  // Change Email to Username	
  if(window.location.pathname.search('login')){
    var sp = $('#login_form label[for=pseudonym_session_unique_id]>span');
    sp.text('Username \(ex. SMITH123\)');
  }

  //Add Web Ticker
  //var body = $("body");
  //var ticker = 	"<div id='mbtaticker' class='tickercontainer-info'> <marquee><img src="{{=URL('static','img/alert_icon.png')}}"/><strong> PHONE SYSTEM OUTAGE: </strong> -- We are currently experiencing problems with our phone system. Until further notice, please email staff and faculty members to make contact. January 13th, 2015 </marquee> </div>";
  //body.prepend(ticker);
	  

  // Add Student Training Button
  var container = "<div id='header-img'></div>";
  var greeting = "<center><h1 id='header-title' class='lead'>Welcome Myron B. Thompson Parents & Students</h1></center>";
  var paragraph = "<center><!--<p class='header-txt'>Classes begin on Tuesday, July 29th, all courses will appear under the <strong>Courses</strong> menu item above.</p>--></center>";
  var message_center ="<center><a href='/conversations?#filter=type=inbox'><img id='message-icon' src='http://derricklord.github.io/canvas/message2.png' /></a>  <span class='lead' style='margin-left:5px;'>Message Center (Inbox)</span></center>";
  var getting_started = "<center> <a class='btn btn-success' href='https://mbta.instructure.com/courses/433' style='margin:10px;'>Getting Started</a><a class='btn btn-default' target='_blank' href='http://webmail.ethompson.org' style='margin:10px;'>School Gmail</a><a class='btn btn-default' href='http://mbta.me' style='margin:10px;'>School Website</a><a class='btn btn-default' href='https://mbta.instructure.com/courses/432' style='margin:10px;'>Elementary Office</a><a class='btn btn-danger' href='http://mbta.me/support/ticket' style='margin:10px;'>Technical Help</a></center>";
  var content = $("#dashboard").prepend(container);
  var contentdiv = $("#header-img");
  
  contentdiv.append(greeting);
  contentdiv.append(paragraph);
  contentdiv.append(message_center);
  contentdiv.append(getting_started);
  
  
  
  var container2 = "<div id='mobile-header'></div>";
  var mobile = "<center><a href='https://itunes.apple.com/us/app/canvas-by-instructure-cloud/id480883488?mt=8' target='_blank'><img src='http://derricklord.github.io/canvas/apple_itunes.png'/></a> <a href='https://play.google.com/store/apps/details?id=com.instructure.candroid' target='_blank'><img src='http://derricklord.github.io/canvas/google_play.png'/></a></center>"; 
  var mobile_paragraph ="<center><p class='lead'> Access course information from your mobile device</p></center>"
  var content2 = $("#dashboard").append(container2);
  var contentdiv2 = $("#mobile-header");
  contentdiv2.append(mobile_paragraph);
  contentdiv2.append(mobile); 
    
  
  // Add Webmail to Menu
  //var menu = $("#menu");
  //menu.append("<li class='menu-item'><a href='http://webmail.ethompson.org' target='_blank' class='menu-item-no-drop'>Webmail</a></li>").listview('refresh');
});