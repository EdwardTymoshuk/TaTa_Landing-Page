$(document).ready(function(){
        $("#home").on("click","a", function (event) {
            let headerEl = document.getElementById('header-block');
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top-headerEl.offsetHeight/3}, 1000);
        });
    });

    $(document).ready(function(){
        $("#footer").on("click","a", function (event) {
            let headerEl = document.getElementById('footer');
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top-headerEl.offsetHeight}, 1000);
        });
    });