import User, { UserDocument } from '../models/userModel';
import { DocumentDefinition } from 'mongoose';
import { omit } from 'lodash';

export async function createUser(
  input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>) {
  try {
    const user = await User.create(input);
    return omit(user.toJSON(), 'password');
  } catch (err:any) {
    throw new Error(err.message);
    
  }
};

//we are omitting createdAt and updatedAT here, because they are generated automatically by mongoose. We don't need to pass them in this function

export async function validatePassword({ email, password }: {email:string, password:string}) {
  const user = await User.findOne({ email });
  if (!user) return false;

  const isValid = await user.comparePassword(password);
  if (!isValid) return false;

  return omit(user.toJSON(), 'password');

};
