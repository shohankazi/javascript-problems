function sumOfArray(number) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i
        const element = numbers[index];
        sum = sum + element;
        console.log(index,element,sum);
    }
    return sum;
}
let numbers = [10,20,30,40,50,60,70,80,90,100];
sumOfArray(numbers);