
window.jQuery(function ($) {
    'use strict';
    $("#hack-mentor-submit").on('click', function (e) {
			e.preventDefault();
			console.log('mentor button working');
			var days = [];
			var time = [];
			var firstName = $('#hack-mentor-first-name').val();
			var lastName = $('#hack-mentor-last-name').val();
			var email = $('#hack-mentor-email').val();

			if($('#morning').is(':checked')) {
		    var morning = $('#morning').val();
		    console.log(morning);
		    time.push(morning);
		  }
		  if($('#afternoon').is(':checked')) {
		    var afternoon = $('#afternoon').val();
		    console.log(afternoon);
		    time.push(afternoon);
		  }
		  if($('#evening').is(':checked')) {
		    var evening = $('#evening').val();
		    console.log(evening);
		    time.push(evening);
		  }
			if($('#monday').is(':checked')) {
		    var availMonday = $('#monday').val();
		    console.log(availMonday);
		    days.push(availMonday);
		  }
		  if($('#tuesday').is(':checked')) {
		    var availTuesday = $('#tuesday').val();
		    console.log(availTuesday);
		    days.push(availTuesday);
		  }
		  if($('#wednesday').is(':checked')) {
		    var wednesday = $('#wednesday').val();
		    console.log(wednesday);
		    days.push(wednesday);
		  }
		  if($('#thursday').is(':checked')) {
		    var thursday = $('#thursday').val();
		    console.log(thursday);
		    days.push(thursday);
		  }

		  var LabMentor = Parse.Object.extend("LabMentor");
			var labMentor = new LabMentor();
			labMentor.set("firstName", firstName);
			labMentor.set("lastName", lastName);
			labMentor.set("email", email);
			labMentor.set("time", time);
			labMentor.set("days", days);
			console.log(days + '  ' + time + '  ' + firstName + '  ' + lastName + '  ' + email);

			labMentor.save(null, {
			  success: function(mentor) {
			    console.log('save successful');
			    $('#lab-mentor-form').hide();
			    $('.hack-mentor-head-box').hide();
			    $('.hack-mentor-success-box').show();
			  },
			  error: function(project, error) {
			    console.log('Failed to create new object, with error code: ' + error.description);
			  }
			});

		})
  })


