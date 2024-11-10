function makeTransaction(quantity, pricePerDroid, customerCredits){
    const totalPrice = pricePerDroid * quantity;

    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}

console .log(makeTransaction( 5 , 3000 , 23000 )); // "15000 kredi değerinde 5 droid sipariş ettiniz!" 
console .log(makeTransaction( 3 , 1000 , 15000 )); // "3000 kredi değerinde 3 droid sipariş ettiniz!" 
console .log(makeTransaction( 10 , 5000 , 8000 )); // "Yetersiz bakiye!" 
console .log(makeTransaction( 8 , 2000 , 10000 )); // "Yetersiz bakiye!" 
console .log(makeTransaction( 10 , 500 , 5000 )); // "5000 kredi değerinde 10 droid sipariş ettiniz!"
