// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
function submit() {
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

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
}
