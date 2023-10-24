//server.js
//Author: Bernice Balite
//Program Details: Server file for Lab GitHub and Cyclic

//importing modules
const HTTP_PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Web322!');
});

app.listen(HTTP_PORT, () => {
    console.log(`Server is running on http://localhost:${HTTP_PORT}`);
});
