$(document).ready(function () {
	
    $("#submit").on("click", function() {
    
        var name = $("#name").val(); // Получаем имя
        var email = $("#email").val(); // Получаем e-mail
        var message = $("#message").val(); // Получаем сообщение
        
        $.ajax({
        
            url: "mail.php", // Куда отправляем данные (обработчик)
            type: "post",

            data: {
                "name": name,
                "email": email,
                "message": message
            },

            success: function(data) {
                
                $(".result").html(data); // Выводим результат
                $("#name").val(''), $("#email").val(''), $("#message").val('');
                console.log("Zalupien");
            }
            
            
        });
    });
    
});