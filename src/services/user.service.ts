import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs';

@Injectable()
export class UserService implements OnModuleInit {
  private userService: UserService;
  constructor(@Inject('USER_SERVICE') private auth: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.auth.getService<UserService>('UserService');
  }

  register(body: any): Observable<any> {
    const user = {
      name: body.name,
      username: body.username,
      email: body.email,
      password: body.password,
    };

    return this.userService.register(user);
  }

  login(body: any): Observable<any> {
    const user = { username: body.username, password: body.password };

    return this.userService.login(user);
  }

  setUserData(body: any): Observable<any> {
    return this.userService.setUserData(body);
  }

  getUserData(query: any): Observable<any> {
    return this.userService.getUserData(query);
  }

  generateAccessToken(body: any): Observable<any> {
    return this.userService.generateAccessToken(body);
  }

  verifyToken(access_token: any): any {
    return this.userService.verifyToken({ access_token }).pipe(toArray());
  }
}
