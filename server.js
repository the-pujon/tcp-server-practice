const net = require("net")

const tcpServer = net.createServer((socket)=>{
    console.log("A client just connected")

    socket.on("data", (clientData) => {
        console.log(socket.write(`Client sent ${clientData}! and says congratulactions to you for creating your first tcp server. Keep it up`))
    })
})

tcpServer.listen("5555", "localhost")