const express = require('express');
const app = express();
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

app.use(cors())

const server = http.createServer(app)

app.get('/', (req, res) =>{
    res.send('Hello World')
})

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:8000',
        methods:['GET', 'POST']
    },
});



io.on('connection', (socket) => {
    console.log('A user is connected');

    socket.on('disconnect', () => {
        console.log('A user is disconnected');
    });
});


server.listen(8000, () => {
    console.log('listening on *:8000');
})
