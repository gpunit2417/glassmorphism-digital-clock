function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var currentDate = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    var currentDay = date.toLocaleDateString(undefined, { weekday: 'long' });

    document.getElementById("DateDisplay").innerText = currentDate;
    document.getElementById("DateDisplay").textContent = currentDate;

    document.getElementById("DayDisplay").innerText = currentDay;
    document.getElementById("DayDisplay").textContent = currentDay;

    setTimeout(showTime, 1000);
}

showTime();