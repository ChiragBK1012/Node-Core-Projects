/**
 * ===== Crypto Module Demo =====
 *
 * This file demonstrates how to use Node.js's built-in crypto module.
 * Real-world use cases:
 *
 * 1. Password Hashing → Used to store passwords securely in databases.
 * 2. Random Token Generation → Used for API keys, reset password links, session IDs.
 * 3. HMAC (Hash-based Message Authentication Code) → Used for verifying message integrity (e.g., JWTs).
 * 4. Symmetric Encryption (AES) → Used for encrypting/decrypting sensitive data like files or messages.
 */

const crypto = require("crypto");

console.log("===== Crypto Module Demo =====");

// 1. Hashing a password (one-way, irreversible)
const password = "mySecret123";
const hash = crypto.createHash("sha256").update(password).digest("hex");
console.log("\n--- Password Hashing ---");
console.log("Original Password:", password);
console.log("SHA-256 Hash:", hash);

// 2. Generating a random token (useful for session IDs, API keys)
const token = crypto.randomBytes(16).toString("hex");
console.log("\n--- Random Token ---");
console.log("Random Token:", token);

// 3. HMAC (Hash-based Message Authentication Code) with a secret key
const secret = "supersecretkey";
const message = "This is a message.";
const hmac = crypto.createHmac("sha256", secret).update(message).digest("hex");
console.log("\n--- HMAC ---");
console.log("Message:", message);
console.log("HMAC:", hmac);

// 4. Symmetric encryption/decryption (AES)
console.log("\n--- Symmetric Encryption (AES-256-CBC) ---");
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32); // AES-256 needs 32-byte key
const iv = crypto.randomBytes(16); // Initialization vector

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Hello Crypto!", "utf8", "hex");
encrypted += cipher.final("hex");
console.log("Encrypted:", encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log("Decrypted:", decrypted);
