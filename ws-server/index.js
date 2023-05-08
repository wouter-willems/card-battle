const WebSocket = require('ws');
const express = require('express');
const app = express();

const wss = new WebSocket.Server({ port: 4202 });

let connections = [];

wss.on('connection', function connection(ws) {
    console.log('got connection');
    connections.push(ws);
    console.log(connections.length)
    ws.send('connected');
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
});

console.log('listening on 4201')

app.use(express.static('static'))
app.listen(4201);
