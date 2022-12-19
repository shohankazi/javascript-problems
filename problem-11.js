// hour to minute problem
function hourToMinute(hour){
    const minute = hour * 60;
    console.log(minute);
    return minute;
}
hourToMinute(5.5);
// Find leap year
function findLeapYear(years){
    const leapYear = [];
    for (let i = 0; i < years.length; i++) {
        const index = i
        const element = year[index];
        if (element % 4 === 0) {
            leapYear.push(element);
            console.log(element);
        }
    }
}
const year = [2023,2024,2025,2028,2030,2020];
findLeapYear(year);

