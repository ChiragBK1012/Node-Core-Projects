const fs = require("fs");

console.log("===== FS Callback Demo =====");

// Write a file
fs.writeFile("callback.txt", "Hello, written using callback!", err => {
    if (err) return console.error(err);
    console.log("File written successfully (callback).");

    // Read the file
    fs.readFile("callback.txt", "utf8", (err, data) => {
        if (err) return console.error(err);
        console.log("File content:", data);

        // Append to the file
        fs.appendFile("callback.txt", "\nAppended with callback.", err => {
            if (err) return console.error(err);
            console.log("File appended (callback).");

            // Delete the file
            fs.unlink("callback.txt", err => {
                if (err) return console.error(err);
                console.log("File deleted (callback).");
            });
        });
    });
});
