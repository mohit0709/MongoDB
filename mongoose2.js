const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase');

const bookSchema = new mongoose.Schema({
    tittle:String,
    author:String,
});

const Book = mongoose.model('booksColl', bookSchema);

//create express app
const app = express();

//get
app.get('/books',async (req,res) => {
    try{
        const books = await Book.find();
        res.json(books);
    }

    catch(err){
        res.status(500),json({error:'Internal server error'});
    }
})

//post 
//inserting the below middleware is very important
app.use(express.json());
app.post('/books',async (req,res) => {
    console.log(req.body);
    try{
        const {tittle,author} = req.body;
        const newBook = new Book({tittle,author});   
        await newBook.save();
        res.status(201).json(newBook);
    }

    catch(err){
        res.status(500).json({error:'Internal server error!'});
    }
})

//put

app.use('/books/:id', async (req,res) => {
   console.log(req.params);
   const {id} = req.params;
   const {tittle,author} = req.body;
   const updatedBook = await Book.findByIdAndUpdate(id,{tittle,author});
   res.json(updatedBook);
})

//delete

app.delete('/books/:id', async (req,res) => {
    const {id} = req.params;
    await Book.findByIdAndRemove(id);
    res.sendStatus(204);
})

app.listen(3000, () => {
    console.log('Connected to Server!');
});