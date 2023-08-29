const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

app.get("/api/exchange", async (req, res) => {
  try {
    const cur1 = req.query.cur1;
    const apiKey = process.env.API_KEY;

    const response = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${cur1}&apiKey=${apiKey}`
    );
    const currency = response.data;

    res.json(currency);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3000, () => console.log("Listening on 3000 Port"));
