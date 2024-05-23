document.addEventListener('DOMContentLoaded', () => {
    const currencySelect = document.getElementById('currency-select');
    const selectedRate = document.getElementById('selected-rate');

    // Fetch Tipos de cambio
    const apiKey = 'https://v6.exchangerate-api.com/v6/418aa0e1ce629d6cb888fa27/latest/USD';  //API key
    fetch(`https://v6.exchangerate-api.com/v6/418aa0e1ce629d6cb888fa27/latest/USD`)
        .then(response => response.json())
        .then(data => {
            const rates = data.conversion_rates;
            for (const [currency, rate] of Object.entries(rates)) {
                const option = document.createElement('option');
                option.value = rate;
                option.textContent = currency;
                currencySelect.appendChild(option);
            }

            // Tipo de cambio inicial
            selectedRate.textContent = `1 USD = ${currencySelect.value} ${currencySelect.options[currencySelect.selectedIndex].text}`;

            // Updatear el tipo seleccionado
            currencySelect.addEventListener('change', () => {
                selectedRate.textContent = `1 USD = ${currencySelect.value} ${currencySelect.options[currencySelect.selectedIndex].text}`;
            });
        })
        .catch(error => console.error('Error fetching exchange rates:', error));
});
