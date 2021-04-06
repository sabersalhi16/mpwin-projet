import { Request } from "express";
import { Controller } from "../interfaces/controller.interface";

interface User extends Controller {
  getAllUsers(req: RequestWithParams, res: ResponseWithParams): Promise<void>;
  addNewUser: (
    req: RequestWithParams,
    res: ResponseWithParams
  ) => Promise<void>;
}
interface RequestWithParams extends Request {
  params: { [key: string]: string | number | any };
}

interface ResponseWithParams extends Response {
  send();
}

export { User, RequestWithParams, ResponseWithParams };
