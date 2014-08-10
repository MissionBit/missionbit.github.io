var sessionUser;
var sessionEmail;

$("#mhsLead").change(function() {
	$('.mhs-project-details').show();
	$('.mhs-project-submit').show();
	if (sessionUser) {
		$('#project-mhs-name-input').val(sessionUser);
	}
	if (sessionEmail) {
		$('#project-mhs-email-input').val(sessionEmail);
	}
})

$("#mhsHack").change(function() {
	$('.mhs-project-details').show();
	$('.mhs-project-submit').show();
	if (sessionUser) {
		$('#project-mhs-name-input').val(sessionUser);
	}
	if (sessionEmail) {
		$('#project-mhs-email-input').val(sessionEmail);
	}
})

$('.mhs-project-submit').click(function(e) {
	e.preventDefault();

	var coderRoles = [];

	if (sessionUser) {
		var mhsCoderName = sessionUser;
	} else {
		var mhsCoderName = $('#project-mhs-name-input').val();
		sessionUser = mhsCoderName;
	}

	if (sessionEmail) {
		var mhsCoderEmail = sessionEmail;
	} else {
		var mhsCoderEmail = $('#project-mhs-email-input').val();
		sessionEmail = mhsCoderEmail;
	}

	if ($('#mhsLead').is(':checked')) {
		var mhsLead = $('#mhsLead').val();
		coderRoles.push(mhsLead);
	}

	if ($('#mhsHack').is(':checked')) {
		var mhsHack = $('#mhsHack').val();
		coderRoles.push(mhsHack);
	}

	console.log(coderRoles);
	console.log(mhsCoderEmail);
	console.log(mhsCoderName);

	var MissionProject = Parse.Object.extend("MissionProject");
	var missionProject = new MissionProject();

	missionProject.set("name", mhsCoderName);
	missionProject.set("email", mhsCoderEmail);
	missionProject.set("roles",coderRoles);

	// $("#project-mission-map-form").hide();
	 
	missionProject.save(null, {
	  success: function(project) {
	  	$('.mhs-project-success').show();
	    console.log('save successful');
	  },
	  error: function(project, error) {
	    console.log('Failed to create new object, with error code: ' + error.description);
	  }
	});

})

$("#sfusdLead").change(function() {
	$('.sfusd-project-details').show();
	$('.sfusd-project-submit').show();
	if (sessionUser) {
		$('#project-sfusd-name-input').val(sessionUser);
	}
	if (sessionEmail) {
		$('#project-sfusd-email-input').val(sessionEmail);
	}
})

$("#sfusdHack").change(function() {
	$('.sfusd-project-details').show();
	$('.sfusd-project-submit').show();
	if (sessionUser) {
		$('#project-sfusd-name-input').val(sessionUser);
	}
	if (sessionEmail) {
		$('#project-sfusd-email-input').val(sessionEmail);
	}
})

$('.sfusd-project-submit').click(function(e) {
	e.preventDefault();

	var coderRoles = [];

	if (sessionUser) {
		var sfusdCoderName = sessionUser;
	} else {
		var sfusdCoderName = $('#project-sfusd-name-input').val();
		sessionUser = sfusdCoderName;
	}

	if (sessionEmail) {
		var sfusdCoderEmail = sessionEmail;
	} else {
		var sfusdCoderEmail = $('#project-sfusd-email-input').val();
		sessionEmail = sfusdCoderEmail;
	}

	if ($('#sfusdLead').is(':checked')) {
		var sfusdLead = $('#sfusdLead').val();
		coderRoles.push(sfusdLead);
	}

	if ($('#sfusdHack').is(':checked')) {
		var sfusdHack = $('#sfusdHack').val();
		coderRoles.push(sfusdHack);
	}

	console.log(coderRoles);
	console.log(sfusdCoderEmail);
	console.log(sfusdCoderName);

	var UnifiedProject = Parse.Object.extend("UnifiedProject");
	var unifiedProject = new UnifiedProject();

	unifiedProject.set("name", sfusdCoderName);
	unifiedProject.set("email", sfusdCoderEmail);
	unifiedProject.set("roles", coderRoles);

	// $("#project-sfusd-vendor-form").hide();
	 
	unifiedProject.save(null, {
	  success: function(project) {
	  	$('.sfusd-project-success').show();
	    console.log('save successful');
	  },
	  error: function(project, error) {
	    console.log('Failed to create new object, with error code: ' + error.description);
	  }
	});

})

$("#firebase-yes").change(function() {
	$(".remote-mentor").show();
	$('.firebase-mentor-details').show();
	// $('.intern-user-info').show();
	// $(".internship-submit").show();
	$("#firebase-no").attr('checked', false);
	if (sessionUser) {
		$('#mentor-name-input').val(sessionUser);
	}
	if (sessionEmail) {
		$('#mentor-email-input').val(sessionEmail);
	}
})

