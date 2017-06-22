// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("594c13eedf0ddc804b1ac41c")
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //updating Users
  db.collection('Users').findOneAndUpdate({
_id: new ObjectID("594bc7b21a80d6226c0d3275")
    }, {
    $set: {
      name: "Animesh"
  },
    $inc: {
        age: 1
      }
  },
  {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
