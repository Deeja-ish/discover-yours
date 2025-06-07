function checkIfSignedIn(event){
    event.preventDefault();
    // Check if the user is signed in
    const isSignedIn = Math.random() < 0.5; // Simulating a signed-in check with a random boolean
    if(isSignedIn){
        window.location.href = "explore.html";
    }
    else{
        // If not signed in, redirect to the sign-in page
        window.location.href = "login-signin.html";
    }
}