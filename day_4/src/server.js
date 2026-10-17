// is file ka kaam =>

//     server ko start krna 
// database se connect krna

require('dotenv').config(); // for using .env file

const app= require('./app');
const mongoose= require('mongoose');
const connectToDb= require('./config/database');

const noteModel= require('./models/notes.model');

connectToDb();


const notes=[
   
]

// notes have title and description

// res -> server se kuch response bhejta hai
// req -> client se kuch request leta hai server


// post 

app.post('/notes',async (req,res)=>{
    
    const {title,description}= req.body; // destructuring

    const note = await noteModel.create({
        title,
        description
    }); // data save ho gya mumbai database me

    res.status(201).json({
        message: 'note added successfully',
        note
    })
    // using 201 as creating new resource 



});
 
// get

app.get('/notes',async (req,res)=>{
    const notes= await noteModel.find(); // sare notes ko get krne ka function
    // array of objects return hoga
    
    res.status(200).json({      
    notes
    })
    // using 200 as getting resource successfully

});

    







app.listen(3000, () => {
    
    console.log('Server is running on port 3000');

});