// is file ka kaam =>

//     server ko start krna 
// database se connect krna


const app= require('./app');
const mongoose= require('mongoose');


function connectToDb()
{
    mongoose.connect("mongodb+srv://itisdakshpokhriyal_db_user:DrNGtbD3HIRBdjp0@cluster0.i6kdsem.mongodb.net/database1")
    .then(()=>{
        console.log('Database connected successfully');
    })
} // server ko cluster me present database se connect krne ka function

connectToDb();

const notes=[
   
]

// notes have title and description

// res -> server se kuch response bhejta hai
// req -> client se kuch request leta hai server

app.post('/notes',(req,res)=>{
    console.log(req.body)

    notes.push(req.body);
    // res.send(notes)
    // res.send('note me add hogya be !')
    res.status(200).json({
        notes
    })
   

}
)

app.get('/notes',(req,res)=>{
    res.send(notes)
})


app.delete('/notes/:index',(req,res)=>{
    const index= req.params.index;
    notes.splice(index,1);
    console.log(index);
   
    res.send('note delete hogya be !')
})


// for partial update of note description
app.patch('/notes/:index',(req,res)=>{
    const index= req.params.index;
    notes[index].description= req.body.description;
    res.send('note ki description update hogya be !')

});

    







app.listen(3000, () => {
    
    console.log('Server is running on port 3000');

});