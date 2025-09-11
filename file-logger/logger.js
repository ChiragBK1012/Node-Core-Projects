/**
 * ===== Logger Utility =====
 *
 * A simple custom logger to write logs into a file.
 * Real-world use cases:
 *  - Save server requests
 *  - Track errors
 *  - Record system activity for debugging
 */

const fs = require("fs");
const path = require("path");

// Path for log file
const logFile = path.join(__dirname, "app.log");

/**
 * Logs a message with a timestamp into app.log
 * @param {string} level - log level ("INFO", "ERROR", "WARN")
 * @param {string} message - log message
 */
function log(level, message) {
    const time = new Date().toISOString();
    const logMessage = `[${time}] [${level}] ${message}\n`;

    // Append log to file
    fs.appendFileSync(logFile, logMessage, "utf8");

    // Also print to console
    console.log(logMessage.trim());
}

// Example usage
log("INFO", "Server started successfully");
log("ERROR", "Something went wrong!");
log("WARN", "Low disk space");

module.exports = log;
