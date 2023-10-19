const EventEmitter = require("events");
const http = require("http");
// observer programming pattern

class Plants extends EventEmitter {
  constructor() {
    // super() is always called in extending class
    super();
  }
}

const myEmitter = new Plants();

myEmitter.on("newPlant", () => {
  console.log("There is new plant added");
});

myEmitter.on("newPlant", () => {
  console.log("Added plant is: Sergii");
});

myEmitter.on("newPlant", (plant) => {
  console.log(`There is new plant ${plant} added to your Herbarium`);
});

myEmitter.emit("newPlant", "Gibberish Somethinglora");

////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
    console.log('Request received');
    res.end('Request received');

});

server.on("request", (req, res) => {
    console.log('Another request 🌿');
    
});

server.on('close', () => {
    console.log('Server closed');
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for requests...');
})