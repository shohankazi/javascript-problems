/*
    You are given an array: 
        var fruits = ['Apple','Banana','Orange'];
    a) find the index of 'Banana' and replace 'Banana' with 'Mango'.
    b) Remove 'Orange' and add 'Watermelon'

*/
var fruits
var fruits = ['Apple','Banana','Orange'];
console.log(fruits.indexOf('Banana'));
fruits[1]='Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon')
console.log(fruits);