const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js');
const app = express()

//middlware
app.use(express.json());// allows json testing
app.use(express.urlencoded({ extended: false }));//allows URL form entry while testing



//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("hello from Node API123");
});


mongoose.connect("mongodb+srv://admin:GYTxg2J1bi5dWUbf@backenddb.xbgc3.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('server is running on port 3000');
        })
    })
    .catch(() => {
        console.log("Connection Failed!");
    }
    )