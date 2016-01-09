//This script posts email address data to google form
//and records email address in google sheet

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('output', re.test(email));
    return re.test(email);
}
function postEmailToGoogle() {
    var email = $('#email').val();
    if ((email !=="") && validateEmail(email)) {
        $.ajax({
            type: "POST",
            url: "https://docs.google.com/forms/d/12qnuV47xlez5O6z6iZTIIEG44IyrjXgRyVdpWQeUYmQ/formResponse",
            data: {"entry_377266481": email},
            dataType: "xml",
            statusCode: {
                0: function() {
                    $('#email').val("");
                    // window.location.href = "/";
                },
                200: function() {
                    $('#email').val("");
                    // window.location.href = "/";
                }
            }
        });
    }
    else {
        console.log('Error');
    }
}
