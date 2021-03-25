import { Request, Response } from "express";
interface Controller {
  path: string;
  port?: number;
  initRoutes(): void;
  getAll(req: Request, res: Response): void;
}

export { Controller };

// id: number;
// login: string;
// firstName: string;
// lastName: string;
// name: string;
// email: string;
// imageUrl: string;
// activated: boolean;
// langKey: string;
// createdBy: string;
// createdDate: string;
// authorities: string;
// photoDocumentId: number;
// couvertureDocumentId: number;
