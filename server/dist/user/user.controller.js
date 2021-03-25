"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class UserController {
    constructor() {
        this.path = "/users";
        this.router = express_1.default.Router();
        this.users = [
            {
                id: 9403,
                login: "saber",
                firstName: null,
                lastName: null,
                name: "",
                email: "kchdschacak@gmail.com",
                imageUrl: null,
                activated: true,
                langKey: "fr",
                createdBy: "superadmin",
                createdDate: "2020-01-11T14:09:59.296311Z",
                authorities: "ROLE_EDITOR",
                photoDocumentId: 122,
                couvertureDocumentId: null,
            },
        ];
        this.initRoutes();
    }
    initRoutes() {
        this.router.get(this.path, this.getAll.bind(this));
        this.router.post(this.path, this.addNew.bind(this));
        this.router.get(this.path + "/:id", this.getById.bind(this));
    }
    getAll(req, res) {
        res.send(this.users);
    }
    addNew(req, res) {
        const user = req.body;
        this.users.push(user);
        res.send(user);
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.users;
            const { id } = yield req.params;
            const response = yield users.find((item) => item.id == id);
            res.send(response);
        });
    }
}
exports.default = UserController;
