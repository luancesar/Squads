const express = require('express');
const mongoose = require('mongoose'); 

const app = express();
app.use(express.json());

mongoose.connect('mongodb://192.168.99.100:27017/squads', { useNewUrlParser: true, useUnifiedTopology: true });
require('./src/models/Product');

app.use("/api", require("./src/routes"));



app.listen(3000);