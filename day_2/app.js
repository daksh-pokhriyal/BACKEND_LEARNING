// is file ka kaam => 
// server ko 
// create krna,
// config krna (middleware use krna),

const express= require('express');

const app= express();

app.use(express.json()); // middleware 


module.exports=app;