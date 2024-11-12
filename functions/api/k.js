export async function onRequestPost(context) {
  const url = new URL(context.request.url);
  const params = Object.fromEntries(url.searchParams.entries());
  
  console.log(`[LOGGING FROM /hello]: Params: ${JSON.stringify(params)}`);
  
  const mongoApiUrl = 'https://data.mongodb-api.com/app/yspqesic/endpoint/data/v1/action/insertOne';
  const apiKey = 'e3b6a142-1af3-4a92-ae7a-228bdb19292c'; 

  const document = { params };

  const response = await fetch(mongoApiUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
      },
      body: JSON.stringify({
          dataSource: 'temp01',
          database: 'DOODLE',
          collection: 'Newletter',
          document: document,
      }),
  });

  const result = await response.json();
  console.log(`MongoDB response: ${JSON.stringify(result)}`);
  
  return new Response("Hello, world!");
}