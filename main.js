const express = require('express');
const api = require('./routes/api')
const path = require('path')
const app = express();
const port = 3004;
app.use(express.static(path.join(__dirname,"public")))
app.use('/api', api)

app.use((req, res, next) => {
    console.log('I am middleware');
    next();
});

app.get('/', (req, res) => {
    console.log('This is Home');
    res.sendFile('./public/templates/index.html',{root:__dirname});
}).get('/about', (req, res) => {
    res.sendFile('./public/templates/about.html',{root:__dirname});
}).get('/docs', (req, res) => {
    res.sendFile('./public/templates/docs.html',{root:__dirname});
}).get('/status', (req, res) => {
    res.json({ version: 0.01, message: 'ok' });
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
