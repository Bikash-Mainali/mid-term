window.onload = function () {
    let date = new Date();
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = monthArr[date.getMonth()];
    let year = date.getFullYear();
    document.getElementById("footer-date").innerHTML = month + ", " + year
    setInterval(getDateTime(), 1000);
}

function getDateTime() {
    let date = new Date();
    const weekDayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = weekDayArr[date.getDay()];
    let month = monthArr[date.getMonth()];
    let year = date.getFullYear();
    let time = date.getTime();
    let hour = date.getHours();
    var dd = "AM";
    if (hour >= 12) {
      dd = "PM";
    }

    document.getElementById("date-time").innerHTML = day + ", " + date.getDay() + " " + month + " " + year + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()+" " + dd;
}

setInterval(getDateTime, 1000);


