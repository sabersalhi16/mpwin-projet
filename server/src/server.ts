import express, { Application } from "express";
import mongoose from "mongoose";
import { Controller } from "./interfaces/controller.interface";
export default class Server {
  public app: Application;
  public port: number;
  constructor(contollers: Controller[], port: number) {
    this.app = express();
    this.port = port;
    this.initMiddleWares();
    this.initControllers(contollers);

    // this.connectToServer();
  }
  initMiddleWares() {
    this.app.use(express.urlencoded());
    this.app.use(express.json());
  }
  initControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use("/api", controller.router);
    });
  }

  createServer() {
    this.app.listen(this.port, () => {
      console.log(` app listen at port ${this.port}`);
      console.log("process.env.", process.env.POSTGRES_DB);
    });
  }

  // connectToServer() {
  //   mongoose.connect(`mongodb://${process.env.MONGO_URI}`, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  // }
}
