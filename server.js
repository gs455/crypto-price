// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

key = 'ee34630e-5921-476e-8362-61d5afdd7ce6'

// https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1500&convert=USD&aux=num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply,market_cap_by_total_supply,volume_24h_reported,volume_7d,volume_7d_reported,volume_30d,volume_30d_reported&CMC_PRO_API_KEY=ee34630e-5921-476e-8362-61d5afdd7ce6"))

app.get('/api/crypto-price', async (req, res) => {
    const { ticker } = req.query;
    try {
        const response = await axios.get(`https://api.coinmarketcap.com/v1/ticker/${ticker}/`);
        const price = response.data[0].price_usd;
        res.json({ price });
    } catch (error) {
        res.status(400).json({ error: 'Failed to fetch data from CoinMarketCap API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
