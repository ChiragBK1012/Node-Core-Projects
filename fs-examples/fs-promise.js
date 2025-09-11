const fs = require("fs").promises;

console.log("===== FS Promise Demo =====");

fs.writeFile("promise.txt", "Hello, written with promises!")
    .then(() => {
        console.log("File written successfully (promise).");
        return fs.readFile("promise.txt", "utf8");
    })
    .then(data => {
        console.log("File content:", data);
        return fs.appendFile("promise.txt", "\nAppended with promises.");
    })
    .then(() => {
        console.log("File appended (promise).");
        return fs.unlink("promise.txt");
    })
    .then(() => {
        console.log("File deleted (promise).");
    })
    .catch(err => console.error("Error:", err));
