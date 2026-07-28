function exchange(umUAH, currencyValues, exchangeCurrency) {
    for (i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return umUAH / currencyValues[i].value;
        }
    }
    return 0
}

umUAH = 10000;
currencyValues = [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}];
exchangeCurrency = 'USD'
res = exchange(umUAH, currencyValues, exchangeCurrency)
document.write(`
<p>${umUAH} грн = ${res} ${exchangeCurrency} </p>
`)
