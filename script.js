// script.js
async function getCryptoPrice() {
    const ticker = document.getElementById('cryptoInput').value.toUpperCase();
    try {
        const response = await fetch(`/api/crypto-price?ticker=${ticker}`);
        const data = await response.json();
        document.getElementById('priceContainer').innerHTML = `Price of ${ticker}: $${data.price}`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
