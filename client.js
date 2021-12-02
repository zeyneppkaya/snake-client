const net = require("net");

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host: '165.227.47.243',
        port: 50541,
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    conn.on("connect", () => {
        console.log("Successfully connected to game server.");
        conn.write('Name: ZK');
        setInterval(() => {
           conn.write('Move: up');
        }, 200);
    });

    conn.on("data", (data) => {
        console.log('New message from the server :', data);
    });

    return conn;
};

console.log("Connecting ...");

module.exports = connect;

