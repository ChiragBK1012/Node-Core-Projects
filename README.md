# Node.js Core Modules Demo 🚀

This project is a collection of simple demos showcasing **Node.js core modules** and a custom logger utility.
It’s meant for learning and practicing the basics of Node.js before moving on to frameworks like Express.

---

## 📂 Project Structure

```
.
├── crypto-examples/
│   └── cryptoDemo.js        # Hashing, random tokens, HMAC, AES encryption
├── events-examples/
│   └── eventsBasic.js       # EventEmitter basics
├── fs-examples/
│   ├── fs-callback.js       # File operations demo using callbacks
│   ├── fs-promise.js        # File operations demo using promises
│   ├── fs-sync.js           # File operations demo using synchronous way
│   └── fs-asyncawait.js     # File operations demo using async/await
├── file-logger/
│   ├── logger.js            # Custom logger utility
│   └── app.log              # Log file (ignored in .gitignore)
├── system-info/
│   └── systemInfo.js        # System information demo
├── path-utility/
│   └── pathUtility.js       # Path module usage
├── basic-server
│   └── server.js            # Simple HTTP server
│   └── serverGetPost.js     # Simple GET/POST HTTP server
└── README.md                # Project documentation
```

---

## 🚀 How to Run

1. Clone the repo and navigate inside:
   ```bash
   git clone https://github.com/ChiragBK1012/Node-Core-Projects
   cd Node-Core-Projects
   ```

2. Run any demo file using Node.js:
   ```bash
   node path-utility/pathUtility.js
   node system-info/systemInfo.js
   node fs-examples/fs-callback.js
   node fs-examples/fs-promise.js
   node fs-examples/fs-sync.js
   node fs-examples/fs-asyncawait.js
   node crypto-examples/cryptoDemo.js
   node events-examples/eventsBasic.js
   ```

3. Run the logger demo:
   ```bash
   node file-logger/logger.js
   ```
   Logs will also be written to `logger/app.log`.

4. Start the simple server:
   ```bash
   node basic-server/server.js
   ```
   Then open [http://localhost:3000](http://localhost:3000) in your browser.

5. Start the simple GET/POST server:
   ```bash
   node basic-server/serverGetPost.js
   ```
   Then open [http://localhost:3001](http://localhost:3001) in your browser.

---

## 📌 Testing GET/POST Routes

You can test the routes using **Postman**, **Insomnia**, or any HTTP client.

1. **GET request**

   * URL: `http://localhost:3001/`
   * Method: GET
   * Response:

```json
{
  "message": "Hello from GET request!"
}
```

2. **POST request**

   * URL: `http://localhost:3001/submit`
   * Method: POST → Body → raw → JSON

Example body:

```json
{
  "name": "Chirag",
  "age": 21
}
```

* Response:

```json
{
  "message": "Data received",
  "data": "{\n  \"name\": \"Chirag\",\n  \"age\": 21\n}"
}
```

3. **Unknown routes** → returns 404:

```json
{
  "error": "Not Found"
}
```

---

## 📌 Modules Covered
- **fs** → File system operations
- **path** → Work with file and directory paths
- **os** → System information (CPU, memory, uptime)
- **crypto** → Hashing, encryption, tokens
- **events** → Event-driven programming
- **http** → Basic web server

---

## 🛠️ Custom Utility
- **Logger** → Records logs into a file with timestamps. Useful for debugging and monitoring.

---

## 🎯 Next Steps
Once comfortable with these basics:
- Learn **Express.js** for building APIs  
- Explore databases (MongoDB, MySQL)  
- Add middleware, routes, and error handling  
