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