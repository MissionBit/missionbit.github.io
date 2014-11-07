
window.jQuery(function ($) {
    'use strict';
    $("#hack-hardware-submit").on('click', function (e) {
			e.preventDefault();
			console.log('hardware button working');

			var firstName = $('#hack-hardware-first-name').val();
			var lastName = $('#hack-hardware-last-name').val();
			var email = $('#hack-hardware-email').val();
			var info = $('#hack-hardware-info').val();

		  var LabHardware = Parse.Object.extend("LabHardware");
			var labHardware = new LabHardware();
			labHardware.set("firstName", firstName);
			labHardware.set("lastName", lastName);
			labHardware.set("email", email);
			labHardware.set("hardwareInfo", info);

			labHardware.save(null, {
			  success: function(hardware) {
			    console.log('hardware save successful');
			    $('#lab-hardware-form').hide();
			    $('.hack-hardware-head-box').hide();
			    $('.hack-hardware-success-box').show();
			  },
			  error: function(hardware, error) {
			    console.log('Failed to create new object, with error code: ' + error.description);
			  }
			});

		})
  })


