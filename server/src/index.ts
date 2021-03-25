import Server from "./server";
import User from "./user/user.controller";
const server = new Server([new User()], 4000);

server.createServer();
