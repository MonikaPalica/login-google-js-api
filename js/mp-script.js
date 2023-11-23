
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    // Initialize the Google API with your client ID
    function init() {
        gapi.load('auth2', function() {
            gapi.auth2.init({
                client_id: 'your-client-id',
            });
        });
    }
});

function googleSignIn() {
    var auth2 = gapi.auth2.getAuthInstance();

    auth2.signIn().then(function(googleUser) {
        var profile = googleUser.getBasicProfile();

        // Access user information (e.g., profile.getId(), profile.getEmail(), profile.getName())

        // You can now make API calls or handle user registration
    });
}