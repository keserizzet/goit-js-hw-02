function getShippingCost(country) {
    let price;

    switch (country) {
        case "Australia":
            price = 170;
            break; 
        case "China":
            price = 100;
            break;
        case "Chile":
            price = 250;
            break;    
        case "Jamaica":
            price = 120;
            break;
        default:
            return "Sorry, there isn delivery to your country"
    }
    return `Shipping to ${country} will cost ${price} credits`
}

console.log(getShippingCost("Australia")); // "Avustralya'ya gönderim 170 krediye mal olacak" 
console.log(getShippingCost("Germany")); // "Üzgünüz, ülkenize teslimat yok" 
console.log(getShippingCost("China")); // "Çin'e gönderim 100 krediye mal olacak" 
console.log(getShippingCost("Chile")); // "Şili'ye gönderim 250 krediye mal olacak" 
console.log(getShippingCost("Jamaica")); // "Jamaika'ya gönderim 120 krediye mal olacak" 
console.log(getShippingCost("Sweden")); // "Üzgünüz, ülkenize teslimat yok"
