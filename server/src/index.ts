import Server from "./server";
import User from "./user/user.controller";
import { createConnection } from "typeorm";
import config from "./ormconfig";
import validateEnv from "./utils/validateEnv";
import "reflect-metadata";
require("dotenv").config();

(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log("Error while connecting to the dabase", error);
    return error;
  }
  const server = new Server([new User()], 4000);
  server.createServer();
})();
validateEnv();
