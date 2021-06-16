const express = require('express');
const app = express();
var pino = require('express-pino-logger')();

app.use(pino);

app.get('/', (req, res) => {
    req.log.info('in / endpoint');
    res.json({
        message: 'Hello World'
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Service listening on port ${port}`));
