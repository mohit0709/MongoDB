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

app.post('/user', async (req,res) => {
    const db = await connectToDatabase();
    const collection = db.collection('example2');
    const result = collection.insertOne({name:"Arada Guller",age:20});
    res.json(result);
})

app.listen(4000);