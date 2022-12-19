// 

function findOddNumbers(numbers){
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
            console.log(index,element);
        }
    }
}
const myNumbers = [1,3,5,7,8,9];
findOddNumbers(myNumbers);