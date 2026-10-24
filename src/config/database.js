import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbName = 'ecommerce_db';

const client = new MongoClient(uri);

export async function connectDB() {
  await client.connect();
  console.log(' Conectado exitosamente a MongoDB');
  return client.db(dbName);
}

export async function closeDB() {
  await client.close();
  console.log(' Conexión a MongoDB cerrada');
}