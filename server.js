const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

//SERVER SIDE

// async function fetchCurrency() {
//     const response = await axios.get(`url`);
//     currencies = response.data.data;
// }

// app.get('/api/', (request, response) => {
//     try {
//         response.json(currencies);
//     } catch (error) {
//         console.log(error.message);
//     }
// });

app.listen(3000, () => console.log('Listening on 3000 Port'))

