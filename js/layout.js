(function Layout() {
    // detect mobile device
    let isMobileDevice = function () {
        return ((
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        ) ? true : false);
    }

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
        for (let i = 0; i <= 65; i += 10) {
            if (pageYOffset >= document.documentElement.clientHeight / (100 / i)) {
                headerBlock.style.top = `-${i}px`;
            }
        }
    });

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

    let btt = document.querySelector('#btt');
    let home = document.querySelector('#home')
    btt.addEventListener('click', (e) => {
        e.preventDefault();
        home.scrollIntoView();
    })
    
}())