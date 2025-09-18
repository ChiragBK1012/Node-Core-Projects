const http = require("http");

const server = http.createServer((req, res) => {
    // Set header for all responses
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/") {
        // Handle GET request
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Hello from GET request!" }));
    } else if (req.method === "POST" && req.url === "/submit") {
        // Collect request body
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            res.writeHead(200);
            res.end(JSON.stringify({ message: "Data received", data: body }));
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not Found" }));
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
