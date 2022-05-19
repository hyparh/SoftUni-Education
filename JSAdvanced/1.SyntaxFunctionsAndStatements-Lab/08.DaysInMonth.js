function daysInMonth(month, year) {
    let date = new Date(year, month, 0).getDate();

    console.log(date);
}

daysInMonth(1, 2012);
daysInMonth(2, 2021);
