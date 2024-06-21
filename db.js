// ************************************ This file is only for establishing conncection to database********************************

const {MongoClient} = require('mongodb'); //here we imported MongoClient from mongodb package, it helps in forming connection & database actions
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'myDatabase';


// async function main(){
//     await client.connect();
//     console.log('Connected successfully to server');
// }

const dbConnection = async () => {
    try{
        await client.connect();
        console.log('Connected to server successfully!');
        const db = client.db(dbName);
        return db;
    }

    catch(error){
        console.error('Failed to connect to the server:', error);
        throw error;
    }
}

module.exports = {dbConnection};