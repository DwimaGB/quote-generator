
require('dotenv').config();

const http = require('http')
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.sendFile('index.html');
})

app.get('/api', async(req, res)=>{
    http.get({hostname})
})

app.listen(process.env.PORT || 3000);