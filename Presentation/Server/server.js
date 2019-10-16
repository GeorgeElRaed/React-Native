const express = require('express');
const Items = require('./Routers/ItemDisplay/Items');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/Items', Items);

app.listen(port, () => console.log("Server running on port " + port + "!"));