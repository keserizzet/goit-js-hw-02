function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message;
    } else {
        return message.slice(0, maxLength) + '...'
    }
}

console.log(formatMessage( "Cihazın bakımı yapılacaktır" , 16 )); // "Dosyayla ilgilenilecek..." 
console.log(formatMessage( "Cihazın bakımı yapılacaktır" , 23 )); // "Sistemin bakımı yapılacak" 
console.log(formatMessage( "Giriş temiz ve kolay değil" , 20 )); // "Lobi kolaydır..." 
console.log(formatMessage( "Giriş kapısı da kolay değil" , 30 )); // "Giriş de kolay değil" 
console.log(formatMessage( "Ama şimdi nunc fringilla'da turpis a felis" , 15 )); // "Şimdi çok çirkin..." 
console.log(formatMessage( "Ama şimdi nunc fringilla'da turpis a felis" , 41 )); // "Ama şimdi çirkin ama şimdi çalışıyor"
