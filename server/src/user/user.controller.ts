import { User, RequestWithParams } from "./user.interface";
import express, { Request, Response } from "express";
import { Controller } from "../interfaces/controller.interface";
class UserController implements Controller {
  public path: string = "/users";
  public router = express.Router();
  private users: User[] = [
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
  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path, this.getAll.bind(this));
    this.router.post(this.path, this.addNew.bind(this));
    this.router.get(this.path + "/:id", this.getById.bind(this));
  }
  public getAll(req: Request, res: Response): void {
    res.send(this.users);
  }

  public addNew(req: Request, res: Response) {
    const user: User = req.body;
    this.users.push(user);
    res.send(user);
  }

  public async getById(req: RequestWithParams, res: Response) {
    const users: User[] = await this.users;
    const { id } = await req.params;
    const response = await users.find((item) => item.id == id);
    res.send(response);
  }
}

export default UserController;
