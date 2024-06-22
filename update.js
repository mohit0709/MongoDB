const {dbConnection} = require('./db');

async function main(){

    try{
        const db = await dbConnection();
        const collection = db.collection('example2');

        const resultGot = await collection.updateOne({name:"jessie"},{$set:{age:20}});
        console.log(`${resultGot.modifiedCount} data updated.`);
    }
    catch(error){
        console.error('Data cannot be updated!', error);
    }
}

main();