'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rootRoute = require('./routes/rootRoute.js');
const catRoute = require('./routes/catRoute.js');
const userRoute = require('./routes/userRoute.js');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('uploads'));

//routes
app.use('/', rootRoute);
app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

