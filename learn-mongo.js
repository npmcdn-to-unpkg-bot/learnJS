var mongo = require('mongodb')
var client = mongo.MongoClient

client.connect('mongodb://127.0.0.1/book_shop', 
    (error, db) => {
        db.collection('book').find().toArray((error, data) => {
            console.log(data)
            }
        )
    }
)
