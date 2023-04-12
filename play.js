const net = require("net");

const { connect } = require('./client');

console.log("Connecting ...");
const conn = connect();

conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write('Name: SNK');
});

