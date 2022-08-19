// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
function submit() {
    var name_el = document.getElementById('name');
    var email_el = document.getElementById('email');
    var message_el = document.getElementById('message');
    var url = new URL(document.URL);
    var person_name = url.hostname.slice(0, -13);
    var formData = {
        name: name_el.value,
        email: email_el.value,
        message: message_el.value,
        person_name: person_name
    }

    $("#contact_form").submit(function(e) {
        e.preventDefault();
    });

    console.log(name_el.checkValidity())
    if (name_el.checkValidity() && email_el.checkValidity() && message.checkValidity()) {
        $.ajax(
            {
                url: "https://api.ansacore.com",
                data: JSON.stringify(formData),
                type: "POST",
                success: function(result) {
                    console.log(result);
                    console.log('Reported good request')

                    var returnMessage = JSON.parse(result.body);
                    if (returnMessage.message == 'Success') {
                        document.getElementById('name').value = '';
                        document.getElementById('email').value = '';
                        document.getElementById('message').value = '';
                        showSnackBar('Bedankt voor je bericht!');
                    } else {
                        showSnackBar('Er is iets misgelopen, probeer het later nog eens.');
                    }
                }
            },
            {
                error: function(error) {
                    console.log(error);
                    console.log('Reported bad request')
                    showSnackBar('Er is iets misgelopen, probeer het later nog eens.');
                }
            }
        )
    } else {
        var form_element = document.getElementById('contact_form');
        form_element.reportValidity();
    }
}

function showSnackBar(msg) {
    'use strict';
    var snackbarContainer = document.querySelector('#snackbar');
    var data = {message: msg, timeout: 5000};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}
