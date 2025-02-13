const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://rudhreshm191106:rudh123+@cluster0.zone4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to MongoDB');

  
    app.listen(8080, () => {
        console.log('Server running on port 8080');
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});