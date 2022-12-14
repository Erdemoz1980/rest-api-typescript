import Session from '../models/sessionModel';

export async function createSession(userId:string, userAgent:string) {
  const session = await Session.create({ user: userId, userAgent });
  return session.toJSON();
};