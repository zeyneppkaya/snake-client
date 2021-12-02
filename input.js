// setup interface to handle user input from stdin
const input = {
    setupInput: () => {
        const stdin = process.stdin;
        stdin.setRawMode(true);
        stdin.setEncoding('utf8');
        stdin.resume();

        stdin.on('data', (data) => {
            if (data === '\u0003') {
                process.exit();
            } else {
                console.log(data);
            }
        });

        stdin.on('error', (err) => {
            console.log(err);
        });

        return stdin;
    },
};


module.exports = input;
