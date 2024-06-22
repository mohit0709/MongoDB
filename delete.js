const {dbConnection} = require('./db');

async function main(){

    try{

        const db = await dbConnection();
        const collection = db.collection('example2');
        const filter = {name:"jessie"};

        const deleteEle = await collection.deleteOne(filter);

        console.log(`${deleteEle.deletedCount} Items is deleted`);
    }
    catch(error){
        console.error('Cannot perform deletion', error);
    }
}
main();

