const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({
    path: path.resolve(__dirname, '../../.env')
});

function connectToDb() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Database connected successfully');
        })
        .catch((error) => {
            console.error('Database connection failed:', error.message);
        });
}
// server ko cluster me present database se connect krne ka function

// then use for jab database se connect ho jaye to ye function call hoga

module.exports = connectToDb;
