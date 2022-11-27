const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    return res.status(200).json({message : 'Hello World'});
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on  http://localhost:${process.env.PORT || 3000}`);
    console.log('Press Ctrl+C to quit.');
});

module.exports = app;
