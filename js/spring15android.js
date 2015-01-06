
window.jQuery(function ($) {
    'use strict';
    $("#spring15-android-submit").on('click', function (e) {
			e.preventDefault();
			console.log('student button working');
			var firstName = $('#spring-student-first-name').val();
			var lastName = $('#spring-student-last-name').val();
			var email = $('#spring-student-email').val();
			var cell = $('#spring-student-cell').val();
			var school = $('#spring-student-school').val();
			var grade = $('#spring-student-grade').val();
			var gender = $('#spring-student-gender').val(); 
			var ethnicity = $('#spring-student-ethnicity').val();
			var comments = $('#spring-student-comments').val();

			if (school === "school") {
				$('#spring-school-error-box').show();
			}

			if (grade === "grade") {
				$('#spring-grade-error-box').show();
			}

			if (gender === "gender") {
				$('#spring-gender-error-box').show();
			}

			if (ethnicity === "ethnicity") {
				$('#spring-ethnicity-error-box').show();
			}

			if (school === "school" || grade === "grade" || gender === "gender" || ethnicity === "ethnicity") {
				$('#spring-submit-error-msg').show();
			} else {
				$('#lab-student-form').hide();
			  $('.spring-student-head-box').hide();
			  $('.spring-student-success-box').show();
			}

		 //  var Spring15Android = Parse.Object.extend("Spring15Android");
			// var spring15Android = new Spring15Android();
			// spring15Android.set("firstName", firstName);
			// spring15Android.set("lastName", lastName);
			// spring15Android.set("email", email);
			// // labStudent.set("time", time);
			// // labStudent.set("days", days);
			// console.log(grade+ '  ' + gender + '  ' + ethnicity);

			// spring15Android.save(null, {
			//   success: function(student) {
			//     console.log('save successful');
			//     $('#lab-student-form').hide();
			//     $('.spring-student-head-box').hide();
			//     $('.spring-student-success-box').show();
			//   },
			//   error: function(student, error) {
			//     console.log('Failed to create new object, with error code: ' + error.description);
			//   }
			// });

		})
  })
