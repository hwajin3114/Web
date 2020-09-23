var today = new Date();
var selDay = new Date();

function readyCal() {
    var year = document.getElementById("yearI");
    var month = document.getElementById("monthI");
    selDay = new Date(year.value, month.value - 1, 1);
    createCal();
}
function prevCal() {
    console.log("prevCal");
    selDay = new Date(selDay.getFullYear(), selDay.getMonth() - 1, selDay.getDate());
    createCal();
}

function nextCal() {
    console.log("nextCal");
    console.log("selDay.getFullYear() : " + selDay.getFullYear());
    console.log("selDay.getMonth() : " + selDay.getMonth() - 1);
    console.log("selDay.getDate() : " + selDay.getDate());
    selDay = new Date(selDay.getFullYear(), selDay.getMonth() + 1, selDay.getDate());
    createCal();
}
function createCal() {
    console.log("createcal");
    var doMonth = new Date(selDay.getFullYear(), selDay.getMonth(), 1);
    var lastDate = new Date(selDay.getFullYear(), selDay.getMonth()+1, 0);
    var tbCalendar = document.getElementById("calendar");
    // var tbCalendarYM = document.getElementById("tbCalendarYM");
    // tbCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";

    while (tbCalendar.rows.length > 2) {
        tbCalendar.deleteRow(tbCalendar.rows.length - 1);
    }
    var row = null;
    row = tbCalendar.insertRow();
    var cnt = 0;
    for (i = 0; i < doMonth.getDay(); i++) {
        cell = row.insertCell();
        cnt = cnt + 1;
    }
    /*달력 출력*/
    for (i = 1; i <= lastDate.getDate(); i++) {
        cell = row.insertCell();
        cell.innerHTML = i;
        cnt = cnt + 1;
        if (cnt % 7 == 1) {
            cell.innerHTML = "<font color=#F79DC2>" + i
        }
        if (cnt % 7 == 0) {
            cell.innerHTML = "<font color=skyblue>" + i
            row = calendar.insertRow();
        }
        if (selDay.getFullYear() == today.getFullYear()
            && selDay.getMonth() == today.getMonth()
            && i == today.getDate()) {
            cell.bgColor = "#FAF58C";
        }
    }
}