function clock() {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    if(hour < 10) {
        hour = '0' + hour
    }
    if(hour < 10) {
        minute = '0' + minute
    }
    if(second < 10) {
        second = '0' + second
    }

    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = ': ' + minute;
    document.getElementById('second').innerHTML = ': ' + second;
}

setInterval(clock, 1000);