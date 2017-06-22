// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('594bc73a5aa53b127c3f24c4')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  //   });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  //   });

  db.collection('Users').find({name: 'Animesh'}).toArray().then((names) => {
    console.log(`Names with Animesh are:`);
    console.log(JSON.stringify(names, undefined, 2));
  }, (err) => {
    console.log('Not found', err);
  });

  // db.close();
});
