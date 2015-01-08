
window.jQuery(function ($) {
    'use strict';
    $("#spring-mentor-submit").on('click', function (e) {
			e.preventDefault();
			
			var days = [];
			var time = [];
			var classes = [];

			if($('#mentor-avail-days-monday-input').is(':checked')) {
        var availMonday = $('#mentor-avail-days-monday-input').val();
        days.push(availMonday);
      }

      if($('#mentor-avail-days-tuesday-input').is(':checked')) {
        var availTuesday = $('#mentor-avail-days-tuesday-input').val();
        days.push(availTuesday);
      }

      if($('#mentor-avail-days-wednesday-input').is(':checked')) {
        var availWednesday = $('#mentor-avail-days-wednesday-input').val();
        days.push(availWednesday);
      }

      if($('#mentor-avail-days-thursday-input').is(':checked')) {
        var availThursday = $('#mentor-avail-days-thursday-input').val();
        days.push(availThursday);
      }

      //******** CLASSES *************//

      if($('#mentor-class-android-input').is(':checked')) {
        var android = $('#mentor-class-android-input').val();
        classes.push(android);
      }

      if($('#mentor-class-javascript-input').is(':checked')) {
        var javascript = $('#mentor-class-javascript-input').val();
        classes.push(javascript);
      }

      if($('#mentor-class-python-input').is(':checked')) {
        var python = $('#mentor-class-python-input').val();
        classes.push(python);
      }

      if($('#mentor-class-ruby-input').is(':checked')) {
        var ruby = $('#mentor-class-ruby-input').val();
        classes.push(ruby);
      }

      if($('#mentor-class-lick-input').is(':checked')) {
        var lick = $('#mentor-class-lick-input').val();
        classes.push(lick);
      }

      if($('#mentor-class-bvhm-input').is(':checked')) {
        var bvhm = $('#mentor-class-bvhm-input').val();
        classes.push(bvhm);
      }

			var firstName = $('#spring-mentor-first-name').val();
			var lastName = $('#spring-mentor-last-name').val();
			var email = $('#spring-mentor-email').val();
			var github = $('#spring-mentor-github').val();
			var twitter = $('#spring-mentor-twitter').val();
			var frequency = $('#spring-mentor-freq').val();

			var check = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$");
			var isEmail = check.test(email);

			if (!firstName) {
				$('#spring-firstName-error-box').show();
				$('#spring-mentor-first-name').addClass('spring15-input-error');
				$('#spring-mentor-first-name').removeClass('spring15-input-success');
			} else {
				$('#spring-firstName-error-box').hide();
				$('#spring-mentor-first-name').addClass('spring15-input-success');
				$('#spring-mentor-first-name').removeClass('spring15-input-error');
			}

			if (!lastName) {
				$('#spring-lastName-error-box').show();
				$('#spring-mentor-last-name').addClass('spring15-input-error');
				$('#spring-mentor-last-name').removeClass('spring15-input-success');
			} else {
				$('#spring-lastName-error-box').hide();
				$('#spring-mentor-last-name').addClass('spring15-input-success');
				$('#spring-mentor-last-name').removeClass('spring15-input-error');
			}

			if (!isEmail) {
				$('#spring-email-error-box').show();
				$('#spring-mentor-email').addClass('spring15-input-error');
				$('#spring-mentor-email').removeClass('spring15-input-success');
			} else {
				$('#spring-email-error-box').hide();
				$('#spring-mentor-email').addClass('spring15-input-success');
				$('#spring-mentor-email').removeClass('spring15-input-error');
			}

			if (days[0]) {
				$('#spring-days-error-box').hide();
				$('.spring15-mentor-days-div').addClass('spring15-input-success');
				$('.spring15-mentor-days-div').removeClass('spring15-input-error');
			} else {
				$('#spring-days-error-box').show();
				$('.spring15-mentor-days-div').addClass('spring15-input-error');
				$('.spring15-mentor-days-div').removeClass('spring15-input-success');
			}

			if (classes[0]) {
				$('#spring-class-error-box').hide();
				$('.spring15-mentor-class-div').addClass('spring15-input-success');
				$('.spring15-mentor-class-div').removeClass('spring15-input-error');
			} else {
				$('#spring-class-error-box').show();
				$('.spring15-mentor-class-div').addClass('spring15-input-error');
				$('.spring15-mentor-class-div').removeClass('spring15-input-success');
			}

			if (frequency === "frequency") {
				$('#spring-freq-error-box').show();
				$('#spring-mentor-freq').addClass('spring15-input-error');
				$('#spring-mentor-freq').removeClass('spring15-input-success');
			} else {
				$('#spring-freq-error-box').hide();
				$('#spring-mentor-freq').addClass('spring15-input-success');
				$('#spring-mentor-freq').removeClass('spring15-input-error');
			}

			if (!firstName || !lastName || !isEmail || frequency === "frequency" || !days[0] || !classes[0]) {
				$('#spring-submit-error-msg').show();
			} else {
				var Spring15Mentor = Parse.Object.extend("Spring15Mentor");
				var spring15Mentor = new Spring15Mentor();
				spring15Mentor.set("firstName", firstName);
				spring15Mentor.set("lastName", lastName);
				spring15Mentor.set("email", email);
				spring15Mentor.set("github", github);
				spring15Mentor.set("twitter", twitter);
				spring15Mentor.set("frequency", frequency);
				spring15Mentor.set("days", days);
				spring15Mentor.set("classes", classes);

				spring15Mentor.save(null, {
				  success: function(mentor) {
				    console.log('save successful');
				    $('#lab-mentor-form').hide();
				    $('.spring-mentor-head-box').hide();
				    $('.spring-mentor-success-box').show();
				  },
				  error: function(project, error) {
				    console.log('Failed to create new object, with error code: ' + error.description);
				  }
				})
			}

			console.log(days.length);
			console.log(classes.length);
		})
		$("#spring-mentor-first-name").on('focusout', function (e) {
			e.preventDefault();
			var firstName = $('#spring-mentor-first-name').val();
			if (!firstName) {
				$('#spring-mentor-first-name').addClass('spring15-input-error');
				$('#spring-mentor-first-name').removeClass('spring15-input-success');
			} else {
				$('#spring-firstName-error-box').hide();
				$('#spring-mentor-first-name').addClass('spring15-input-success');
				$('#spring-mentor-first-name').removeClass('spring15-input-error');
			}
		})
		$("#spring-mentor-last-name").on('focusout', function (e) {
			e.preventDefault();
			var lastName = $('#spring-mentor-last-name').val();
			if (!lastName) {
				$('#spring-mentor-last-name').addClass('spring15-input-error');
				$('#spring-mentor-last-name').removeClass('spring15-input-success');
			} else {
				$('#spring-lastName-error-box').hide();
				$('#spring-mentor-last-name').addClass('spring15-input-success');
				$('#spring-mentor-last-name').removeClass('spring15-input-error');
			}
		})
		$("#spring-mentor-email").on('focusout', function (e) {
			e.preventDefault();
			var email = $('#spring-mentor-email').val();
			var check = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$");
			var isEmail = check.test(email);
			if (!isEmail) {
				$('#spring-mentor-email').addClass('spring15-input-error');
				$('#spring-mentor-email').removeClass('spring15-input-success');
			} else {
				$('#spring-email-error-box').hide();
				$('#spring-mentor-email').addClass('spring15-input-success');
				$('#spring-mentor-email').removeClass('spring15-input-error');
			}
		})
		$(".spring15-mentor-class").on('focusout', function (e) {
			e.preventDefault();
			var classes = [];

			if($('#mentor-class-android-input').is(':checked')) {
        var android = $('#mentor-class-android-input').val();
        classes.push(android);
      }

      if($('#mentor-class-javascript-input').is(':checked')) {
        var javascript = $('#mentor-class-javascript-input').val();
        classes.push(javascript);
      }

      if($('#mentor-class-python-input').is(':checked')) {
        var python = $('#mentor-class-python-input').val();
        classes.push(python);
      }

      if($('#mentor-class-ruby-input').is(':checked')) {
        var ruby = $('#mentor-class-ruby-input').val();
        classes.push(ruby);
      }

      if($('#mentor-class-lick-input').is(':checked')) {
        var lick = $('#mentor-class-lick-input').val();
        classes.push(lick);
      }

      if($('#mentor-class-bvhm-input').is(':checked')) {
        var bvhm = $('#mentor-class-bvhm-input').val();
        classes.push(bvhm);
      }
			if (classes[0]) {
				$('#spring-class-error-box').hide();
				$('.spring15-mentor-class-div').addClass('spring15-input-success');
				$('.spring15-mentor-class-div').removeClass('spring15-input-error');
			} else {
				$('.spring15-mentor-class-div').addClass('spring15-input-error');
				$('.spring15-mentor-class-div').removeClass('spring15-input-success');

			}
		})
		$(".spring15-mentor-days").on('focusout', function (e) {
			e.preventDefault();
			var classes = [];
			var days = [];

			var availMonday = $('#mentor-avail-days-monday-input').val();
			var availTuesday = $('#mentor-avail-days-tuesday-input').val();
			var availWednesday = $('#mentor-avail-days-wednesday-input').val();
			var availThursday = $('#mentor-avail-days-thursday-input').val();

			if($('#mentor-avail-days-monday-input').is(':checked')) {
        var availMonday = $('#mentor-avail-days-monday-input').val();
        days.push(availMonday);
      }

      if($('#mentor-avail-days-tuesday-input').is(':checked')) {
        var availTuesday = $('#mentor-avail-days-tuesday-input').val();
        days.push(availTuesday);
      }

      if($('#mentor-avail-days-wednesday-input').is(':checked')) {
        var availWednesday = $('#mentor-avail-days-wednesday-input').val();
        days.push(availWednesday);
      }

      if($('#mentor-avail-days-thursday-input').is(':checked')) {
        var availThursday = $('#mentor-avail-days-thursday-input').val();
        days.push(availThursday);
      }
			if (days[0]) {
				$('#spring-days-error-box').hide();
				$('.spring15-mentor-days-div').addClass('spring15-input-success');
				$('.spring15-mentor-days-div').removeClass('spring15-input-error');
			} else {
				$('.spring15-mentor-days-div').addClass('spring15-input-error');
				$('.spring15-mentor-days-div').removeClass('spring15-input-success');
			}
		})
		$("#spring-mentor-freq").on('focusout', function (e) {
			e.preventDefault();
			var frequency = $('#spring-mentor-freq').val();
			if (frequency === "frequency") {
				$('#spring-mentor-freq').addClass('spring15-input-error');
				$('#spring-mentor-freq').removeClass('spring15-input-success');
			} else {
				$('#spring-freq-error-box').hide();
				$('#spring-mentor-freq').addClass('spring15-input-success');
				$('#spring-mentor-freq').removeClass('spring15-input-error');
			}
		})
  })


