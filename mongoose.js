const mongoose = require('mongoose');

const Example1Schema = new mongoose.Schema({

    name:String,
    age:Number,
})

const Example1Model = mongoose.model('example1', Example1Schema);

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/myDatabase');
    console.log("Connected Successfully");
}

main();
