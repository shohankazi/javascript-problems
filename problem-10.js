// // Write a function called foo() which prints “foo” and a function called bar() which prints “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.

function foo() {
    console.log("foo");
    bar();
}
function bar() {
    console.log("bar");
}
foo();

// Write a function called make_avg() which will take an three integers and return the average of those values.

function make_average(num1,num2,num3){
    const average = (num1 + num2 + num3)/3;
    return average;
}
const averageResult = make_average(100,200,300);
console.log(averageResult);

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    const averageNum = (numbers[0] + numbers[1] + numbers[2])/3;
    return averageNum;
}
const numbers = [120.6,20.60,30.33];
const averageNumber = make_avg(numbers).toFixed(2);
console.log(averageNumber);

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd.
function even_odd(number){
    if (number % 2 == 0) {
        console.log(number, "is an even number");
    } else {
        console.log(number, "is an odd number");
    }
    return number;
}
even_odd(1169);
// You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable.
var signal = {
    red : "Don't cross the road ! You are in danger.",
    green : "You should cross the road.",
    yellow : "You should stop !"
}
console.log(signal.yellow);
