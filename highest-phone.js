const phones = [
    {name:'Samsung',camera: 44,storage:'32 gb',price:36000,color:'silver'},
    {name:'Walton',camera: 12,storage:'32 gb',price:22000,color:'silver'},
    {name:'iphone',camera: 50,storage:'32 gb',price:82000,color:'silver'},
    {name:'Xaomi',camera: 13,storage:'32 gb',price:52000,color:'silver'},
    {name:'oppo',camera: 20,storage:'32 gb',price:20000,color:'silver'},
    {name:'nokia',camera: 15,storage:'32 gb',price:44000,color:'silver'},
    {name:'HTC',camera: 16,storage:'32 gb',price:62000,color:'silver'},
];
function highestPhone(phones) {
    let highest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price > highest.price) {
            highest = phone;
        }
    }
    return highest;
}
const myChoice = highestPhone(phones);
console.log(myChoice);