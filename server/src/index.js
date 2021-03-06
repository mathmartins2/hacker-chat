import SocketServer from "./socket.js";
import Event from 'events'

const eventEmitter = new Event()

const port = process.env.PORT || 9000
const socketServer = new SocketServer({ port })
const server = await socketServer.initialize(eventEmitter)
console.log(server.address().port)