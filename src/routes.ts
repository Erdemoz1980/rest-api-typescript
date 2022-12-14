import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/userController';
import validate from './middleware/validateResource';
import { createUserSchema } from './schema/userSchema';

function routes(app:Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post('/api/users', validate(createUserSchema), createUserHandler);
}

export default routes;