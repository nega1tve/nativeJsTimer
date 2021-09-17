let deadline = '2021-11-12';

    function getTimeRemaining(deadline) {
        let t = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }

    function setClock(id, deadline) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(deadline);
            if (hours.textContent < 10) {
                hours.textContent = ("0" + t.hours).slice(-2);
            } else {
                hours.textContent = t.hours;
            }
            minutes.textContent = ("0" + t.minutes).slice(-2);
            seconds.textContent = ("0" + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);