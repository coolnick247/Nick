


signUp = () => {
    let name = $('#username').val();
    let pass = $('#password').val();
    let emails = $('#email').val()
    firebase.database().ref(name).set(
        {
            'Password': pass,
            'Email': emails
        }
        
    )
    firebase.database().ref(name).on("child_added", function(switchPg){
        window.location = "blah.html";
      
    });
    
}




