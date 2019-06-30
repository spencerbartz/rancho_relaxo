/*
  Server for Rest API
*/

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  // require('./app/routes')(app, database);

  // Make sure you add the database name and not the collection name
  // var db_conn = database.db("notes");
  require('./app/routes')(app, database.db("notes"));



  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
