import { Request, Response } from "express";
import { CreateFolderUseCase } from "../../application/folder/CreateFoldersUseCase";
import { GetFoldersUseCase } from "../../application/folder/GetFoldersUseCase";
import { InMemoryFolderRepository } from "../../infrastructure/folder/InMemoryFolderRepository";

const repository = new InMemoryFolderRepository();
const createUseCase = new CreateFolderUseCase(repository);
const getUseCase = new GetFoldersUseCase(repository);

export class FolderController {
  static create(req: Request, res: Response) {
    const { name, userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const result = createUseCase.execute(name, userId);

    res.status(201).json(result);
  }

  static getAll(req: Request, res: Response) {
    const userId = req.query.userId as string;

    if (!userId) {
      return res.status(400).json({ message: "userId query param is required" });
    }

    const folders = getUseCase.execute(userId);
    res.status(200).json(folders);
  }
}