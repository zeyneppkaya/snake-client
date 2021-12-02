const connect = require("./client");

// setup interface to handle user input from stdin

const handleUserInput = function (data) {
    if (data === '\u0003') {
        stdout.write("Exited the game.\n");
        process.exit();
    }
};

const setupInput = function () {
    const stdin = process.stdin;

    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

setupInput();
connect();

