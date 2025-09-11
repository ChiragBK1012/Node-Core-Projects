const fs = require("fs");

console.log("===== FS Sync Demo =====");

try {
    // Write a file
    fs.writeFileSync("sync.txt", "Hello, this is written synchronously!");
    console.log("File written successfully (sync).");

    // Read the file
    const data = fs.readFileSync("sync.txt", "utf8");
    console.log("File content:", data);

    // Append to the file
    fs.appendFileSync("sync.txt", "\nThis line was appended synchronously.");
    console.log("Appended successfully (sync).");

    // Delete the file
    fs.unlinkSync("sync.txt");
    console.log("File deleted successfully (sync).");
} catch (err) {
    console.error("Error:", err.message);
}
