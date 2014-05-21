/*jslint browser: true*/
window.jQuery(function ($) {
    'use strict';
    // Disable the campaign warning if the campaign has ended
    var campaignEnd = 'Thu Feb 06 2014 00:00:00 GMT-0800 (PST)';
    if (Date.now() >= new Date(campaignEnd).getTime()) {
        $('.campaign-alert').hide();
    }
    if ($.fn.qrcode !== undefined) {
        $('.doge-qrcode').qrcode($('.doge-qrcode').data('qrcode'));
    }
});


$("#firebase-yes").change(function() {
	$(".remote-mentor").show();
	$('.firebase-mentor-details').show();
	$('#remote-mentor-no').remove();
	$('.firebase-mentor').hide();
})

$("#firebase-no").change(function() {
	$(".remote-mentor").show();
	$('.firebase-mentor').hide();
	$('#remote-mentor-yes').remove();
})

$("#intern-online-yes").change(function() {
	$(".remote-mentor-details").show();
	$(".internship-submit").show();
	$('.remote-mentor').hide();
})

$("#intern-online-no-yes").change(function() {
	$(".remote-mentor-details").show();
	$(".internship-submit").show();
	$('.remote-mentor').hide();
})


$("#intern-online-no").change(function() {
	$(".internship-submit").show();
	$('.remote-mentor').hide();
})

$("#intern-online-no-no").change(function() {
	$('.internship-online-question').hide();
})



$("#summer-signup").click(function(e) {
	
	e.preventDefault();

	var fireTime = [];
	var internWeek = [];
	var internDays = [];
	

	var mentorName = $('#mentor-name-input').val();

	if ($('#mentor-firebase-time-AM-input').is(':checked')) {
		var mentorFireAM = $('#mentor-firebase-time-AM-input').val();
		fireTime.push(mentorFireAM);
	}

	if ($('#mentor-firebase-time-PM-input').is(':checked')) {
		var mentorFirePM = $('#mentor-firebase-time-PM-input').val();
		fireTime.push(mentorFirePM);
	}
	console.log(fireTime);


	if ($('#mentor-remote-week-first-input').is(':checked')) {
		var internWeekOne = $('#mentor-remote-week-first-input').val();
		internWeek.push(internWeekOne);
	}

	if ($('#mentor-remote-week-second-input').is(':checked')) {
		var internWeekTwo = $('#mentor-remote-week-second-input').val();
		internWeek.push(internWeekTwo);
	}

	if ($('#mentor-remote-week-third-input').is(':checked')) {
		var internWeekThree = $('#mentor-remote-week-third-input').val();
		internWeek.push(internWeekThree);
	}

	if ($('#mentor-remote-week-fourth-input').is(':checked')) {
		var internWeekFour = $('#mentor-remote-week-fourth-input').val();
		internWeek.push(internWeekFour);
	}
	console.log(internWeek);

	if ($('#mentor-remote-day-monday-input').is(':checked')) {
		var monday = $('#mentor-remote-day-monday-input').val();
		internDays.push(monday);
	}

	if ($('#mentor-remote-day-tuesday-input').is(':checked')) {
		var tuesday = $('#mentor-remote-day-tuesday-input').val();
		internDays.push(tuesday);
	}

	if ($('#mentor-remote-day-wednesday-input').is(':checked')) {
		var wednesday = $('#mentor-remote-day-wednesday-input').val();
		internDays.push(wednesday);
	}

	if ($('#mentor-remote-day-thursday-input').is(':checked')) {
		var thursday = $('#mentor-remote-day-thursday-input').val();
		internDays.push(thursday);
	}

	if ($('#mentor-remote-day-friday-input').is(':checked')) {
		var friday = $('#mentor-remote-day-friday-input').val();
		internDays.push(friday);
	}
	console.log(internDays);

	// var Mentor = Parse.Object.extend("Mentor");
	// var mentor = new Mentor();

	// mentor.set("name", mentorName);
	// mentor.set("title", mentorTitle);
	// $("#summer-mentor-form").hide();
	 
	// mentor.save(null, {
	//   success: function(mentor) {
	//     alert('New object created with objectId: ' + mentor.attributes.title);
	//   },
	//   error: function(mentor, error) {
	//     alert('Failed to create new object, with error code: ' + error.description);
	//   }
	// });

})

