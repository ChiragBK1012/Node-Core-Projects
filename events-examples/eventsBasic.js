const EventEmitter = require("events");

// Create an event emitter object
const emitter = new EventEmitter();

// Register (listen) for an event
emitter.on("greet", name => {
    console.log(`Hello, ${name}!`);
});

emitter.on("login", user => {
    console.log(`User ${user} just logged in.`);
});

emitter.on("error", err => {
    console.error("Error occurred:", err.message);
});

// Emit (trigger) events
emitter.emit("greet", "Chirag");
emitter.emit("login", "ChiragBK1012");

// Emitting an error
emitter.emit("error", new Error("Something went wrong"));
