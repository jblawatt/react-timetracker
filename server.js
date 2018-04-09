// import { default as express } from "express";

const express = require("express");
const app = express();

app.get("/tracking-items/", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify([
        { id: '1', value: 'hello-world' },
        { id: '2', value: 'hello-universe' },
    ]));
});

app.listen(8000, () => {
    console.log('Backend serving on port 8000...');
})