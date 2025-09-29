 import http from "http";
import app from "./app";
import { Server } from "socket.io";

const PORT = 4000;
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", socket => console.log("Frontend connected:", socket.id));

server.listen(PORT, ()=>console.log(`Backend running on ${PORT}`));