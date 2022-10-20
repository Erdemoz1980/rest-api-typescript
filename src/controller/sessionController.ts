import {Request, Response } from 'express';
import { validatePassword } from '../service/userService';


export async function createUserSessionHandler(req: Request, res: Response) {
  
  //Validate user's passsword
  const user = await validatePassword(req.body);

  //create session

  //create access token

  //create refresh token

  //return access & refresh tokens

  
};