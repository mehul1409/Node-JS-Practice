const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm';

async function getdata() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection('products');
    const response = await collection.find({}).toArray();
    console.log(response);
  } finally {
    await client.close();
  }
}

getdata();
