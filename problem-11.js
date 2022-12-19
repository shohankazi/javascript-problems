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

// celsius to Fahrenheit
function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius*(9/5))+32;
    console.log(fahrenheit);
}
celsiusToFahrenheit(38);

// fahrenheit to celsius

function FahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * (5/9);
    console.log(celsius);
}
FahrenheitToCelsius(98.4);

// Simple Interest Formula

function simpleInterest(principalAmount,rateOfInterest,time){
    const interest = principalAmount * (rateOfInterest /100) * time;
    console.log(interest);
}
simpleInterest(2000,3,2);
// Complex Interest
function complexInterest(p,r,n){
    const interest = (p *(Math.pow((1+(r/100)), n)))-p;
    console.log(interest);
}
complexInterest(2000,3,2);