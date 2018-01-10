import express from 'express'
import http from 'http'
import socketIO from 'socket.io'

const app = express()
const server = http.Server(app)
const io = socketIO(server)

server.listen(3001, function(){
  console.log('listening on *:3001');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

  console.log('a user connected');

  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  // });
});
