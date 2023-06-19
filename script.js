function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    const convertedAmount = amount * exchangeRate;
  
    document.getElementById('convertedAmount').textContent = convertedAmount.toFixed(2);
  }
  
  function getExchangeRate(fromCurrency, toCurrency) {
    // Add your exchange rate logic here
    // You can use APIs or other methods to retrieve real-time exchange rates
    // For demonstration purposes, a static exchange rate is used below
    
    const exchangeRates = {
      USD: {
        UZS: 10500,
        EUR: 0.84,
        GBP: 0.73
      },
      EUR: {
        UZS: 12500,
        USD: 1.19,
        GBP: 0.86
      },
      GBP: {
        UZS: 14200,
        USD: 1.37,
        EUR: 1.16
      }
    };
  
    return exchangeRates[fromCurrency][toCurrency];
  }
  