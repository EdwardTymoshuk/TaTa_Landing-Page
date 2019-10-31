(function Layout() {
    // detect mobile device
    let isMobileDevice = function() {
        return  ((
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        ) ? true : false);
    }

    window.addEventListener('scroll', function() {
        let headerEl = document.getElementById('header-block');
        for (let i=0; i<100; i+=10) {
        if(pageYOffset >= document.documentElement.clientHeight/(100/i)) {
            headerEl.style.background = `rgba(255, 255, 255, 0.${i/10})`;
        }
        if (pageYOffset >= document.documentElement.clientHeight-headerEl.offsetHeight) {
            headerEl.style.background = `rgba(255, 255, 255, 1)`;
        }
    }
    });

    $(document).ready(function(){
        $("#home").on("click","a", function (event) {
            let headerEl = document.getElementById('header-block');
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top-headerEl.offsetHeight}, 1000);
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

    $(document).ready(function() {

        //E-mail Ajax Send
        $("contact-form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "/mail.php",
                data: th.serialize()
            }).done(function() {
                alert("Thank you!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    
    });
// let el = document.querySelector('#home');
// console.log(el);
// el.addEventListener('click', (e) => {
//     e.preventDefault();
//     let headerEl = document.querySelector('#header-block');
//     console.log(headerEl);
//     let id = this.querySelector('href');
//     console.log(id);
//     let top = document.getElementById(id);
//     console.log(top);
// })
}())