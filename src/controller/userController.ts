import { Request, Response } from 'express';
import { createUser } from '../service/userService';


export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return user;

  } catch (err) {
    console.error(err);
    return res.status(409).send(err.message);
  }
};