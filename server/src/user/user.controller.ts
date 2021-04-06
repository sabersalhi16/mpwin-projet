import { User, RequestWithParams, ResponseWithParams } from "./user.interface";
import UserEntity from "./user.entity";
import UserDto from "./user.dto";
import express, { Request, Response } from "express";
import AuthorityEntity from "../authorities/authoritie.entity";
import HttpException from "../exceptions/HttpException";
import { getRepository } from "typeorm";
class UserController implements User {
  public path: string = "/users";
  public router = express.Router();
  private userRepository = getRepository(UserEntity);
  constructor() {
    this.initRoutes();
    this.path = "/testusers";
  }

  public initRoutes() {
    this.router.get(this.path, this.getAllUsers.bind(this));
    this.router.post(this.path, this.addNewUser.bind(this));
    this.router.get(this.path + "/:id", this.getUserById.bind(this));
  }
  public async getAllUsers(
    req: RequestWithParams,
    res: ResponseWithParams
  ): Promise<void> {
    try {
      res.send();
    } catch (e) {}
  }

  public async addNewUser(
    req: RequestWithParams,
    res: ResponseWithParams
  ): Promise<void> {
    const userData = req.body;
    const newUser = await this.userRepository.create(userData);
    try {
      await this.userRepository.save(newUser);
      res.send();
    } catch (e) {}
  }

  public async getUserById(req: RequestWithParams, res: Response) {}
}

export default UserController;
