import { UserDocument } from "./userModel";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config';

export interface SchemaDocument extends mongoose.Document{
  user: UserDocument['_id'],
  valid: boolean,
  userAgent:string,
  createdAt: Date,
  updatedAt: Date,
  comparePassword:(candidatePassword:string)=>Promise<boolean>
};

const sessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId,ref:'User'},
  valid: { type: Boolean, default: true },
  userAgent:{type:String}
}, {
  timestamps: true
});


const Session = mongoose.model('Session', sessionSchema);

export default Session;