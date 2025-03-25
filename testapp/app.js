const express = require('express');
const client = require('prom-client'); 

const app = express();
const port = 3000;

// JSON Parsing
app.use(express.json());


const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.send(await register.metrics());
});


app.listen(port);