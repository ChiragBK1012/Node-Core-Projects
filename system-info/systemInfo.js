const os = require("os");

console.log("===== System Information =====");

// OS type and platform
console.log("OS Type:", os.type());         // e.g., Linux, Darwin, Windows_NT
console.log("OS Platform:", os.platform()); // e.g., win32, linux, darwin

// OS release and architecture
console.log("OS Release:", os.release());   // e.g., 10.0.22621
console.log("CPU Architecture:", os.arch()); // e.g., x64, arm

// CPU details
console.log("\n===== CPU Information =====");
console.log("Number of CPUs:", os.cpus().length);
console.log("CPU Model:", os.cpus()[0].model);
console.log("CPU Speed (MHz):", os.cpus()[0].speed);

// Memory info
console.log("\n===== Memory Information =====");
console.log("Total Memory (MB):", (os.totalmem() / 1024 / 1024).toFixed(2));
console.log("Free Memory (MB):", (os.freemem() / 1024 / 1024).toFixed(2));

// Uptime
console.log("\n===== Uptime =====");
console.log("System Uptime (seconds):", os.uptime());
console.log("System Uptime (hours):", (os.uptime() / 3600).toFixed(2));

// User info
console.log("\n===== User Information =====");
console.log("User Info:", os.userInfo());

// Hostname and network
console.log("\n===== Network Information =====");
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Temporary Directory:", os.tmpdir());
console.log("Network Interfaces:", os.networkInterfaces());
