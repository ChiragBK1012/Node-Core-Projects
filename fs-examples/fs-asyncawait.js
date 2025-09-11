const fs = require("fs").promises;

console.log("===== FS Async/Await Demo =====");

async function run() {
    try {
        // Write a file
        await fs.writeFile(
            "asyncawait.txt",
            "Hello, written with async/await!"
        );
        console.log("File written successfully (async/await).");

        // Read the file
        const data = await fs.readFile("asyncawait.txt", "utf8");
        console.log("File content:", data);

        // Append to the file
        await fs.appendFile("asyncawait.txt", "\nAppended with async/await.");
        console.log("File appended (async/await).");

        // Delete the file
        await fs.unlink("asyncawait.txt");
        console.log("File deleted (async/await).");
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
