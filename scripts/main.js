// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
function submit() {
    var data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    $.ajax(
        {
            url: "https://api.ansacore.com",
            body: JSON.stringify(data),
            type: "POST",
            success: function(result) {
                console.log('yay');
            }
        },
        {
            error: function(error) {
                console.log('error');
            }
        }
    )
}
