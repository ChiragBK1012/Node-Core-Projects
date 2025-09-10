const path = require("path");

console.log("===== Path Module Demo =====");

// Current file path
console.log("Current file:", __filename);
console.log("Current directory:", __dirname);

// Extracting parts of a path
const filePath = "/users/chirag/projects/node-core-projects/path-utility/pathUtility.js";

console.log("\n=== Path Parts ===");
console.log("Base (filename):", path.basename(filePath));     // pathUtility.js
console.log("Dirname:", path.dirname(filePath));              // /users/chirag/projects/node-core-projects/path-utility
console.log("Extension:", path.extname(filePath));            // .js
console.log("Filename without extension:", path.basename(filePath, path.extname(filePath))); // pathUtility

// Joining paths
console.log("\n=== Path Join ===");
const joinedPath = path.join(__dirname, "subfolder", "test.txt");
console.log("Joined Path:", joinedPath);

// Resolving paths
console.log("\n=== Path Resolve ===");
const resolvedPath = path.resolve("subfolder", "test.txt");
console.log("Resolved Path:", resolvedPath);

// Normalize paths (fixes extra slashes, dots, etc.)
console.log("\n=== Path Normalize ===");
const messyPath = "/users/chirag//projects/../projects/node-core-projects//path-utility/";
console.log("Messy Path:", messyPath);
console.log("Normalized Path:", path.normalize(messyPath));

// Parse a path into an object
console.log("\n=== Path Parse ===");
console.log(path.parse(filePath));
