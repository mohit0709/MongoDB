// In this page we are inserting data into the database

const {dbConnection} = require('./db');

async function main(){

    try{
        const db = await dbConnection();
    const collection = db.collection('example2');

    const data = [
        {name:"walter", age:50},
        {name:"jessie", age:27}
    ];

    const getResult = await collection.insertMany(data);
    console.log(`${getResult.insertedCount} Result Inserted`);
    }

    catch(error){
        console.error('Error!!', error);
    }
    
}

main();