
window.jQuery(function ($) {
    'use strict';
    $("#spring-student-submit").on('click', function (e) {
			e.preventDefault();
			console.log('student button working');
			// var days = [];
			// var time = [];
			var firstName = $('#spring-student-first-name').val();
			var lastName = $('#spring-student-last-name').val();
			var email = $('#spring-student-email').val();


		  var Spring2015Student = Parse.Object.extend("Spring2015Student");
			var spring2015Student = new Spring2015Student();
			spring2015Student.set("firstName", firstName);
			spring2015Student.set("lastName", lastName);
			spring2015Student.set("email", email);
			// labStudent.set("time", time);
			// labStudent.set("days", days);
			console.log(firstName + '  ' + lastName + '  ' + email);

			spring2015Student.save(null, {
			  success: function(student) {
			    console.log('save successful');
			    $('#lab-student-form').hide();
			    $('.spring-student-head-box').hide();
			    $('.spring-student-success-box').show();
			  },
			  error: function(student, error) {
			    console.log('Failed to create new object, with error code: ' + error.description);
			  }
			});

		})
  })


