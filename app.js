const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'contactDB';

const client = new MongoClient(url);

client.connect(function(err){
  assert.equal(null, err);
  console.log("Connected succesfully to server");
  const db = client.db(dbName);
  client.close();
  // insertDocuments(db,function(){
  //   client.close();
  // });
});

app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req,res){

  const insertDocuments = function(db, callback) {
    const collection = db.collection('contact');
    collection.insertOne(
      {
        emailID : req.body.mail,
        customerID : req.body.custid,
        feedback : req.body.feed
      }, function(err, result){
      assert.equal(err, null);
      assert.equal(1,result.result.n);
      assert.equal(1,result.ops.length);
      console.log("Inserted document into the collection");
      callback(result);
    });
  }

    res.sendFile(__dirname+"/success.html");

});

app.listen(3000, function(){
  console.log("Server is running on port 3000")
})
