export function onRequestPost(context) {
    const a = context.request.params.a;

    return new Response(`Hello, ${a}!`)
  }