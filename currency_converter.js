// Currency exchange rates
const exchangeRates = {
    USD: 0.012,  // 1 INR = 0.012 USD
    GBP: 0.0099, // 1 INR = 0.0099 GBP
    EUR: 0.011,  // 1 INR = 0.011 EUR
    INR: 1,      // 1 INR = 1 INR (base rate)
};

document.addEventListener("DOMContentLoaded", function () {
    const amountInput = document.getElementById("amount");
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");
    const resultText = document.getElementById("result");

    // Function to populate currency dropdowns
    function populateCurrencyDropdowns() {
        for (const currencyCode in exchangeRates) {
            const option1 = document.createElement("option");
            option1.value = currencyCode;
            option1.text = currencyCode;
            fromCurrencySelect.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = currencyCode;
            option2.text = currencyCode;
            toCurrencySelect.appendChild(option2);
        }
        // Set the default "fromCurrency" option to INR
        fromCurrencySelect.value = "INR";
    }

    // Function to convert currency
    function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount)) {
            alert("Please enter a valid amount.");
            return;
        }

        if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
            const convertedAmount = (amount * exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(2);
            resultText.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            alert("Invalid currency selection.");
        }
    }

    populateCurrencyDropdowns();

    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", convertCurrency);
});
