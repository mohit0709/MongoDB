// // const {MongoClient} = require('mongodb'); //here we imported MongoClient from mongodb package, it helps in forming connection & database actions
// // const url = 'mongodb://localhost:27017';
// // const client = new MongoClient(url);


// // async function main(){
// //     await client.connect();
// //     console.log('Connected successfully to server');
// // }

// // main();

// // ****************************************The above code only for connecting mongodb and node************************************************

// const {MongoClient} = require('mongodb'); //here we imported MongoClient from mongodb package, it helps in forming connection & database actions
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = 'myDatabase';


// async function main(){
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('example1');
//     const findResult = await collection.find().toArray();
//     console.log(findResult);
// }

// main();

