const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4201 });

let connections = [];

wss.on('connection', function connection(ws) {
    console.log('got connection');
    connections.push(ws);
    console.log(connections.length)
    ws.on('message', function incoming(message) {
        connections.forEach(e => {
            if (e !== ws) {
                console.log(message.toString())
                e.send(message.toString());
            }
        })
    });

    ws.on('close', function close() {
        connections = connections.filter(e => e !== ws);
        console.log('disconnect');
    });

    ws.send('player' + connections.length);
});

console.log('listening on 4201')
