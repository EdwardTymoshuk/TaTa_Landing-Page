(function Layout() {
    // DETECT MOBILE DEVICE
    let isMobileDevice = function () {
        return ((
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        ) ? true : false);
    }
    // HEADER TRANSFORM
    window.addEventListener('scroll', function () {
        let headerEl = document.getElementById('header-block');
        let headerBlock = document.getElementById('header-block');
        let headerPanel = document.getElementById('header-panel');
        for (let i = 0; i <= 100; i += 10) {
            if (pageYOffset >= document.documentElement.clientHeight / (100 / i)) {
                headerEl.style.background = `rgba(255, 255, 255, 0.${i / 10})`;
                headerPanel.style.opacity = `.${90 - i}`;
            }
            if (pageYOffset >= document.documentElement.clientHeight - headerEl.offsetHeight) {
                headerEl.style.background = `rgba(255, 255, 255, 1)`;
            }
        }
        for (let i = 0; i <= headerPanel.offsetHeight; i += 10) {
            if (pageYOffset >= document.documentElement.clientHeight / (100 / i)) {
                headerBlock.style.top = `-${i}px`;
            }
        }
    });
    // PAGE NAVIGATION
    let nav = document.querySelector('#nav');
    let id = document.querySelectorAll('*[id]');
    nav.addEventListener('click', (e) => {
        e.preventDefault();
        let el = e.path[0];
        id.forEach(item => {
            if (`#${item.getAttribute('id')}` === el.getAttribute('href')) {
                item.scrollIntoView();
            }
        })
    })

    // BACK TO TOP
    let btt = document.querySelector('#btt');
    let home = document.querySelector('#home')
    btt.addEventListener('click', (e) => {
        e.preventDefault();
        home.scrollIntoView();
    })

    // PAGE BUTTONS
    // FREE LESSON BUTTONS
    const contact = document.querySelector('#contact');
    const contactSubject = document.getElementById('subject');
    const contactMessage = document.getElementById('message');

    let freeLessonsBtns = document.querySelectorAll('#free-lesson-btn');

    contactSubject.value = `Безкоштовний перший урок`;
    contactMessage.value = `Доброго дня, я б хотів(-ла) отримати безкоштовний урок французької.`;

    freeLessonsBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            contact.scrollIntoView();
        })
    })
    // ORDER LESSONS BUTTONS
    let oneHourBtn = document.querySelector('#one-hour-btn');
    let fiveHourBtn = document.querySelector('#five-hour-btn');
    let tenHourBtn = document.querySelector('#ten-hour-btn');
    // order one lesson
    oneHourBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactSubject.value = `Замовлення на 1 урок`;
        contactMessage.value = `Доброго дня, я б хотів(-ла) замовити один урок французької.`;
        contact.scrollIntoView();
    })
    // order five lessons
    fiveHourBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactSubject.value = `Замовлення на 5 уроків`;
        contactMessage.value = `Доброго дня, я б хотів(-ла) замовити п'ять уроків французької із економією 10€.`;
        contact.scrollIntoView();
    })
    // order ten lessons
    tenHourBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactSubject.value = `Замовлення на 10 уроків`;
        contactMessage.value = `Доброго дня, я б хотів(-ла) замовити десять уроків французької із економією 40€.`;
        contact.scrollIntoView();
    })


}())