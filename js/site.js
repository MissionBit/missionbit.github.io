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

var firebaseYes;

$("#firebase-yes").change(function() {
	$(".remote-mentor").show();
	$('.firebase-mentor-details').show();
	$('.firebase-mentor').hide();
	firebaseYes = true;
})

$("#firebase-no").change(function() {
	$(".remote-mentor").show();
	// $("#intern-online-yes").addClass("no-yes");
	// $("#intern-online-yes").removeClass("remote-yes");
	// $("#intern-online-no").addClass("no-no");
	// $("#intern-online-no").removeClass("remote-no");
	$('.firebase-mentor').hide();
	firebaseYes = false;
})

$("#intern-online-yes").change(function() {
	$(".remote-mentor-details").show();
	$(".internship-submit").show();
	$('.remote-mentor').hide();
})

if (firebaseYes) {
	$("#intern-online-no").change(function() {
		$(".internship-submit").show();
		$('.remote-mentor').hide();
	})
} else {
	$("#intern-online-no").change(function() {
		$('.internship-online-question').hide();
	})
}


$("#summer-signup").click(function() {
	var mentorName = $('#mentor-name-input').val();
	var mentorTitle = $('#mentor-title-input').val();

	var Mentor = Parse.Object.extend("Mentor");
	var mentor = new Mentor();

	mentor.set("name", mentorName);
	mentor.set("title", mentorTitle);
	$("#summer-mentor-form").hide();
	 
	mentor.save(null, {
	  success: function(mentor) {
	    alert('New object created with objectId: ' + mentor.attributes.title);
	  },
	  error: function(mentor, error) {
	    alert('Failed to create new object, with error code: ' + error.description);
	  }
	});

})

