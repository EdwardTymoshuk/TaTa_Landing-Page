$(document).ready(function () {
	
    $("#submit").on("click", function() {
    
        var name = $("#name").val();
        var email = $("#email").val();
        var subj = $("#subject").val();
        var message = $("#message").val(); 
        
        $.ajax({
        
            url: "mail.php",
            type: "post",

            data: {
                "name": name,
                "email": email,
                "subject": subj,
                "message": message
            },

            success: function(data) {
                $(".result").html(data);
                $("#name").val(''), $("#email").val(''), $("#subject").val(''), $("#message").val('');
            }
            
            
        });
    });
    
});