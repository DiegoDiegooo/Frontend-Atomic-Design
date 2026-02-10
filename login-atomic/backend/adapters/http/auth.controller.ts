import { Request, Response } from "express";
import { LoginUser } from "../../application/folder/LoginUser";

export const loginController = (req: Request, res: Response) => {
  try {
    const loginUser = new LoginUser();
    const result = loginUser.execute(req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};