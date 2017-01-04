jQuery(document).ready(function ($) {
	var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
	var fromDate = $.formatDateTime('yy-mm-dd', new Date()); 
	$.getJSON('https://www.googleapis.com/calendar/v3/calendars/pjjfdgelvdjtuvrr89tun3nu7k%40group.calendar.google.com/events?maxResults=3&orderBy=startTime&singleEvents=true&timeMin=' + fromDate + 'T10%3A00%3A00-07%3A00&key=AIzaSyC5FUd7RDTh6pzjKmK6vw7UOqzlXT6KZwI&jsoncallback=? ', function(data){
	    console.log(data);
	      
	    for (i = 0; i < 3; i++) { 
	    	var htmlLink = data.items[i].htmlLink;
	        var summary = data.items[i].summary;
	        summary = summary.replace('Hooked On Sonics','');
	        summary = summary.replace('@','');
	        summary = summary.replace('-','');
	        $dateTime = jQuery.formatDateTime('DD, MM d', new Date(data.items[i].start.dateTime), {ampmNames: ['am', 'pm']});
	        $showDate = new Date(data.items[i].start.dateTime);
			var location = data.items[i].location;
	        $dateContents = '<div class="count-box col-lg-4 col-xs-6 col-full animation fadeInLeft animation-visible" data-animation="fadeInLeft" data-animation-delay="100" style="animation-delay: 100ms;">' +
								'<div class="ico-box-thin">' +
									'<span> 	        <time datetime="2014-09-20" class="icon">     <em>' + day[$showDate.getDay()] + '</em>	        <strong>' + month[$showDate.getMonth()] +'</strong>	        <span>' + $showDate.getDate() +'</span>	      </time>     </span>' +
								'</div>' +
								'<span class="count-box-thin"><h3><a href=' + htmlLink + '>' + summary + '</a></h3></span>' +
								'<p><h2>' +
								location +
								'</h2></p>' +
							'</div>';
	        $("#feed" + (i+1)).html($dateContents);
	    }
	});
}); // End document ready
