
window.jQuery(function ($) {
    'use strict';
    $("#hack-mentor-submit").on('click', function (e) {
			e.preventDefault();
			console.log('mentor button working');
			var days =[];
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
		  var LabMentor = Parse.Object.extend("LabMentor");
			var labMentor = new LabMentor();
			labMentor.set("days", days);
			console.log(days);

			labMentor.save(null, {
			  success: function(mentor) {
			    console.log('save successful');
			  },
			  error: function(project, error) {
			    console.log('Failed to create new object, with error code: ' + error.description);
			  }
			});

		})
  })


