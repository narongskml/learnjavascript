const server = Bun.serve({
    port: 3001,
    fetch(request) {
      return new Response("Hello Bun!");
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  