$("#firebase-no").change(function() {
	$(".remote-mentor").show();
	$('.firebase-mentor-details').hide();
	$("#firebase-yes").attr('checked', false);
})

$("#intern-online-yes").change(function() {
	$(".remote-mentor-details").show();
	$(".internship-submit").show();
	$('.intern-user-info').show();
	$('.mobile-mentor-success').hide();
	$("#intern-online-no").attr('checked', false);
	if (sessionUser) {
		$('#mentor-name-input').val(sessionUser);
	}
	if (sessionEmail) {
		$('#mentor-email-input').val(sessionEmail);
	}
})

$("#intern-online-no").change(function() {
	$(".remote-mentor-details").hide();
	$("#intern-online-yes").attr('checked', false);
	$('.intern-mentor-success').hide();
	if ($("#firebase-yes").is(':checked')) {
		$('.intern-user-info').show();
		$(".internship-submit").show();
	}
	if (sessionUser) {
		$('#mentor-name-input').val(sessionUser);
	}
	if (sessionEmail) {
		$('#mentor-email-input').val(sessionEmail);
	}
})


$("#mobile-yes").change(function() {
	$('.mobile-mentor-details').show();
	$('.mobile-submit').show();
	$('.mobile-mentor-success').hide();
	$("#mobile-no").attr('checked', false);
	if (sessionUser) {
		$('#mentor-mobile-name-input').val(sessionUser);
	}
	if (sessionEmail) {
		$('#mentor-mobile-email-input').val(sessionEmail);
	}
})

$("#mobile-no").change(function() {
	$('.mobile-mentor-details').hide();
	// $('.mobile-submit').show();
	// $('.mobile-user-info').show();
	$('.mobile-mentor-success').hide();
	$("#mobile-yes").attr('checked', false);
	// $('.mobile-boolean-question').hide();
	// $('.mobile-mentor').hide();
})

$("#teacher-yes").change(function() {
	if (sessionUser) {
		$('#mentor-teacher-name-input').val(sessionUser);
	}
	if (sessionEmail) {
		$('#mentor-teacher-email-input').val(sessionEmail);
	}
	$('.teacher-mentor-details').show();
	$('.teacher-submit').show();
	$('.teacher-mentor-success').hide();
	$("#teacher-no").attr('checked', false);
})

$("#teacher-no").change(function() {
	if (sessionUser) {
		$('#mentor-teacher-name-input').val(sessionUser);
	}
	if (sessionEmail) {
		$('#mentor-teacher-email-input').val(sessionEmail);
	}
	// $('.teacher-mentor-details').show();
	// $('.teacher-submit').show();
	$('.teacher-mentor-success').hide();
	$("#teacher-yes").attr('checked', false);
})

$('.teacher-submit').click(function(e) {
	e.preventDefault();

	var teacherMentorName = $('#mentor-teacher-name-input').val();
	sessionUser = teacherMentorName;

	var teacherMentorEmail = $('#mentor-teacher-email-input').val();
	sessionEmail = teacherMentorEmail;

	var TeacherMentor = Parse.Object.extend("TeacherMentor");
	var teacherMentor = new TeacherMentor();

	teacherMentor.set("name", teacherMentorName);
	teacherMentor.set("email", teacherMentorEmail);
	teacherMentor.set("info", true);

	// $("#summer-mentor-teacher-form").hide();
		 
	teacherMentor.save(null, {
	  success: function(mentor) {
	  	$('.teacher-mentor-success').show();
	    console.log('save successful');
	  },
	  error: function(mentor, error) {
	    console.log('Failed to create new object, with error code: ' + error.description);
	  }
	});
})


