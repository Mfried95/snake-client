const net = require("net");
const { stdin } = require("process");

const { connect } = require('./client');


console.log("Connecting ...");
const conn = connect();

conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write('Name: SNK');
  conn.write("Say: wobbles is palying");
});

const { setupInput } = require('./input');

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === '\u001B[A') {
    conn.write('Move: up');
  } else if (key === '\u001B[B') {
    conn.write('Move: down');
  } else if (key === '\u001B[C') {
    conn.write('Move: right');
  } else if (key === '\u001B[D') {
    conn.write('Move: left');
  }
};


stdin.on("data", handleUserInput);
setupInput();