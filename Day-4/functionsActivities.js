// Activity 1

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }

// console.log (factorial(33));

// Activity 2

let orderCount = 0;

const takeOrder =(topping, drink) => {
    console.log (`Pizza with ${topping} and ${drink}`);
    orderCount++;
}
let orderPrice = 0;

const totalPrice = (price) => {
    console.log(`${price}`);
    orderPrice++;
}

takeOrder("chicken", "pepsi");

totalPrice("")

console.log (`${orderCount} total orders.`)
console.log (`${orderPrice} for this order.`)