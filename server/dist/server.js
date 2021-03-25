"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor(contollers, port) {
        this.app = express_1.default();
        this.port = port;
        this.initMiddleWares();
        this.initControllers(contollers);
    }
    initMiddleWares() {
        this.app.use(express_1.default.urlencoded());
        this.app.use(express_1.default.json());
    }
    initControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use("/api", controller.router);
        });
    }
    createServer() {
        this.app.listen(this.port, () => {
            console.log(` app listen at port ${this.port}`);
        });
    }
}
exports.default = Server;
