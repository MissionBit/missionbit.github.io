
window.jQuery(function ($) {
    'use strict';
    $("#hack-mentor-submit").on('click', function (e) {
			e.preventDefault();

			var days = [];
			var time = [];
			var firstName = $('#hack-mentor-first-name').val();
			var lastName = $('#hack-mentor-last-name').val();
			var email = $('#hack-mentor-email').val();
			var frequency = $('#hack-mentor-freq').val();

			// if($('#morning').is(':checked')) {
		 //    var morning = $('#morning').val();
		 //    console.log(morning);
		 //    time.push(morning);
		 //  }
		  if($('#afternoon').is(':checked')) {
		    var afternoon = $('#afternoon').val();
		    time.push(afternoon);
		  }
		  if($('#evening').is(':checked')) {
		    var evening = $('#evening').val();
		    time.push(evening);
		  }
			if($('#monday').is(':checked')) {
		    var availMonday = $('#monday').val();
		    days.push(availMonday);
		  }
		  if($('#tuesday').is(':checked')) {
		    var availTuesday = $('#tuesday').val();
		    days.push(availTuesday);
		  }
		  if($('#wednesday').is(':checked')) {
		    var wednesday = $('#wednesday').val();
		    days.push(wednesday);
		  }
		  if($('#thursday').is(':checked')) {
		    var thursday = $('#thursday').val();
		    days.push(thursday);
		  }

		  // console.log(time);
		  // console.log(days);

		  var LabMentor = Parse.Object.extend("LabMentor");
			var labMentor = new LabMentor();
			labMentor.set("firstName", firstName);
			labMentor.set("lastName", lastName);
			labMentor.set("email", email);
			labMentor.set("time", time);
			labMentor.set("days", days);
			labMentor.set("frequency", frequency);
			// console.log(days + '  ' + time + '  ' + firstName + '  ' + lastName + '  ' + email);

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


