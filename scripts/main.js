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
    var formData = {
        name: name_el.value,
        email: email_el.value,
        message: message_el.value
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
                }
            },
            {
                error: function(error) {
                    console.log(error);
                }
            }
        )
    } else {
        var form_element = document.getElementById('contact_form');
        var new_form = document.createElement('form');
        new_form.innerHTML = form_element.innerHTML;

        form_element.parentNode.replaceChild(new_form, form_element);
        new_form.reportValidity();
        new_form.parentNode.replaceChild(form_element, new_form);
    }
}
