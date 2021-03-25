import { Request } from "express";

interface User {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  imageUrl: string;
  activated: boolean;
  langKey: string;
  createdBy: string;
  createdDate: string;
  authorities: string;
  photoDocumentId: number;
  couvertureDocumentId: number;
}
interface RequestWithParams extends Request {
  params: { [key: string]: string | number | any };
}
export { User, RequestWithParams };
