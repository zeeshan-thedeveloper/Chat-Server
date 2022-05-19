const express = require('express');
const path = require("path");
const app = express();
const http = require('http')
const server = http.createServer(app)
const socketio= require('socket.io')
const io= socketio(server)
app.use(express.static(path.join(__dirname,'public')))

const port = process.env.PORT || "3000";

// run when client connects
io.on('connection',socket=>{
    console.log('new ws conntion')
})

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
