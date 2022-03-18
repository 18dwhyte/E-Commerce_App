{ /* Documentation taken directly from - https://docs.mongodb.com/guides/server/read/. Results in a "client is not defined error" */}

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = process.env.MONGO_URL;

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  client.close();
});

const db = client.db("Cluster0");

var cursor = db.collection('myFirstDatabase').find({});

function iterateFunc(doc) {
    console.log(JSON.stringify(doc, null, 4));
 }
 
 function errorFunc(error) {
    console.log(error);
 }
 
 cursor.forEach(iterateFunc, errorFunc);