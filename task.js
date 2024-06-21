const {dbConnection} = require('./db');

async function main(){

    try{
        const db = await dbConnection();
        const collection = db.collection('example1');

        const resultFind = await collection.find().toArray();
        console.log(resultFind);
    }

    catch(error){
        console.error('Error performing the task!',error);
    }
}

main();