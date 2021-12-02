const net = require("net");

// establishes a connection with the game server
const client = {
    connect: function () {
        const conn = net.createConnection({
            host: '165.227.47.243',
            port: 50541
        });

        /* interpret incoming data as text */
        conn.setEncoding('utf8');

        /* CONNECT event */
        conn.on("connect", () => {
            console.log("Successfully connected to game server.");
            conn.write('Name: ZK');
            setInterval(() => {
                conn.write('Move: up');
            }, 500);
        });

        /* DATA event */
        conn.on('data', (data) => {
            console.log(`New message from the server: ${data}`);
        });

        return conn;
    }
};

module.exports = client;

