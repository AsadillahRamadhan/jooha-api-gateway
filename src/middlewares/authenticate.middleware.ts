import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from 'src/services/user.service';

@Injectable()
export class AuthenticateMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers['authorization']) return res.sendStatus(401);
    const token = req.headers['authorization'].split(' ')[1];
    this.userService.verifyToken(token).subscribe((result: any) => {
      if (!result[0].isVerified) return res.sendStatus(401);
      next();
    });
  }
}
