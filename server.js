
require('dotenv').config();

const https = require('https')
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.get('/api', async (req, res) => {
    const options = { hostname: 'api.api-ninjas.com', path: '/v1/quotes', headers: { 'X-Api-Key': process.env.API_KEY} };

    let quote = '';

    https.get(options, (response) => {
        response.on('data', chunk => {
            quote += chunk;
        })

        response.on('end', () => {
            try {
                res.json(quote);
                
            } catch (error) {
                console.error(error);
            }
        });
    })
})

app.listen(process.env.PORT || 3000);