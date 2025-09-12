// server.js
const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200; // success
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World! This is my simple Node.js server 🚀");
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
