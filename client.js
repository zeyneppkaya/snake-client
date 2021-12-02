const net = require('net');
const { IP, PORT , up , right , down , left } = require('./constants');

const connect = () => {
    const conn = net.createConnection({
        host: IP,
        port: PORT
    });

    conn.setEncoding('utf8');

    conn.write('Name: ZK')

    setInterval(() => { conn.write(`${up}`) }, 700);
    setInterval(() => { conn.write(`${right}`) }, 700);
    setInterval(() => { conn.write(`${down}`) }, 700);
    setInterval(() => { conn.write(`${left}`) }, 700);

    conn.on('data', (data) => {
        console.log('New message from the server: ' + data);
    });

    conn.on('connect', () => {
        console.log("You are succesfully connected to the server:)");
    });
    return conn;
}

module.exports = connect;

