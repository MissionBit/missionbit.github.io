
window.jQuery(function ($) {
    'use strict';
    $("#spring-mentor-submit").on('click', function (e) {
			e.preventDefault();
			console.log('mentor button working');
			// var days = [];
			// var time = [];
			var firstName = $('#spring-mentor-first-name').val();
			var lastName = $('#spring-mentor-last-name').val();
			var email = $('#spring-mentor-email').val();


		  var Spring2015Mentor = Parse.Object.extend("Spring2015Mentor");
			var spring2015Mentor = new Spring2015Mentor();
			spring2015Mentor.set("firstName", firstName);
			spring2015Mentor.set("lastName", lastName);
			spring2015Mentor.set("email", email);
			// labMentor.set("time", time);
			// labMentor.set("days", days);
			console.log(firstName + '  ' + lastName + '  ' + email);

			spring2015Mentor.save(null, {
			  success: function(mentor) {
			    console.log('save successful');
			    $('#lab-mentor-form').hide();
			    $('.spring-mentor-head-box').hide();
			    $('.spring-mentor-success-box').show();
			  },
			  error: function(project, error) {
			    console.log('Failed to create new object, with error code: ' + error.description);
			  }
			});

		})
  })


