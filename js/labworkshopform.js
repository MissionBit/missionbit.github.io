

window.jQuery(function ($) {
    'use strict';
    $("#hack-workshop-submit").on('click', function (e) {
			e.preventDefault();
			console.log('hardware button working');

			var firstName = $('#hack-workshop-first-name').val();
			var lastName = $('#hack-workshop-last-name').val();
			var email = $('#hack-workshop-email').val();
			var description = $('#hack-workshop-description').val();
			console.log(description);

		  var LabWorkshop = Parse.Object.extend("LabWorkshop");
			var labWorkshop = new LabWorkshop();
			labWorkshop.set("firstName", firstName);
			labWorkshop.set("lastName", lastName);
			labWorkshop.set("email", email);
			labWorkshop.set("workshopInfo", description);

			labWorkshop.save(null, {
			  success: function(workshop) {
			    console.log('workshop save successful');
			    $('#lab-workshop-form').hide();
			    $('.hack-workshop-head-box').hide();
			    $('.hack-workshop-success-box').show();
			  },
			  error: function(workshop, error) {
			    console.log('Failed to create new object, with error code: ' + error.description);
			  }
			});

		})
  })


