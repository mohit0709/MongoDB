const express = require('express');
const app = express();
const {connectToDatabase} = require('./database');

app.get('/user', async (req,res) => {
    
    try{
        const db = await connectToDatabase();
        const collection = db.collection('example2');
        const dataset = await collection.find().toArray();
        res.json(dataset);
    }

    catch(error){
        console.log(error);
        res.status(500).json({error:'Inter server failure!'});
    }
})

//posting data 

//using a famous middleware
app.use(express.json());

app.post('/user', async (req,res) => {
    console.log(req.body);
    const db = await connectToDatabase();
    const collection = db.collection('example2');
    const result = collection.insertOne(req.body);
    res.json('Updated');
})

//putting data

app.put('/user/:name', async (req,res) => {
    console.log(req.params);
    const db = await connectToDatabase();
    const collection = db.collection('example1');
    let result = await collection.updateOne({name:req.params.name},{$set:req.body});
    res.send('Updated');   
})

//to delete via postman or dynamically
app.delete('/user/:name', async (req,res) => {

    const db = await connectToDatabase();
    const collection = db.collection('example1');
    const userName = req.params.name;
    collection.deleteOne({name:userName});
    res.send('Deleted');
})

app.listen(4000);