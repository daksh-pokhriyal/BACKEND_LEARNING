const express = require('express');

const app= express() // created server 


app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(3000)