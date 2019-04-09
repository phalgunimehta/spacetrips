 
 // Our Contacts 
 $(document).ready(function(){
    $("#contacts").click(function(){
    $("#contactInfo").slideToggle("fast");
    });
});
//Login Form  
function validateRepeatPassword(){
    var password = document.getElementById("pswInput") ,
        repeatpassword = document.getElementById("rpswInput");
        
    if(password.value != repeatpassword.value){
        repeatpassword.setCustomValidity("Passwords don't Match");
    }
    else{
        repeatpassword.setCustomValidity('');
    }
}


function checkEmail() {
    var email = document.getElementById('emailInput');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    email.setCustomValidity('Please provide a valid email address'); 
    }
    else {
        email.setCustomValidity('');
    }
}


function myFunction(event) {
    var x = event.charCode;
    var y = String.fromCharCode(x);
    
    document.getElementById("letterViewer").innerHTML =  y;
    
    var element = document.getElementById( "letterViewer" );
    var op;
    var timer;

    if ( element.style.visibility === "hidden" ) {
        op = 0.1;
        timer = setInterval( fadeIn, 10 )
    } else {
        op = 1;
        timer = setInterval( fadeOut, 30 )
    }
    

    function fadeOut() {
        if ( op <= 0.1 ) {
            clearInterval( timer );
            element.style.visibility = "visible";
        }
        element.style.opacity = op;
        op -=  0.1;
    }
        

    function fadeIn() {
        element.style.visibility = "visible";
        if ( op >= 1 ) {
            clearInterval( timer );
        }
        element.style.opacity = op;
        op +=  0.1;
    }
}
function myFunction1(event) {
    var x = event.charCode;
    var y = String.fromCharCode(x);
    
    document.getElementById("Viewer").innerHTML =  y;
    
    var element = document.getElementById( "Viewer" );
    var op;
    var timer;

    if ( element.style.visibility === "hidden" ) {
        op = 0.1;
        timer = setInterval( fadeIn, 10 )
    } else {
        op = 1;
        timer = setInterval( fadeOut, 30 )
    }
    

    function fadeOut() {
        if ( op <= 0.1 ) {
            clearInterval( timer );
            element.style.visibility = "visible";
        }
        element.style.opacity = op;
        op -=  0.1;
    }
        

    function fadeIn() {
        element.style.visibility = "visible";
        if ( op >= 1 ) {
            clearInterval( timer );
        }
        element.style.opacity = op;
        op +=  0.1;
    }
}
                            
