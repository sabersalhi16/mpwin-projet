import Server from "./server";
import User from "./user/user.controller";
import { createConnection } from "typeorm";
import config from "./ormconfig";
require("dotenv").config();

(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log("Error while connecting to the database", error);
    return error;
  }
  const server = new Server([new User()], 4000);
  server.createServer();
})();
