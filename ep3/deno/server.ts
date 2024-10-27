function handler(_req: Request): Response {
    return new Response("Hello, World! Deno.");
}
Deno.serve(handler);
