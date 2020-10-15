var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: 'Highway 37' };
    dbo.collection("customers").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log(`${obj.result.n} document deleted`);
        db.close();
    });
});
