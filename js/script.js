$(document).ready(function(){
    $('#submit').click(function(){
        // getting input value
     let email = $('#email').val();

     // setting conditional statement if input value is empty on sumbit
     if(email == ""){
        $('i').show();
        $('#error_message').html("Please provide your email");
        $('input').css("border", "2px solid  hsl(0, 93%, 68%)");
        return false;
     }

     // setting conditional statement if input does not contain '@' and '.' on sumbit
     if (email.indexOf("@") < 0 || email.indexOf(".") < 0){
        $('i').show();
        $('#error_message').html("Please provide a valid email");
        $('input').css("border", "2px solid  hsl(0, 93%, 68%)");
        return false;

     }
        
    })

    
});