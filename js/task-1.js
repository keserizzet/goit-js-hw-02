function makeTransaction(quantity, pricePerDroid, customerCredits){
    const totalPrice = pricePerDroid * quantity;

    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}

console.log(checkOrder(100, 3, 500));
console.log(checkOrder(100, 5, 400));
console.log(checkOrder(200, 2, 500));