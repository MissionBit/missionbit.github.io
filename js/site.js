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

$("#summer-signup").click(function() {
	var mentorName = $('#mentor-name-input').val();

	var Mentor = Parse.Object.extend("Mentor");
	var mentor = new Mentor();

	mentor.set("name", mentorName);
	 
	mentor.save(null, {
	  success: function(mentor) {
	    alert('New object created with objectId: ' + mentor.id);
	  },
	  error: function(mentor, error) {
	    alert('Failed to create new object, with error code: ' + error.description);
	  }
	});

})

