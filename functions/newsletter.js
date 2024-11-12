import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI;
const DATABASE_NAME = 'DOODLE';
const COLLECTION_NAME = 'Newletter';

export async function handler(event) {
  if (event.request.method === 'POST') {
    const body = await event.request.json();
    const { email } = body;

    if (!email || !validateEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400 }
      );
    }

    try {
      const client = new MongoClient(MONGO_URI);
      await client.connect();
      const database = client.db(DATABASE_NAME);
      const collection = database.collection(COLLECTION_NAME);

      // Insert email into MongoDB
      await collection.insertOne({ email, timestamp: new Date() });

      await client.close();

      return new Response(
        JSON.stringify({ message: 'Email successfully subscribed' }),
        { status: 200 }
      );
    } catch (error) {
      console.error('Error inserting data into MongoDB', error);
      return new Response(
        JSON.stringify({ error: 'Failed to save email' }),
        { status: 500 }
      );
    }
  }

  return new Response(
    JSON.stringify({ error: 'Invalid request method' }),
    { status: 405 }
  );
}

// Simple email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}
