# For learning MongoDB for Backend.

Commands:
-> show dbs: this command shows all the databases present
-> use <database-name>: this command selects a partcular db
-> db.<collection-name>: this commands creates a new collection in the db
-> db.<collection-name>.insertOne({}): this commnad insert one object into the collection
-> db.<collection-name>.insertMany({}, {}): this command inserts many objects into the collection
-> db.<collection-name>.find(): this command will return the first 20 datasets/objects into the collection

-> find(...): this can also filter the object we need by specifying the key in the parenthesis.

->find({},{name:1}): this command returns all the names in the collection

-> Chaining Methods: the methods like find(), count() can be chained together. 
ex: db.example1.find({},{name:1}).count() this command will return the count of all the names in the collection example1.

functions:
find()
count() depriciated
sort() for sorting in ascending or descending order

Operations:
EX1 -> db.example1.find({age:{$gt:30}}): thsi command helps to find those objects whose age is greater than 30.
note: with operators we use $ sign
Similarly we can $or , $eq, $in, $nin, $all, $pull, $push, $inc, $dec

Delete:
->  db.example1.deleteOne({"name":"queen"}): this command will delete the data named as queen form the collection
-> db.example1.deleteMany(): this commnad will delete many objects at the same time


Object update:
-> db.example1.updateOne({_id: <object-id>}, {$set:{name:"Nikki", age:20}}) : this command uses the object id and $set operator to set the value of name as nikki and age as 20





