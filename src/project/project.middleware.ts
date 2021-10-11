import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';


@Injectable()
export class ProjectMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): any {
    req['user'] = {
      "id": 101,
      "firstName": "Alan",
      "lastName": "Turing",
      "email": "alan@email.com",
      "roles": ["admin"]
    }
    console.log('request...', req);
    next()
  }
}


export function logger(req, res, next) {
  console.log(`log...`);
  next();
};
