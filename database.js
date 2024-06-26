const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';

const dbName = 'myDatabase';

const client = new MongoClient(url);

const connectToDatabase = async () => {
    try{
        await client.connect();
        console.log("Connected Succesfully!");
        const db = client.db(dbName);
        return db;
    }

    catch(error){
        console.log(error);
    }
}

module.exports = {connectToDatabase};