import net from 'node:net';
 

const tcpServer = net.createServer((socket) => {
    // Handle connection here
    socket.on("data", (clientData) => {
        console.log(socket.write(`Client sent ${clientData}! and says congratulations to you for creating your first tcp server. Keep it up`));
    });
});
tcpServer.listen(3031, 'localhost', () => {
    console.log('TCP server listening on port 3031');
});