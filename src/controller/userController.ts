import { Request, Response } from 'express';
import { omit } from 'lodash';
import { CreateUserInput } from '../schema/userSchema';
import { createUser } from '../service/userService';


export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput['body']>, res: Response) {
  try {
    const user = await createUser(req.body)
    return res.send(omit(user.toJSON(),'password'));

  } catch (err:any) {
    console.error(err);
    return res.status(409).send(err.message);
  }
};