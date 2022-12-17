var numbers = [30,40,50,40,70,45,95,100];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < 50) {
        continue;
    }
    console.log(number);
}