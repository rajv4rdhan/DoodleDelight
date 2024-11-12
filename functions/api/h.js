export async function onRequestPost(context) {
  console.log(`[LOGGING FROM /hello]: Params: ${JSON.stringify(context.params)}`);
  return new Response("Hello, world!");
}