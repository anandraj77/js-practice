const array = [1,2,3,4,5]

// const initial = 0;
// const sum = array.reduce( (acc,currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     return acc + currVal
// }, initial)
// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalSum = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(`total item price is : ${totalSum}`);