$("#mobile-signup").click(function(e) {
	
	e.preventDefault();

	var mobileWeeks = [];
	var mobileDays = [];
	var mobileTimes = [];

	if (sessionUser) {
		var mobileMentorName = sessionUser;
	} else {
		var mobileMentorName = $('#mentor-mobile-name-input').val();
		sessionUser = mobileMentorName;
	}

	if (sessionEmail) {
		var mobileMentorEmail = sessionEmail;
	} else {
		var mobileMentorEmail = $('#mentor-mobile-email-input').val();
		sessionEmail = mobileMentorEmail;
	}

	if ($('#mentor-mobile-week-first-input').is(':checked')) {
		var mobileWeekOne = $('#mentor-mobile-week-first-input').val();
		mobileWeeks.push(mobileWeekOne);
	}

	if ($('#mentor-mobile-week-second-input').is(':checked')) {
		var mobileWeekTwo = $('#mentor-mobile-week-second-input').val();
		mobileWeeks.push(mobileWeekTwo);
	}

	if ($('#mentor-mobile-week-third-input').is(':checked')) {
		var mobileWeekThree = $('#mentor-mobile-week-third-input').val();
		mobileWeeks.push(mobileWeekThree);
	}

	if ($('#mentor-mobile-week-fourth-input').is(':checked')) {
		var mobileWeekFour = $('#mentor-mobile-week-fourth-input').val();
		mobileWeeks.push(mobileWeekFour);
	}

	if ($('#mentor-mobile-week-fifth-input').is(':checked')) {
		var mobileWeekFive = $('#mentor-mobile-week-fifth-input').val();
		mobileWeeks.push(mobileWeekFive);
	}

	if ($('#mentor-mobile-week-sixth-input').is(':checked')) {
		var mobileWeekSix = $('#mentor-mobile-week-sixth-input').val();
		mobileWeeks.push(mobileWeekSix);
	}
	console.log(mobileWeeks);

	if ($('#mentor-mobile-day-monday-input').is(':checked')) {
		var monday = $('#mentor-mobile-day-monday-input').val();
		mobileDays.push(monday);
	}

	if ($('#mentor-mobile-day-tuesday-input').is(':checked')) {
		var tuesday = $('#mentor-mobile-day-tuesday-input').val();
		mobileDays.push(tuesday);
	}

	if ($('#mentor-mobile-day-wednesday-input').is(':checked')) {
		var wednesday = $('#mentor-mobile-day-wednesday-input').val();
		mobileDays.push(wednesday);
	}

	if ($('#mentor-mobile-day-thursday-input').is(':checked')) {
		var thursday = $('#mentor-mobile-day-thursday-input').val();
		mobileDays.push(thursday);
	}

	if ($('#mentor-mobile-day-friday-input').is(':checked')) {
		var friday = $('#mentor-mobile-day-friday-input').val();
		mobileDays.push(friday);
	}
	console.log(mobileDays);

	if ($('#mentor-mobile-time-1012-input').is(':checked')) {
		var mobile1012 = $('#mentor-mobile-time-1012-input').val();
		mobileTimes.push(mobile1012);
	}

	if ($('#mentor-mobile-time-13-input').is(':checked')) {
		var mobile13 = $('#mentor-mobile-time-13-input').val();
		mobileTimes.push(mobile13);
	}

	if ($('#mentor-mobile-time-24-input').is(':checked')) {
		var mobile24 = $('#mentor-mobile-time-24-input').val();
		mobileTimes.push(mobile24);
	}
	console.log(mobileTimes);	

	var MobileMentor = Parse.Object.extend("MobileMentor");
	var mobileMentor = new MobileMentor();

	mobileMentor.set("name", mobileMentorName);
	mobileMentor.set("email", mobileMentorEmail);
	mobileMentor.set("mobileWeeks", mobileWeeks);
	mobileMentor.set("mobileDays", mobileDays);
	mobileMentor.set("mobileTimes", mobileTimes);
	// $("#summer-mentor-mobile-form").hide();
	 
	mobileMentor.save(null, {
	  success: function(mentor) {
	  	$('.mobile-mentor-success').show();
	    console.log('save successful');
	  },
	  error: function(mentor, error) {
	    console.log('Failed to create new object, with error code: ' + error.description);
	  }
	});

})

$("#summer-signup").click(function(e) {
	
	e.preventDefault();

	var fireTime = [];
	var internWeek = [];
	var internDays = [];
	var internTimes = [];

	if (sessionUser) {
		var mentorName = sessionUser;
	} else {
		var mentorName = $('#mentor-name-input').val();
		sessionUser = mentorName;
	}

	if (sessionEmail) {
		var mentorEmail = sessionEmail;
	} else {
		var mentorEmail = $('#mentor-email-input').val();
		sessionEmail = mentorEmail;
	}

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

	if ($('#mentor-remote-time-AM-input').is(':checked')) {
		var mentorRemoteAM = $('#mentor-remote-time-AM-input').val();
		internTimes.push(mentorRemoteAM);
	}

	if ($('#mentor-remote-time-PM-input').is(':checked')) {
		var mentorRemotePM = $('#mentor-remote-time-PM-input').val();
		internTimes.push(mentorRemotePM);
	}
	console.log(internTimes);

	var InternMentor = Parse.Object.extend("InternMentor");
	var internMentor = new InternMentor();

	internMentor.set("name", mentorName);
	internMentor.set("name", mentorEmail);
	internMentor.set("fireTimes", fireTime);
	internMentor.set("internWeeks", internWeek);
	internMentor.set("internDays", internDays);
	internMentor.set("internTimes", internTimes);
	// $("#summer-mentor-intern-form").hide();
	 
	internMentor.save(null, {
	  success: function(mentor) {
	    console.log('save successful');
	    $('.intern-mentor-success').show();
	  },
	  error: function(mentor, error) {
	    console.log('Failed to create new object, with error code: ' + error.description);
	  }
	});

});

Parse.initialize("w39zwZoBCaH3HAmDecx7shBkR4Od4G6bpfd0rBuY", "EO4wwBBLCOl1MDnboPWCyWs7H1p2YQIwLlId0apw");