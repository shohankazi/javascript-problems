function factorial(number) {
    let result = 1;
    for( i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}
let result = factorial(10);

console.log(result);